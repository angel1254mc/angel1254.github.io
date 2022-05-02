import NavBar2 from '../components/NavBar2';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
function index2() {
    
    return (
    <div className= "w-full">
      <Head>
        <title>Angel1254's Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@200&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap" rel="stylesheet"/>
      </Head>
      <div className="none lol h-[100vh] bg-slate-200">
        <NavBar2></NavBar2>
        <Hero></Hero>
        <div className ="w-full flex justify-center align-center">
          <Projects></Projects>
        </div>
      </div>

    </div>
    );
  }
  
  export default index2