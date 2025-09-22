// src/LoginPage.js
import React, { useState } from "react";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { handleGoogleLogin, handleSubmit } from "../Config.js";
import { Link, useNavigate } from "react-router-dom";
import { GoogleIcon } from "../Icons.js";
export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisable, setisPasswordVisable] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome Back 👋
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {/* Email Input */}

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative ">
          <input
            type={isPasswordVisable ? "text" : "password"}
            placeholder="Password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          <button
            onClick={() => setisPasswordVisable(!isPasswordVisable)}
            className="absolute right-4 top-[40%]"
          >
            {isPasswordVisable ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </button>
        </div>

        {/* Login / Signup Button */}
        <button
          onClick={(e) => handleSubmit(e, email, password, setError, navigate)}
          className="w-full bg-orange-600 text-white py-3 rounded-xl font-medium hover:bg-orange-700 transition-colors duration-300 mb-4"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Button */}
        <button
          onClick={() => handleGoogleLogin(setError, navigate)}
          className="flex gap-2 items-center justify-center w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300"
        >
          <GoogleIcon className="w-6 h-6" />
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        {/* Signup Link */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signUp" className="text-orange-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
