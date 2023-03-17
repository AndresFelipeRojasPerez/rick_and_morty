import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


function Card({
   id,
   name,
   species,
   gender,
   image,
   onClose,
   addFavorite, 
   deleteFavorite, 
   myFavorites
}) {
   
const [isFav, setIsFav] = useState (false);

const handleFavorite = () => {
if (isFav) {
   setIsFav(false);
   deleteFavorite(id)
}else {
   setIsFav(true);
   addFavorite({
      id, 
      name, 
      species, 
      gender, 
      image, 
      onClose,
      addFavorite,
      deleteFavorite,
   })

}};

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div className= {style.container}>

         {isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )}

         <button className= {style.boton} onClick={() => onClose(id)}>X</button>
         <img className= {style.image}  src={image}/>
        <Link to= {`/detail/${id}`}>
         <h2>Name: {name}</h2>
         </Link>
         <h2>Species: {species}</h2>
         <h2>Gender:{gender}</h2>
         
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character))
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      },
   };
};

const mapStateToProps = (state) => {
   return{
   myFavorites:state.myFavorites
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);