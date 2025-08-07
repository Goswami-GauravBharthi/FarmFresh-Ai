import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Farmer');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!role) {
      newErrors.role = 'Role is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    
    // TODO: Integrate with backend API for real login
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <header className="bg-green-700 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">FarmFresh AI</h1>
          <nav>
            <ul className="flex gap-6 text-sm md:text-base">
              <li><a href="/" className="hover:text-green-200">Home</a></li>
              <li><a href="/marketplace" className="hover:text-green-200">Marketplace</a></li>
              <li><a href="/Subscription" className="hover:text-green-200">Subscribe</a></li>
              <li><a href="/login" className="font-semibold hover:text-green-200">Log In</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Log In to FarmFresh AI</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
              <input  
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">Role</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="Farmer">Farmer</option>
                <option value="Consumer">Consumer</option>
                <option value="Restaurant">Restaurant</option>
              </select>
              {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
            </div>
            
            <NavLink to="/farmerdashboard">
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Log In
             
            </button>
            </NavLink>

            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{' '}
              <a href="/register" className="text-green-600 hover:text-green-700 transition">
                Register here
              </a>
            </p>
          </form>
        </section>
      </main>

      <footer className="bg-green-700 text-white py-6 text-center">
        <p className="text-sm">&copy; 2025 FarmFresh AI. All rights reserved.</p>
        <p className="text-sm mt-2">
          <a href="/contact" className="hover:text-green-200">Contact Us</a> |{' '}
          <a href="/terms" className="hover:text-green-200 ml-2">Terms</a> |{' '}
          <a href="/privacy" className="hover:text-green-200 ml-2">Privacy</a>
        </p>
      </footer>
    </div>
  );
}

export default Login;
