import React from 'react'

const Recipe = ({ title, image, handleClick }) => {
  return (
    <>
      <div className="wrap" onClick={handleClick}>
        <img src={image} alt=""></img>
        <h1 className="title">{title}</h1>
        {/* <ul>
           {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))} 
        </ul> */}
      </div>
    </>
  )
}

export default Recipe
