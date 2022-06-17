/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useRecipeContext } from '../hooks/context';
import {useDebounce} from 'use-debounce';
export const Search = () => {
  const [query,setQuey] = useState('')
  const {setSearchTerm} = useRecipeContext()
  const [debounceValue] = useDebounce(query, 2000);

  useEffect(() =>{
    if(debounceValue){
      setSearchTerm(debounceValue)
    }
  },[debounceValue])

  return (
    <div className='search container'>
      <input 
      type="text" 
      placeholder='Search for a recipe' 
      className='search-bar'
      value={query}
      onChange={(e) =>{setQuey(e.target.value)}}/>
      <FaSearch className='search-btn'/>
    </div>
  )
}
