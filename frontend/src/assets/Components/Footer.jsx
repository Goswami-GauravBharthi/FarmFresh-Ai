import React from 'react'

function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 text-center">
        <p className="text-sm">&copy; 2025 FarmFresh AI. All rights reserved.</p>
        <p className="text-sm mt-2">
          <a href="/contact" className="hover:text-green-200 transition">Contact Us</a> 
          <a href="/terms" className="hover:text-green-200 transition ml-2">Terms</a> 
          <a href="/privacy" className="hover:text-green-200 transition ml-2">Privacy</a>
        </p>
      </footer>
  )
}

export default Footer