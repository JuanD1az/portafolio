import React from 'react'
import { TitleSection } from './TitleSection'
import { WorksItem } from './WorksItem'

export const Works = ({ tags }) => {
  const EXPERIENCE = [
    {
      date: "Agosto 2023 - Julio 2024",
      title: "Desarrollador Full Stack",
      company: "Tulocal.shop",
      href: "https://tulocal.shop/",
      description:
        "Diseñe la base de datos, desarrollé la plataforma en Laravel y Livewire, e implementé métodos de pago y envío, asegurando transacciones seguras y eficientes.",
      tags: [tags.LARAVEL, tags.LIVEWIRE, tags.BOOTSTRAP, tags.MYSQL],
    },
    {
      date: "Julio 2022 - Noviembre 2022",
      title: "Desarrollador Full Stack",
      company: "Yevalo SpA",
      description:
        "Diseñé la base de datos y la interfaz web, además de desarrollar la plataforma en Laravel, cubriendo tanto el frontend como el backend.",
      tags: [tags.LARAVEL, tags.BOOTSTRAP, tags.MYSQL],
    },
    {
      date: "Mayo 2021 - Junio 2022",
      title: "Desarrollador Back End",
      company: "TuLocal.cl SpA",
      href: "https://tulocal.cl/",
      description:
        "Diseñé la base de datos y desarrollé el backend en Laravel. También creé un plugin para WordPress y una extensión para Shopware, ampliando la funcionalidad y la integración de la plataforma.",
      tags: [tags.LARAVEL, tags.SHOPWARE, tags.WORDPRESS, tags.MYSQL],
    },
  ]



  return (
    <section id='experiencia'>
      <TitleSection title={"Experiencia laboral"}/>
      <ol className="mt-10 relative">
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
