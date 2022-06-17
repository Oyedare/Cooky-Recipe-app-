import React from 'react'

export const Ingredients = ({ingredients}) => {
  return (
    <div className="ingredients-container">
      <h2>Ingredients</h2>
      {ingredients.map((ingredient,index)=>(
      <ul key={index}>
        <li>{ingredient.text}</li>
      </ul>
      ))}
    </div>
  )
}
