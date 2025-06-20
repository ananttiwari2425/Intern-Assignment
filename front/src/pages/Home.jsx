import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate();

  const handleClick1 = ()=>{
    navigate('/addItem')
  }
  const handleClick2 = ()=>{
    navigate('/getItems')
  }

  return (
    <div className='homebox'>
      <button onClick={handleClick1}>Add Items</button>
      <button onClick={handleClick2}>Veiw All Items</button>
    </div>
  )
}
