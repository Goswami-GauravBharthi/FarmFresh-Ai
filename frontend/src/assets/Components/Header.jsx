import React from 'react'

function Header() {
  return (
    <header className="bg-green-700 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">FarmFresh AI</h1>
          <nav>
            <ul className="flex gap-6 text-sm md:text-base">
              <li>
                <a href="/" className="font-semibold hover:text-green-200 transition">Home</a>
              </li>
              <li>
                <a href="/marketplace" className="hover:text-green-200 transition">Marketplace</a>
              </li>
              <li>
                <a href="/Subscription" className="hover:text-green-200 transition">Subscription</a>
              </li>
               <li>
                <a href="/order" className="hover:text-green-200 transition">Order</a>
              </li>
              <li>
                <a href="/login" className="hover:text-green-200 transition">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header