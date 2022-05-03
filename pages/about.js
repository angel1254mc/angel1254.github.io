import Head from 'next/head'
import NavBar2 from '../components/NavBar2';
import NavBar from '../components/NavBar';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import HeroAbout from '../components/HeroAbout';
export default function About() {
  return (
    <div className= "w-full text-white">
        <Head>
        <title>Angel1254&apos;s Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@200&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap" rel="stylesheet"/>
        </Head>
      <NavBar></NavBar>
        <HeroAbout></HeroAbout>
    </div>
  )
}
