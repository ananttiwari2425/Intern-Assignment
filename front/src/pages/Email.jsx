import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Email() {

    const[email,setEmail] = useState('')
    const navigate = useNavigate();

    const handleOnSubmit = async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:3000/user/add',{email})
        .then((res)=>{
            navigate('/')
        })
    }
  return (
    <div className='email'>
         <form className='form' name ='email'onSubmit = {handleOnSubmit}>
        <div className='form-control'>
                <label>Email</label>
                <input type="email" className='input' required onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <button type='submit'>Submit</button>
            </form>
    </div>
  )
}
