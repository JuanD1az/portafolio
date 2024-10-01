import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Works } from './components/Works'
import { Projects } from './components/Projects'
import { Educations } from './components/Educations'
import { Tecnologies } from './components/Tecnologies'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <div className='w-full mx-auto container md:max-w-3xl lg:max-w-4xl'>
        <Navbar />
        <div className='mx-4 space-y-16 sm:space-y-20'>
          <Hero />
          <Works />
          <Projects />
          <Tecnologies />
          <Educations />
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App
