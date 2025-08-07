import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Farmer',
    address: '',
    city: '',
    zipCode: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.role) newErrors.role = 'Role is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zipCode) {
      newErrors.zipCode = 'Zip code is required';
    } else if (!/^\d{5}$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Zip code must be 5 digits';
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
    alert(`Registered as ${formData.role} with email ${formData.email}`);
    // Future: Send formData to backend API
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
              <li><a href="/subscribe" className="hover:text-green-200">Subscribe</a></li>
              <li><a href="/login" className="hover:text-green-200">Log In</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
        <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register for FarmFresh AI</h2>
          <form onSubmit={handleSubmit}>
            {[
              { label: "Full Name", name: "name", type: "text", placeholder: "Enter your full name" },
              { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
              { label: "Password", name: "password", type: "password", placeholder: "Enter your password" },
              { label: "Address", name: "address", type: "text", placeholder: "Enter your address" },
              { label: "City", name: "city", type: "text", placeholder: "Enter your city" },
              { label: "Zip Code", name: "zipCode", type: "text", placeholder: "Enter your zip code" },
              { label: "Phone Number (Optional)", name: "phone", type: "tel", placeholder: "Enter your phone number" }
            ].map(({ label, name, type, placeholder }) => (
              <div className="mb-4" key={name}>
                <label htmlFor={name} className="block text-gray-700 font-semibold mb-2">{label}</label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleInputChange}
                  placeholder={placeholder}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                  aria-describedby={errors[name] ? `${name}-error` : null}
                />
                {errors[name] && (
                  <p id={`${name}-error`} className="text-red-500 text-sm mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            <div className="mb-6">
              <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
                aria-describedby={errors.role ? "role-error" : null}
              >
                <option value="Farmer">Farmer</option>
                <option value="Consumer">Consumer</option>
                <option value="Restaurant">Restaurant</option>
              </select>
              {errors.role && (
                <p id="role-error" className="text-red-500 text-sm mt-1">{errors.role}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Register
            </button>

            <p className="text-center text-gray-600 mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-green-600 hover:text-green-700 transition">Log in here</a>
            </p>
          </form>
        </section>
      </main>

      <footer className="bg-green-700 text-white py-6 text-center">
        <p className="text-sm">&copy; 2025 FarmFresh AI. All rights reserved.</p>
        <p className="text-sm mt-2">
          <a href="/contact" className="hover:text-green-200">Contact Us</a> |{' '}
          <a href="/terms" className="hover:text-green-200">Terms</a> |{' '}
          <a href="/privacy" className="hover:text-green-200">Privacy</a>
        </p>
      </footer>
    </div>
  );
};

export default Register;
