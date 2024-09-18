import React from 'react'

export const Tooltip = ({text}) => {
  return (
    <span role="tooltip" className={`pointer-events-none absolute z-50 inline-flex items-center justify-center rounded-md px-3 py-1 font-semibold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-neutral-200 text-black dark:bg-slate-900 dark:text-white min-h-7 text-sm left-1/2 -translate-x-1/2 after:absolute after:block after:size-0 after:border-8 after:border-transparent after:border-t-neutral-200 dark:after:border-t-slate-900 after:-bottom-[0.95rem] after:left-1/2 after:-translate-x-1/2 top-[-2.3rem]`}>{text}</span>
  )
}
