import React from 'react'

export const ButtonLink = ({text, href, svg}) => {
  return (
    <a target="_blank" href={href} role="link" className="h-11 inline-flex items-center justify-center gap-2 py-1.5 px-4 text-gray-800 bg-gray-100 border border-gray-300 rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-base hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black" >
      {svg}
      {text}
    </a>
  )
}
