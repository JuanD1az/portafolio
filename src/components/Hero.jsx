import React from 'react'
import profile from '../assets/profile.webp'
import { TitleSection } from './TitleSection'
import { ButtonLink } from './ButtonLink'

export const Hero = () => {
  return (
    <section id='inicio' className='mt-28 sm:mt-32'>
      <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8">
        <img className="rounded-full shadow-lg h-24 sm:h-32 w-24 sm:w-32" loading="lazy" src={profile} alt='imagen-perfil'/>
        <div className="flex flex-col justify-center" >
          <h1 className='text-4xl sm:text-5xl font-bold tracking-tight dark:text-gray-50'>Juan Díaz</h1>
          <a className="cursor-pointer mt-2 w-min border-2 border-green-500 text-xs sm:text-sm text-green-800 dark:text-white/80 whitespace-nowrap bg-green-100 dark:bg-gray-800 rounded-full px-3 py-1" href='https://www.linkedin.com/in/juan-diaz-4880a8266/' target='_blank'>
            Disponible para trabajar
          </a>
        </div>
      </div>
      <article className='md:w-[85%]'>
        <TitleSection title={"Sobre mí"}/>
        <p className='mb-6'>Con más de 4 años de experiencia, soy <span className='text-blue-600 dark:text-blue-500 font-bold'>Desarrollador Full Stack</span> de Ovalle, Chile. Mi pasión y habilidades me permiten crear aplicaciones web innovadoras y experiencias digitales tanto a nivel nacional como internacional.</p>
        <div className='flex gap-2 flex-wrap'>
          <ButtonLink rounded={"rounded-3xl"} text={"Contáctame"} href={"mailto:juanalbertodiazparra@gmail.com"} svg={<svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-7 -ml-1" viewBox="0 0 24 24" ><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>}/>
          <ButtonLink rounded={"rounded-3xl"} text={"GitHub"} href={"https://github.com/JuanD1az"} svg={<svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-7 -ml-1" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>}/>
          <ButtonLink rounded={"rounded-3xl"} text={"LinkedIn"} href={"https://linkedin.com/in/juan-diaz-4880a8266/"} svg={<svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-7 -ml-1" viewBox="0 0 24 24"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>}/>
        </div>
      </article>
    </section>
  )
}
