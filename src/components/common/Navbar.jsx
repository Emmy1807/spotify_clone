import React from 'react'
import Link from 'next/link'
import style from './Navbar.module.css'
import SearchBar from '../Search/SearchBar'


const Navbar = () => {
  return (
    <nav className="Navbar bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-8 ">
        <img src="/icons8-spotify-logo-50 (2).png"  alt="" />
      {/* <div className={style.home}>
        <Link href="/home">
        </Link>

      </div> */}
      <div className={style.Searchbar}>
          <SearchBar/>
          <img src="/folder (3).png" alt="" />
      </div>
      
      <div className={`${style.content}`}>
      <div className='font-bold hover:text-white'>
        <Link href="/premium">Premium</Link>
      </div>
      <div className='font-bold'>
        <Link href="/premium">Support</Link>
      </div>
      <div className='font-bold'>
        <Link href="/premium">Download</Link>
      </div>
     </div>  

     <div className={`${style.border}`}>
     </div>    
     <div className='install font-bold mt-3 text-gray-400'>
      <Link href="/install">Install App</Link>
     </div> 
     <div className='font-bold mt-3 text-gray-400'>
      <Link href="">Sign up</Link>
     </div>

      <div className={`${style.login}`}>  
        <button>
          <Link href="/login">Log in</Link>
        </button>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
