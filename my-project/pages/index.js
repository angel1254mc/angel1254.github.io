import Head from 'next/head'
import NavBar from '../components/NavBar';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
export default function Home() {
  return (
    <div className= "w-full">
      <Head>
        
      </Head>
      <main className="none lol h-[100vh] bg-slate-200">
        <NavBar></NavBar>
        <Hero></Hero>
        <div className ="w-full flex justify-center align-center">
          <Projects></Projects>
        </div>
        </main>

    </div>
  )
}
