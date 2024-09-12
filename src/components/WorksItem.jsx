import React from 'react'
import { Badges } from './Badges'

export const WorksItem = ({item}) => {
  return (
    <article className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
      <div className="relative pb-6 sm:pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-blue-600 dark:text-blue-500 -left-[44px] absolute rounded-full text-5xl"> &bull; </span>
          <h3 className="text-lg font-bold text-blue-600 dark:text-blue-500">{item.title}</h3>
          {
            item.href ?
            <a href={item.href} target='_blank' className='flex items-center gap-4 font-semibold text-lg w-fit hover:text-gray-900/60 dark:hover:text-gray-50/60'>
              {item.company}
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5" viewBox="0 0 24 24"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
            </a>
            :
            <h4 className='font-semibold text-lg'>{item.company}</h4>
          }


          <time className="p-0 m-0 text-xs text-gray-600 dark:text-gray-400">{item.date}</time>
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-4 text-sm sm:text-base dark:text-gray-300 md:col-span-3">
        {item.description}
        <Badges tags={item.tags}/>

      </div>
    </article>
  )
}
