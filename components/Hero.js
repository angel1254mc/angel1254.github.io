import React from 'react';
import {app, database} from '../firebaseConfig';
import yellow from '../public/Yellow.svg';
import Image from 'next/image';
import red from '../public/Red.svg';
import blue from '../public/Blue.svg';
import PROF from '../public/PROFULTRA.png';
import instagram from '../public/iconinstagram.svg';
import facebook from '../public/iconfacebook.svg';
import linkedin from '../public/iconlinkedin.svg';
import github from '../public/icongithub.svg';
import {collection, addDoc, getDocs, doc, docs}  from 'firebase/firestore';
let Hero = () => {
   
   /**  const dbInstance = collection(database, 'something');
    const saveNote = () => {
        addDoc(dbInstance, {
            noteTitle: 'Balls'
        })
    }
    const activity = 'default';
    getDocs(dbInstance).then((docs) => {
        if (docs) {
            console.log(docs.docs[0].data());
        }
    });*/
    return ( 
        <div className = "hero-container w-full flex justify-center">
            <div className = "yellow top-[20%] left-[45%] sm:left-[60%] sm:top-[6%] w-[20rem] sm:w-[40rem] h-min absolute">
            <Image src={yellow} layout="responsive"></Image>
            </div>
            <div className = "red top-[20%]  left-[40%] sm:left-[55%] sm:top-[4%] w-[20rem] sm:w-[40rem] h-min absolute">
            <Image src={red} layout="responsive"></Image>
            </div>
            <div className = "blue top-[10%] left-[45%] sm:left-[60%] sm:top-[-5%] w-[20rem] sm:w-[40rem] h-min absolute">
            <Image src={blue} layout="responsive"></Image>
            </div>

        <div className = "hero w-full h-[90vh] rounded-3xl flex justify-center">
            <div className = " w-100 flex justify-center">
                <div className = "flex flex-col w-full align-center justify-center mt-[0rem]  overflow-x-clip">
                    <div className = "w-1/2 flex-col self-center z-10 bg-transparent relative overflow-visible">
                        <div className = "text-white social-links-container hidden absolute left-[-15%] h-min md:flex md:flex-col justify-between overflow-visible">
                            <a href="https://www.instagram.com/angel1254/"><div id = "social-1" className = "social-link-svg"><Image src={instagram}></Image></div></a>
                            <a href="https://www.facebook.com/profile.php?id=100009900315625"><div id = "social-2" className = "social-link-svg"><Image src={facebook}></Image></div></a>
                            <a href="https://www.linkedin.com/in/angel1254/"><div id = "social-3" className = "social-link-svg"><Image src={linkedin}></Image></div></a>
                            <a href="https://github.com/angel1254mc"><div id = "social-4" className = "social-link-svg"><Image src={github}></Image></div></a>
                        </div>
                        <div className = "flex m-6 relative overflow-visible">
                            <div className = "bbl hidden md:block top-[30%] left-[40%] md:w-[20rem] md:top-[-20%] md:left-[100%] 2xl:top-[-60%] 2xl:w-[20rem] h-min md:absolute">
                                <Image src={PROF} layout="responsive"></Image>
                            </div>
                            <div className = "leader-lg text-white text-6xl md:text-8xl">Angel Lopez Pol</div>
                        </div>
                        <div className = "ml-10 leader2-lg text-5xl md:text-6xl text-white">CS & MAE @ UF</div>
                        <div className = "leader-subtitle ml-10 mt-10 w-full  leader2-lg text-lg md:text-3xl text-white wrap">Hello! I am a Junior CS and MAE major at the University of Florida. I enjoy programming, playing video games, and dogs!</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
}
    
export default Hero
/**
 * <section className = " w-100 flex sm:p-1 items-center justify-center">
                    <h1 className = "lg:text-5xl text-4xl text-white pb-8">Hello!</h1>
                    
                   
                </section>
 */
//<img src = 'https://dodo.ac/np/images/thumb/e/e3/Tom_Nook_NH.png/800px-Tom_Nook_NH.png' className= "h-[20rem] lg:h-[30rem]"></img>

/**
 *  <section className = "flex items-center justify-center sm:hidden">
                        <Link
                        activeClass="active" 
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}><div id="projects-button">Check out my Projects</div></Link>
                </section>
 */