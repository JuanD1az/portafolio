import React from 'react'
import swifturl from '../assets/swifturl.webp'
import pokedex from '../assets/pokedex.webp'
import netflix from '../assets/netflix.webp'
import shoppinglist from '../assets/shoppinglist.webp'
import { TitleSection } from './TitleSection'
import { TAGS } from '../tags'
import { ProjectsItem } from './ProjectsItem'

export const Projects = () => {
  const PROJECTS = [
    {
      title: "SwiftURL - Acorta tus enlaces de forma rápida y segura.",
      description:
        "Simplifica tus enlaces con SwiftURL, el acortador de links de código abierto que te permite crear URL cortas y fáciles de compartir en segundos.",
      link: "",
      github: "",
      image: swifturl,
      tags: [TAGS.LARAVEL, TAGS.TAILWIND, TAGS.MYSQL],
    },
    {
      title: "Netflix Clone - Tráilers de Películas y Series.",
      description:
        "Explora tráilers de las mejores películas y series en nuestro clon de Netflix. Mantente al día con los últimos avances y descubre qué ver próximamente.",
      link: "",
      github: "",
      image: netflix,
      tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.FIREBASE],
    },
    {
      title: "Pokedex - Explora todos los Pokémon.",
      description:
        "Explora la Pokédex nacional con información detallada de todos los Pokémon. Descubre evoluciones, tipos, movimientos y estadísticas. ¡Todo lo que necesitas saber de cada Pokémon en un solo lugar!",
      link: "https://pokedexapi-test.vercel.app/",
      github: "https://github.com/JuanD1az/pokedex",
      image: pokedex,
      tags: [TAGS.REACT, TAGS.TAILWIND],
    },
    {
      title: "Shopping List - Crea tu lista de compra gratis.",
      description:
        "Shopping List es una aplicación web gratuita que te permite crear y organizar tus listas de compra de manera sencilla y rápida. Ideal para mantener tu compra bien organizada.",
      link: "https://shoppinglist-test.vercel.app/",
      github: "https://github.com/JuanD1az/shoppinglist",
      image: shoppinglist,
      tags: [TAGS.HTML, TAGS.CSS, TAGS.JS],
    },
  ]

  return (
    <section id='proyectos'>
      <TitleSection title={"Proyectos"}/>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
        {
          PROJECTS.map((project) => (
            <article key={project.title} className="hover:scale-[102%] ease-in-out duration-300 flex flex-col border border-gray-300 dark:border-gray-600 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <ProjectsItem item={project} />
            </article>
          ))
        }
      </div>
    </section>
  )
}
