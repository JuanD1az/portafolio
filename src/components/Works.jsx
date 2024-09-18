import React from 'react'
import { TitleSection } from './TitleSection'
import { TAGS } from '../tags'
import { WorksItem } from './WorksItem'

export const Works = () => {
  const EXPERIENCE = [
    {
      date: "Agosto 2023 - Julio 2024",
      title: "Desarrollador Full Stack",
      entity: "Tulocal.shop",
      href: "https://tulocal.shop/",
      description:
        "Diseñe la base de datos, desarrollé la plataforma en Laravel y Livewire, e implementé métodos de pago y envío, asegurando transacciones seguras y eficientes.",
      tags: [TAGS.LARAVEL, TAGS.LIVEWIRE, TAGS.BOOTSTRAP, TAGS.MYSQL],
    },
    {
      date: "Julio 2022 - Noviembre 2022",
      title: "Desarrollador Full Stack",
      entity: "Yevalo SpA",
      description:
        "Diseñé la base de datos y la interfaz web, además de desarrollar la plataforma en Laravel, cubriendo tanto el frontend como el backend.",
      tags: [TAGS.LARAVEL, TAGS.BOOTSTRAP, TAGS.MYSQL],
    },
    {
      date: "Mayo 2021 - Junio 2022",
      title: "Desarrollador Back End",
      entity: "TuLocal.cl SpA",
      href: "https://tulocal.cl/",
      description:
        "Diseñé la base de datos y desarrollé el backend en Laravel. También creé un plugin para WordPress y una extensión para Shopware, ampliando la funcionalidad y la integración de la plataforma.",
      tags: [TAGS.LARAVEL, TAGS.SHOPWARE, TAGS.WORDPRESS, TAGS.MYSQL],
    },
  ]



  return (
    <section id='experiencia'>
      <TitleSection title={"Experiencia laboral"}/>
      <ol className="mt-8 relative">
        {
          EXPERIENCE.map((experience) => (
            <li key={experience.date}>
              <WorksItem item={experience} />
            </li>
          ))
        }
      </ol>
    </section>
  )
}
