import {useState}from "react";
import styled from "./SearchBar.module.css"

export default function SearchBar(props) {
   const [character, setCharacter] = useState("");
   const handleChange = (e) => {
      const {value} = e.target;
      setCharacter(value)
   }
   return (
      <div className={styled.container}>
         <input className={styled.input} type='search' onChange={handleChange}/>
      <button className={styled.buttonSearchBar} onClick={() => props.onSearch(character)}>Add</button>
      </div>
   );
}
