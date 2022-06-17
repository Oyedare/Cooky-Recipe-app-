/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Ingredients } from '../components/Ingredients'
import { Loading } from '../components/Loading'
import { Search } from '../components/Search'
import { useRecipeContext } from '../hooks/context'

export const Recipe = () => {
  const {getRecipe,Recipes,searchTerm,isLoading} = useRecipeContext()

  useEffect(()=>{
    if(searchTerm){
      console.log(isLoading);
     getRecipe()
    }
  },[searchTerm])

  if(isLoading) return <Loading />
  
  return (
    <>
      <Search />
      <div className='recipe-card-container container'>
        {Recipes.map((Recipe)=>(
          <div key={Recipe.recipe.calories} className="recipe-card">
            <div className="recipe-card-img">
              <img src={Recipe.recipe.image} alt="" />
            </div>
            <div className="recipe-card-content">
              <h1>{Recipe.recipe.label}</h1>
              <p>Dish Type: {Recipe.recipe.dishType}</p>
            </div>
            <div className="overlay">
              <Ingredients ingredients = {Recipe.recipe.ingredients}/>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
