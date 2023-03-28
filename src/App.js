import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav.jsx'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/about/About'
import Detail from './components/detail/Detail.jsx'


function App () {
  const [characters, setCharacters] = useState([]);
//   const example = {
//     name: 'Morty Smith',
//     species: 'Human',
//     gender: 'Male',
//     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//  };
  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((data) => {
                setCharacters([...characters, data]);
              })
              .catch((error) => console.log(error))
  };

  const onClose = (id) =>{
    const filtered = characters.filter((char) => char.id !== id)
    setCharacters(filtered)
  } 
  return (
    <div className='App'>
        <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>

        
    </div>
  )
}

export default App
