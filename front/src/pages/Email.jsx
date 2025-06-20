import React,{useState} from 'react'

export default function Email() {

    const[email,setEmail] = useState('')

    const handleOnSubmit =()=>{
        
    }
  return (
    <div>
         <form className='form' onSubmit = {handleOnSubmit}>
        <div className='form-control'>
                <label>Email</label>
                <input type="email" className='input' required onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <button type='submit'>Submit</button>
            </form>
    </div>
  )
}
