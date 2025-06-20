import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import ViewItems from '../components/ViewItems'

export default function Add() {

    const [name,setName] = useState('');
    const [type,setType] = useState('');
    const [description,setDescription] = useState('');
    const [status,setStatus] = useState('');


    const navigate = useNavigate();

    const handleOnSubmit = async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:3000/add',{name,type,description})
        .then((res)=>{
            setStatus('item added')
            // navigate('/')

        })
        .catch(data=>setError(data.response?.data?.error))
    }
    const handleClick2 = ()=>{
        navigate('/getItems')
      }


  return (
    <div>
         <>
    <form className='form' onSubmit = {handleOnSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type="name" className='input' required onChange={(e)=>setName(e.target.value)}></input>
            </div>
            {/* <div className='form-control'>
                <label>Type</label>
                <input type="type" className='input' required onChange={(e)=>setType(e.target.value)}></input>
            </div> */}
            <div className='form-control'>
            <label>Choose Type</label>
<select name="type" className='input' onChange={(e)=>setType(e.target.value)}>
  <option value="shirt">Shirt</option>
  <option value="pant">Pant</option>
  <option value="jeans">Jeans</option>
  <option value="sweater">Sweater</option>
</select>
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input type="description" className='input' required onChange={(e)=>setDescription(e.target.value)}></input>
            </div>
            {/* <div className='form-control'>
                <label>CoverImage</label>
                <input type="password" className='input'></input>
            </div>
            <div className='form-control'>
                <label>Add more Images</label>
                <input type="password" className='input'></input>
            </div> */}
    
            <button type='submit'>Add</button>
            <p>{status}</p>
            <h3 onClick={handleClick2}>View Items</h3>
      </form>
        </>
    </div>
  )
}

