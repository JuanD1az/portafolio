import React from 'react'
import { TitleSection } from './TitleSection'
import { TAGS } from '../tags'
import { Tooltip } from './Tooltip'

export const Tecnologies = () => {
    const TECNOLOGIES = [
        TAGS.HTML,
        TAGS.CSS,
        TAGS.JS,
        TAGS.REACT,
        TAGS.PHP,
        TAGS.LARAVEL, 
        TAGS.LIVEWIRE,
        TAGS.GIT,
        TAGS.TAILWIND,
        TAGS.BOOTSTRAP,
        TAGS.C,
        TAGS.CSHARP,
        TAGS.MYSQL,
        TAGS.SQLSERVER,
        TAGS.WORDPRESS,
        TAGS.SHOPWARE,
        TAGS.JAVA,
        TAGS.PYTHON,
        TAGS.NET,
        TAGS.FIREBASE,
        TAGS.ANDROIDSTUDIO,
        TAGS.POSTMAN,
    ]

    return (
        <section id='tecnologias' className='overflow-hidden w-full'>
            <TitleSection title={"Tecnologías"}/>
            <article className='grid grid-rows-2 grid-flow-col whitespace-nowrap animate-scroll gap-4'>
                {
                    TECNOLOGIES.map((tag) => (
                        <div key={tag.name} className={`group relative whitespace-nowrap min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px] flex justify-center items-center border rounded-xl ${tag.border} ${tag.bg_opacity}`}>
                            <tag.svg size={true}/>
                            <Tooltip text={tag.name}/>
                        </div>
                    ))
                }
                {
                    TECNOLOGIES.map((tag) => (
                        <div key={tag.name} className={`group relative whitespace-nowrap min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px] flex justify-center items-center border rounded-xl ${tag.border} ${tag.bg_opacity}`}>
                            <tag.svg size={true}/>
                            <Tooltip text={tag.name}/>
                        </div>
                    ))
                }
            </article>
        </section>
    )
}
