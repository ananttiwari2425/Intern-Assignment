import React from 'react'
import { useLoaderData,useNavigate } from 'react-router-dom'

export default function Details() {

    const Item = useLoaderData();
    const navigate = useNavigate();

    const handleClick = ()=>{
      navigate('/email')
    }


  return (
    <div className='det'>
        <h2>{Item.name}</h2>
        <h2>{Item.type}</h2>
        <h2>{Item.description}</h2>

        <button onClick={handleClick}>enquire</button>
    </div>
  )
}
