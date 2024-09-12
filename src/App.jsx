import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Works } from './components/Works'
import { Projects } from './components/Projects'

import { HtmlIcon } from './assets/icons/HtmlIcon'
import { CssIcon } from './assets/icons/CssIcon'
import { JavascriptIcon } from './assets/icons/JavascriptIcon'
import { MysqlIcon } from './assets/icons/MysqlIcon'
import { FirebaseIcon } from './assets/icons/FirebaseIcon'
import { LaravelIcon } from './assets/icons/LaravelIcon'
import { TailwindIcon } from './assets/icons/TailwindIcon'
import { ReactIcon } from './assets/icons/ReactIcon'
import { BootstrapIcon } from './assets/icons/BootstrapIcon'
import { WordpressIcon } from './assets/icons/WordpressIcon'
import { ShopwareIcon } from './assets/icons/ShopwareIcon'
import { LivewireIcon } from './assets/icons/LivewireIcon'

function App() {
  const TAGS = {
    HTML: {
      name: "HTML",
      class: "border-[#E34F26]",
      svg: HtmlIcon
    },
    CSS: {
      name: "CSS",
      class: "border-[#0C73B8]",
      svg: CssIcon
    },
    JS: {
      name: "JavaScript",
      class: "border-[#e0cf58]",
      svg: JavascriptIcon
    },
    MYSQL: {
      name: "MySQL",
      class: "border-[#00546B]",
      svg: MysqlIcon    
    },
    FIREBASE: {
      name: "Firebase",
      class: "border-[#DD2C00]",
      svg: FirebaseIcon    
    },
    LARAVEL: {
      name: "Laravel",
      class: "border-[#FF2D20]",
      svg: LaravelIcon      
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "border-[#38BDF8]",
      svg: TailwindIcon      
    },
    REACT: {
      name: "React",
      class: "border-[#00D8FF]",
      svg: ReactIcon         
    },
    BOOTSTRAP: {
      name: "Bootstrap",
      class: "border-[#7E13F8]",
      svg: BootstrapIcon         
    },
    WORDPRESS: {
      name: "Wordpress",
      class: "border-[#21759B]",
      svg: WordpressIcon         
    },
    SHOPWARE: {
      name: "Shopware",
      class: "border-[#179EFF]",
      svg: ShopwareIcon         
    },
    LIVEWIRE: {
      name: "Livewire",
      class: "border-[#FB70A9]",
      svg: LivewireIcon         
    },
  }

  return (
    <>
      <div className='w-full mx-auto container md:max-w-2xl lg:max-w-4xl'>
        <Navbar />
        <div className='mx-4'>
          <Hero />
          <Works tags={TAGS}/>
          <Projects tags={TAGS}/>
        </div>

      </div>

    </>
  )
}

export default App
