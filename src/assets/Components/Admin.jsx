import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  // Configure axios to send cookies
  axios.defaults.withCredentials = true;

  // Check if the user is an admin
  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const res = await axios.get('https://oasback.onrender.com/isadmin', {
          withCredentials: true, // Ensure cookies are sent
        });
    
        if (!res.data.success) {
          console.warn('Admin verification failed: User is not an admin');
          navigate('/'); // Redirect if not admin
        }
      } catch (error) {
        console.error(
          'Admin verification failed:',
          error.response?.data?.message || error.message
        );
        navigate('/'); // Redirect on error
      }
    };
    
  
    verifyAdmin();
  }, [navigate]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !description || !price || !file) {
      setMessage('All fields are required!');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('file', file);

    try {
      const res = await axios.post('https://oasback.onrender.com/admin', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },

        
      });

      if (res.data.success) {
        
        setMessage('Product added successfully!');
        setName('');
        setDescription('');
        setPrice(0);
        setFile(null);
      } else {
        setMessage('Failed to add the product.');
      }
    } catch (error) {
      // console.log(res.data);

      console.error('Error submitting product:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className='bg-black h-[88vh] py-10'>
      <h1 className='text-4xl font-bold text-center text-red-700'>
        Aur Bhai, mai hu Admin Teri koi aukat nhi h mere pass
      </h1>

      <div className="w-screen ">
      <form
        onSubmit={handleSubmit}
        className='flex flex-col w-[300px] mx-auto border border-white p-5 rounded-lg gap-5 mt-8'
      >
        <input
          className='px-6 py-2'
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter the name of Product'
        />
        <input
          className='px-6 py-2'
          type='text'
          name='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter the Description'
        />
        <input
          className='px-6 py-2'
          type='number'
          name='price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder='Enter the price'
        />
        <input
          onChange={(e) => setFile(e.target.files[0])}
          className='ml-5 text-white'
          type='file'
        />
        <button
          className='px-5 py-2 rounded-md bg-cyan-400'
          type='submit'
        >
          Submit
        </button>
      </form>
      </div>
      {message && <p className='text-center text-white mt-4'>{message}</p>}
    </div>
  );
};

export default Admin;
