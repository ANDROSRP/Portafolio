// Link, Redes sociales, imágenes
import React from 'react'
import Image from "next/image"

const Navbar = () => {
  return (
    <div className='items center'>
        <div className='items-center flex'>
            <div>
              {/*
                <Image
                  src="/favicon.ico"
                  alt="logo"
                  width={}
                  height={}
                  className="w-full h-full"
                */
              }
            </div>
            <h1 className="text-white">Welcome to my official page</h1>
        </div>      
    </div>
  )
}

export default Navbar
