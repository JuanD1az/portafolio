import React from 'react'
import { TitleSection } from './TitleSection'
import { EducationsItem } from './EducationsItem'
import { SubTitle } from './SubTitle'

export const Educations = () => {
  const EDUCATION = [
    {
      date: "Marzo 2019 - Octubre 2021",
      type: "Titulo",
      title: "Analista Programador",
      entity: "Instituto Profesional Santo Tomás",
      href: "https://www.santotomas.cl/",
    },
  ]

  const CERTIFICATE = [
    {
      date: "Enero 2021 | 360 hrs. Pedagógicas",
      type: "Certificado",
      title: "Programacion Básica",
      entity: "Instituto Profesional Santo Tomás",
      href: "https://www.santotomas.cl/",
    },
    {
      date: "Enero 2021 | 198 hrs. Pedagógicas",
      type: "Certificado",
      title: "Administración de Sistemas",
      entity: "Instituto Profesional Santo Tomás",
      href: "https://www.santotomas.cl/",
    },
    {
      date: "Enero 2021 | 270 hrs. Pedagógicas",
      type: "Certificado",
      title: "Diseño de Software y Base de Datos",      
      entity: "Instituto Profesional Santo Tomás",
      href: "https://www.santotomas.cl/",
    },
  ]
  
  return (
    <section id='educacion'>
      <TitleSection title={"Educación"}/>
      <SubTitle title={"Títulos"} />
      <ol className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {
          EDUCATION.map((education) => (
            <li key={education.title} className='inline-block'>
              <EducationsItem item={education} />
            </li>
          ))
        }
      </ol>
      <SubTitle title={"Certificados"} />
      <ol className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {
          CERTIFICATE.map((certificate) => (
            <li key={certificate.title} className='inline-block'>
              <EducationsItem item={certificate} />
            </li>
          ))
        }
      </ol>
    </section>
  )
}
