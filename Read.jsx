import React, { useState, useRef } from 'react';
import Axios from 'axios';

const Read = () => {
  const email = useRef();
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailData = email.current.value;

    try {
      const url = `http://localhost:8011/fetch/${emailData}/`;
      const result = await Axios.get(url);
      setData(result.data);

      console.log(result)
      console.log(result.data[0].fullName)
      console.log(result.data[0].email)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='mainBox' style={{minHeight:"100vh"}}>
      <h3 className='text-center my-4'>Read Data</h3>

      <form
        className='d-flex justify-content-center align-items-center flex-column'
        onSubmit={handleSubmit}
      >
        <input
          type='email'
          className='w-75 form-control my-3'
          placeholder='Email'
          name='email'
          ref={email}
        ></input>
        <input
          type='submit'
          className='bg-primary text-white my-3 rounded-3 px-4 py-2 border-primary'
        ></input>
      </form>

      {data[0] && (
        <div className='text-center'>
          <p>Full Name: {data[0].fullName}</p>
          <p>Email: {data[0].email}</p>
        </div>
      )}
    </div>
  );
};

export default Read;