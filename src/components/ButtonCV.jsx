import React from 'react'

export const ButtonCV = ({modal}) => {
  return (
    <a href="/curriculum-juandiaz.pdf" target='_blank' className={`items-center justify-center py-1.5 px-4 font-medium rounded-3xl ${ modal ? "flex bg-white text-gray-900 text-lg" : "hidden md:flex text-gray-50 bg-black dark:bg-white dark:text-gray-900" } `}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`fill-current mr-2 ${modal ? "w-9" : "w-8"}`} viewBox="0 0 24 24"><path d="M18.948 11.112C18.511 7.67 15.563 5 12.004 5c-2.756 0-5.15 1.611-6.243 4.15-2.148.642-3.757 2.67-3.757 4.85 0 2.757 2.243 5 5 5h1v-2h-1c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.757 2.673-3.016l.581-.102.192-.558C8.153 8.273 9.898 7 12.004 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-2v2h2c2.206 0 4-1.794 4-4a4.008 4.008 0 0 0-3.056-3.888z"></path><path d="M13.004 14v-4h-2v4h-3l4 5 4-5z"></path></svg>
        <span className={`${modal ? "block mr-2" : "mr-2 hidden lg:block"}`}>Descargar</span>
        CV
    </a>
  )
}
