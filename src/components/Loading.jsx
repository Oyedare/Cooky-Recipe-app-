import React from 'react'
import {ThreeCircles} from 'react-loader-spinner'
export const Loading = () => {
  return (
    <div className='loader'>
    <ThreeCircles
      color="blue"
      height={550}
      width={80}
    />
    </div>
  )
}
