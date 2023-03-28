import styled from './Card.module.css'

export default function Card({ name, species, image, gender, onClose}) {
   return (
      <div className={styled.container}>
         <div className={styled.buttonCont}>
            <button className={styled.buttonCard} onClick={onClose}>X</button>
             <h2>{name}</h2>
         </div>
         <div className={styled.imgCont}>
           <img src={image} alt="No disponible" />
         </div>
         <div className={styled.card}>
            <h2>{species}</h2>
           <h2>{gender}</h2>
         </div>
      </div>
   );
}

