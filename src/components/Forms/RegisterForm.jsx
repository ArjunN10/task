import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (name === "" || email === "" || password === "") {
        toast("Please Fill All Input Fields");
        return;
      }

      const payload = { name, email, password };
      const response = await axios.post("https://interview-plus.onrender.com/api/register", payload);
console.log(response,"hh")
      if (response.status === 201) {

        toast.success("Registration Successful");
        localStorage.setItem("jwt",response.data.data.token)
        navigate("/");
      }
    } catch (error) {
      console.error("Registration Failed:", error);
    }
  };

  return (
    <section className="bg-white flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
      <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2 flex justify-center"></div>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Register your account
        </h2>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="text-base font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  placeholder="User Name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
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

export default RegisterForm;
