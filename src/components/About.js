import React from 'react'

export default function About(props) {
    
  return (
    <>
        <div className="container py-3">
            <h1 className={`my-3 text-${props.mode==='dark'?'light':'dark'}`}>About Us</h1>
            <p className={`text-${props.mode==='dark'?'light':'dark'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae tenetur nihil nisi laudantium delectus odio quibusdam fugit dignissimos, dolorum beatae vitae necessitatibus libero amet consequuntur consequatur corrupti deserunt incidunt voluptatem!</p>
        </div>
    </>
  )
}
