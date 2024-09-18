import React from 'react'
import { Badges } from './Badges'
import { SubTitleDate } from './SubTitleDate'

export const WorksItem = ({item}) => {
  return (
    <article className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
      <div className="relative pb-6 sm:pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-blue-600 dark:text-blue-500 -left-[44px] absolute rounded-full text-5xl"> &bull; </span>
          <SubTitleDate title={item.title} href={item.href} entity={item.entity} date={item.date} />
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-4 md:col-span-3">
        {item.description}
        <Badges tags={item.tags}/>
      </div>
    </article>
  )
}
