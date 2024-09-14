import React from 'react'
import { ButtonLink } from './ButtonLink'
import { Badges } from './Badges'

export const ProjectsItem = ({item}) => {
  return (
    <>
        <img alt={item.title} className="object-cover object-top w-full h-56 [mask-image:linear-gradient(to_top,_transparent,_black_55%)]" loading="lazy" src={item.image} />

        <div className="w-full md:h-full p-5 pt-4 flex flex-col justify-between">
            <div className='flex flex-col'>
                <h3 className="font-semibold text-lg">
                    {item.title}
                </h3>
                <Badges tags={item.tags}/>

                <div className="my-2 text-sm sm:text-base dark:text-gray-300">{item.description}</div>
            </div>

            <footer className="flex items-end justify-start mt-4 gap-x-4">
                
                {item.github ? 
                    <ButtonLink text={'Codigo'} href={item.github} svg={<svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-7 -ml-1" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>} />
                : null }

                {item.link ? 
                <ButtonLink text={'Enlace'} href={item.link} svg={<svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-6 -ml-1" viewBox="0 0 24 24"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path></svg>} />
                : null }

            </footer>
        </div>
    </>
  )
}
