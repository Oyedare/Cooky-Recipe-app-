import React, { createContext, useContext, useState } from 'react'
import axios from 'axios';
import { ErrorPage } from '../components/ErrorPage';

const RecipeContext = createContext()
export const ContextProvider = ({children}) => {
  const [Recipes,setRecipes] = useState([])
  const [searchTerm,setSearchTerm] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const APP_ID = '6afce542';
  const APP_KEY = 'bc70a087baa53b7d3880a9945d18ae11';
    
  const getRecipe = () =>{
    setIsLoading(true)

    axios.get(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`)

      .then((res)=>{
        setRecipes(res.data.hits);
        setIsLoading(false)
      })

      .catch((err)=>{
        console.log(err);
        return <ErrorPage />
      })

    }
  return (
    <RecipeContext.Provider value={{getRecipe,Recipes,searchTerm,setSearchTerm,isLoading}}>
      {children}
    </RecipeContext.Provider>
  )
}

export const useRecipeContext = () => useContext(RecipeContext);
