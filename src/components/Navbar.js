import React, { useState } from 'react'

import logo from '../logo.svg';
import menu from '../menu.png';
import Alert from './Alert';

export default function Navbar(props) {
  

  let [open, setOpen] = useState(false);

  return (
    <>
    

<div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        {props.title}
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 ':'top-[-490px]'}`}>
      <li className='mx-4 my-6 md:my-0'>
          <a href="/" className='text-xl hover:text-cyan-500 duration-500'>HOME</a>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <a href="/" className='text-xl hover:text-cyan-500 duration-500'>{props.about}</a>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <a href="/" className='text-xl hover:text-cyan-500 duration-500'>CONTACT US</a>
        </li>
        <button className='bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-600 rounded'>Dark Mode</button>


        {/* <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer border-solid border-2 border-sky-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
  <span className="ml-3 text-xl font-medium text-gray-900 ">Toggle me</span>
</label> */}
      </ul>
      </div>
    </div>
{/* <Alert/> */}
    </>
  )
}
