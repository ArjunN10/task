import React, { useState } from 'react';
import Axios from '../../config/Axios';
import { Link,useNavigate } from "react-router-dom";


const LoginForm = () => {

    const navigate=useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await Axios.post('api/login', {
            email,
            password
          });
          console.log('Login success:', response.data);
          
        } catch (error) {
          setError('Invalid email or password'); 
          console.error('Login error:', error);
        }
      }

  return (
    <section className="bg-white flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
    <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
      <div className="mb-2 flex justify-center"></div>
      <h2 className="text-center text-2xl font-bold leading-tight text-black">
        Login to your account
      </h2>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="space-y-5">
          <div>
            <label htmlFor="email" className="text-base font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-base font-medium text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div>
            <button
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              type="submit"
            >
              Get started
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
  );
}

export default LoginForm;