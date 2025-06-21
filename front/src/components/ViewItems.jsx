import React from 'react';
import image from '../assets/image.jpg'
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function ViewItems() {
  const items = useLoaderData();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className='itemy'>
      {items?.map((item, index) => {
        return (
          <div key={index} className='card' onClick={() => handleClick(item._id)}>
             <img src={image} width="120px" height="100px" /> 
            <div className='card-body'>
              <div className='title'>{item.name}</div>
              <div className='timer'>{item.type}</div>
              <div className='timer'>{item.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

