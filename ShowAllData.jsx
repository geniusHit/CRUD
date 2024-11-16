import React, { useState, useEffect, useRef } from 'react'
import Axios from 'axios'

const ShowAllData = () => {
  const [data1, setData] = useState([])
  const editBox=useRef()
  const fName=useRef()
  const email=useRef()
  const [em, setEmail]=useState()

  const fetchData = async () => {
    const result = await Axios.get("http://localhost:8011/showAllData")
    setData(result.data)
    console.log(result)
  }

  useEffect(()=>{
    fetchData()
  }, [])

  const edit=(email)=>{
    editBox.current.style.display="block"

    return save;
  }

  const save=(newName, newEmail)=>{
    try{
      const result= Axios.patch(`http://localhost:8011/edit/${em}/${newName}/${newEmail}/`)
      console.log(result)
      alert("Data saved!")
    }
    catch(error)
    {
      console.log(error)
    }
  }

  const deletee=(emai)=>{
    try{
      Axios.delete(`http://localhost:8011/deletee/${emai}`)
      alert("Data deleted!")
    }
    catch(error)
    {
      console.log(error)
    }
  }

  return (
    <div class='mainBox' style={{minHeight:"100vh"}}>
      <h3 className='text-center my-4'>Show All Data</h3>

      <div className='bg-light rounded-3 shadow-sm' ref={editBox} style={{position:"fixed", display:"none", width:"30%", left:"50%", top:"50%", transform:"translate(-50%, -50%)", padding:"20px"}}>
        <form>
          <h5 style={{display:"inline"}}>Edit</h5>

          <button type="button" class="btn-close" aria-label="Close" style={{float:"right", display:"inline"}} onClick={()=>{editBox.current.style.display="none"}}></button>

          <input type='text' ref={fName} name='fullname' className='w-100 my-3 border-1' placeholder='Fullname' style={{height:"40px",  outline:"none"}}></input><br/>

          <input type='email' ref={email} name='email' className='w-100 my-3 border-1 ' placeholder='Email' style={{height:"40px", outline:"none"}}></input><br/>

          <button className='btn btn-primary my-3' onClick={()=>{
            let f=fName.current.value
            let e=email.current.value
            save(f, e)}}>Save</button>
        </form>
      </div>

      <div className='mx-auto d-flex justify-content-center'>
        <table className='border bg-light mb-3'>
          <thead className=''>
            <tr className='border bg-dark text-white'>
              <td>FullName</td>
              <td>Email</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              data1!={} && data1.map((d, i) => {
                return (
                  <tr className='border' key={i}>
                    <td>{d.fullName}</td>
                    <td>{d.email}</td>
                    <td className='d-flex justify-content-between gap-3'>
                      <button className='btn btn-primary' onClick={()=>{edit(d.email); setEmail(d.email)}}>Edit</button>
                      <button className='btn btn-danger' onClick={()=>{deletee(d.email); setEmail(d.email)}}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowAllData