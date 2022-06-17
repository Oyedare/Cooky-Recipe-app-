import React from 'react'
import homeImage from '../assets/undraw_barbecue_3x93.svg';
import {Link} from 'react-router-dom'
export const Home = () => {
  return (
    <div className="container home">
      <div className="home-content">
        <h1>Get Popular Recipes At One Go</h1>
        <p>Do you find cooking hard or you easily forget the recipe to your favourite dish? Panic no more. Cooky got you</p>
        <Link to='/recipes' style={{ textDecoration: 'none' }}>
          <div className='home-button'>Get Recipes</div>
        </Link>
      </div>
      <div className="home-image">
        <img src={homeImage} alt="gh" />
      </div>
    </div>
  )
}
