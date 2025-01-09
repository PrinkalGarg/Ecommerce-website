import React, { useState } from 'react';

function Login() {
  const [currentForm, setCurrentForm] = useState("Sign Up");

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">{currentForm}</h2>
        <form>
          {currentForm === "Sign Up" && (
            <>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">Forgot Password?</a>
            <p
              className="text-sm text-indigo-600 cursor-pointer hover:text-indigo-800"
              onClick={() => setCurrentForm(currentForm === "Sign Up" ? "Login" : "Sign Up")}
            >
              {currentForm === "Sign Up" ? "Already have an account? Login" : "Don't have an account? Sign Up"}
            </p>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            {currentForm}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
