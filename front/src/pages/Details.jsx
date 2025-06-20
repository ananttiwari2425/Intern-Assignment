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
        <span>{Item.name}</span>
        <span>{Item.type}</span>
        <span>{Item.description}</span>

        <button onClick={handleClick}>enquire</button>
    </div>
  )
}
