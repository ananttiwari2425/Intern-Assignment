import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const navigate = useNavigate();

  const handleClick1 = ()=>{
    navigate('/addItem')
  }
  const handleClick2 = ()=>{
    navigate('/getItems')
  }
  const handleClick3 = ()=>{
    navigate('/')
  }
  return (
    <div className='navbar'>
       <h1>Intern Project</h1>
      <ul>
      <li onClick={handleClick3}>Home</li>
        <li onClick={handleClick1}>Add</li>
        <li onClick={handleClick2}>View</li>
      </ul>
    </div>
  )
}
