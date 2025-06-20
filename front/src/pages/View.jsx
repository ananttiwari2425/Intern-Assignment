import React from 'react'
import ViewItems from '../components/ViewItems';
import { useLoaderData } from 'react-router-dom'

export default function View() {
    const items = useLoaderData();
  return (
    <div className='view'>
        <ViewItems/>
    </div>
  )
}
