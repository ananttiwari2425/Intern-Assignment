import React from 'react'
import ViewItems from '../components/ViewItems';
import { useLoaderData } from 'react-router-dom'

export default function View() {
  return (
    <div className='view'>
        <ViewItems/>
    </div>
  )
}
