import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'

const Create = () => {
  const link=useNavigate()

  const [userData, setUserData]=useState({
    fullName:"",
    email:""
  })

  const handleChange=(e)=>{
    setUserData((prevData)=>({
      ...prevData,[e.target.name]:e.target.value
    }))
  }

  const handleSubmit=async (e)=>{
    e.preventDefault()
    // console.log("userData.fullname = " + userData.fullName)
    // console.log("userData.email = " + userData.email)
    try{
      await Axios.post("http://localhost:8011/create/", userData)
      setUserData({fullName:"", email:""})
      link("/showalldata/")
      //alert("Data saved")
    }
    catch(error)
    {
      console.log(error)
      //alert("Data not saved!")
    }
  }

  return (
    <div style={{minHeight:"100vh"}}>
      <h3 className='text-center my-4'>Create Data</h3>

      <form className='d-flex justify-content-center align-items-center flex-column' onSubmit={handleSubmit}>
        <input type='text' className='w-75 form-control my-3' placeholder='FullName' name="fullName" onChange={handleChange}></input>
        <input type='email' className='w-75 form-control my-3' placeholder='Email' name="email" onChange={handleChange}></input>
        <input type='submit' className='bg-primary text-white my-3 rounded-3 px-4 py-2 border-primary'></input>
      </form>
    </div>
  )
}

export default Create