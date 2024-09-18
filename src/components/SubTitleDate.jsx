import React from 'react'

export const SubTitleDate = ({title, href, entity, date}) => {
  return (
    <>
        <h4 className="text-lg font-bold text-blue-600 dark:text-blue-500">{title}</h4>
        <h5 className='text-lg font-semibold dark:text-gray-50'>
          {
            href ?
            <a href={href} target='_blank' className='flex items-center gap-4 mr-2 w-fit hover:text-gray-900/60 dark:hover:text-gray-50/60'>
              {entity}
              <span className='self-start mt-1 mr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5" viewBox="0 0 24 24"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
              </span>              
            </a>
            :
            <>{entity}</>
          }
        </h5>
        <time className="p-0 m-0 text-xs text-gray-600 dark:text-gray-400">{date}</time>
    </>
  )
}
