import Image from 'next/image'
import Hero from '../app/components/hero'
import Testimonials from './components/testimonials'
import HeroNext from './components/hero2'

export default function Home() {
  return (
   <main>

    <Hero />
    <Testimonials />
    <HeroNext />
   </main> 
  )
}