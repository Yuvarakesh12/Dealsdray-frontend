import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './navbar.css'
import { IoIosLogOut } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-black bg-[#2A546D]">
  <div className="flex items-center">
    <img 
      src="https://res.cloudinary.com/dfh97e9e4/image/upload/v1726835653/unnamed_fnzr8m.png" 
      alt="Logo" 
      className="h-10 mr-4" 
    />
  </div>
  <div className="flex-grow flex justify-center">
    <Link to="/" style={{ fontSize: '13px' }} className="butin">Home</Link>
    <Link to="/employees" style={{ fontSize: '13px' }} className="butin">Employee List</Link>
  </div>
  <div className="flex items-center  ml-auto">
    <h1 style={{ fontSize: '13px' }} className="text-red-500">Yuvarakesh</h1>
    <Link to="/login" style={{ fontSize: '13px' }} className="butin"><IoIosLogOut /></Link>
  </div>
</nav>

  
  
  
  
  );
};

export default Navbar;



