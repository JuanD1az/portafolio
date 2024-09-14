import React from 'react'

export const Badges = ({tags}) => {
  return (
    <ul className="flex flex-row gap-2 my-2 flex-wrap">
          {tags.map((tag) => (
            <li key={tag.name}>
              <span className={`h-6 border flex items-center gap-x-2 rounded-full text-xs ${tag.class} py-3 px-2 bg-[#F5F5F7] text-gray-900 dark:bg-[#0A0A0F] dark:text-gray-50`} >
                <tag.svg />
                {tag.name}
              </span>
            </li>
        ))}
    </ul>
  )
}
