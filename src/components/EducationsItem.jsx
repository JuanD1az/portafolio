import React from 'react'
import { SubTitleDate } from './SubTitleDate'

export const EducationsItem = ({item}) => {
  return (
    <article className="flex space-x-6 dark:text-gray-50">       
      {
        item.type == "Titulo" ?
          <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 w-7 inline-block self-start" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path> <path d="M22 10v6"></path> <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path> </svg> 
        :
          <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 w-7 inline-block self-start" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M15 12h-5"></path> <path d="M15 8h-5"></path> <path d="M19 17V5a2 2 0 0 0-2-2H4"></path> <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path> </svg>
      }
      
      <div className="w-full justify-between gap-2">
        <SubTitleDate title={item.title} href={item.href} entity={item.entity} date={item.date} />
      </div> 
    </article>
  )
}
