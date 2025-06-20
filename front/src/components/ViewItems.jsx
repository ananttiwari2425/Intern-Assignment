import React from 'react'
import { useLoaderData ,useNavigate} from 'react-router-dom'

export default function ViewItems() {
    const items = useLoaderData()
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/details')
    }

    return (
      <div className='itemy' onClick={handleClick}>
  {
                      items?.map((item, index) => {
                          return (
                              <div key={index} className='card'>
                                  {/* <img src={`http://localhost:3000/images/${item.coverImage}`} width="120px" height="100px"></img> */}
                                  <div className='card-body'>
                                      <div className='title'>{item.name}</div>
                                          <div className='timer'>{item.type}</div>
                                          <div className='timer'>{item.description}</div>
                                   </div>
                              </div>
                          )
                      })
                  }
      </div>
    )
}
