// Navbar.js

"use client"
import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Londrina_Solid } from 'next/font/google';

const Navbar = () => {
  const router = useRouter();
  const { data: sessionData, status } = useSession();

  return (
    <nav className='navbar flex justify-between items-center p-2 px-5 m-3 bg-[#333] text-white rounded-full shadow-md'>
      <div className='navbar-logo'>
        <img alt='Logo' className='w-12' />
      </div>
      {status === 'authenticated' ? (
  <>
    <ul className='list-none flex gap-5'>
      <li className='navbar-links p-3 rounded-full hover:bg-yellow-500 hover:text-black'>
        <Link href='/home'>Home</Link>
      </li>
      <li className='navbar-links p-3 rounded-full hover:bg-yellow-500 hover:text-black'>
        <Link href='/courses'>Courses</Link>
      </li>
    </ul>
    <div className='navbar-login flex gap-3'>
      <button className='border border-white rounded-md px-4 py-1.5' onClick={() => signOut()}>Logout</button>
      <img
        src='https://adviceco.com.au/wp-content/uploads/sites/683/2019/10/profile-icon-male-user-person-avatar-symbol-vector-20910833.png'
        alt='profile'
        className='profile'
        style={{ width: '30px', height: '30px' }} // Add styling for the profile image
      />
    </div>
  </>
) : (
  <Link href={'/'}>
  <button className='border border-white rounded-md px-4 py-1.5' >Login</button>
  </Link>
)}
</nav>

  );
};

export default Navbar;
