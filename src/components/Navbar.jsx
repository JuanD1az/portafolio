import React, { useState } from 'react'
import { Theme } from './Theme'
import { ButtonCV } from './ButtonCV'

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const navItems = [
    {
      title: "Inicio",
      url: "/#inicio",
    },
    {
      title: "Experiencia",
      url: "/#experiencia",
    },
    {
      title: "Proyectos",
      url: "/#proyectos",
    },
    {
      title: "Educación",
      url: "/#educacion",
    },
    {
      title: "Contacto",
      url: "mailto:juanalbertodiazparra@gmail.com",
    },
  ]

  return (
    <div>
      <header id='navbar' className={`fixed left-0 top-0 z-30 w-full flex justify-center items-center py-2 bg-[#F5F5F7] dark:bg-[#0A0A0F]`}>
        <nav className="dark:text-gray-50 container md:max-w-3xl lg:max-w-4xl flex px-4 py-2 md:rounded-full justify-between items-center" >
          <h1 className='text-4xl font-bold'>Juan<span className='text-blue-600 dark:text-blue-500'>D</span></h1>
          <ul className='hidden md:flex space-x-4'>
            {
              navItems.map((link) => (
                <li key={link.title}><a href={link.url} className='hover:text-gray-900/60 dark:hover:text-gray-50/60'>{link.title}</a></li>
              ))
            }
          </ul>
          <div className='flex space-x-4'>
            <Theme />
            <button id="toggleButton" className="md:hidden" onClick={() => setShowModal(!showModal)}>
              {!showModal ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-9" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
              ) : 
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-9" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
              }
            </button>
            <ButtonCV />
          </div>
        </nav>
      </header>
      {showModal ? (
        <div className="w-screen fixed top-0 right-0 h-full overflow-hidden bg-black bg-opacity-75 backdrop-blur-lg shadow-lg transition-all duration-300 z-10 md:hidden">
          <div className="w-full h-full px-8 py-20 relative ">
            <div className="h-full flex flex-col justify-center items-center gap-10 text-white text-xl">
              {
                navItems.map((link) => (
                  <a key={link.title + '-modal'} href={link.url} className="block text-white transition duration-300 ease-in-out hover:scale-110" onClick={() => setShowModal(!showModal)}>
                    {link.title}
                  </a>
                ))
              }
            </div>
            <div className="w-full">
              <ButtonCV modal={true}/>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
