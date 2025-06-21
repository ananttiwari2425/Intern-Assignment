import React from 'react'
import image from '../assets/image.jpg'
import { useLoaderData,useNavigate } from 'react-router-dom'

export default function Details() {

    const Item = useLoaderData();
    const navigate = useNavigate();

    const handleClick = ()=>{
      navigate('/email')
    }


  return (
    <div className='det'>
             <img src={image} width="120px" height="100px" /> 
        <h2>{Item.name}</h2>
        <h2>{Item.type}</h2>
        <p>{Item.description}</p>

        <button onClick={handleClick}>enquire</button>
    </div>
  )
}
