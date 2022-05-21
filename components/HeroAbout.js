import React from 'react';
import {app, database} from '../firebaseConfig';
import yellow from '../public/Yellow.svg';
import Image from 'next/image';
import red from '../public/Red.svg';
import blue from '../public/Blue.svg';
import BBL from '../public/BBLULTRA.png';
import instagram from '../public/iconinstagram.svg';
import facebook from '../public/iconfacebook.svg';
import linkedin from '../public/iconlinkedin.svg';
import github from '../public/icongithub.svg';
import ManyBalls from './ManyBalls';
import {collection, addDoc, getDocs, doc, docs}  from 'firebase/firestore';
let HeroAbout = () => {
   
    return ( 
        <div className = "hero-container w-full flex justify-center">
            <div className = "absolute left-[50%] w-1/2 h-[80vh] text-white">
                <ManyBalls></ManyBalls>
            </div>
        <div className = "hero w-full h-auto rounded-3xl mb-20 flex justify-center overflow-clip">
            <div className = " w-4/5 flex justify-center">
                <div className = "flex flex-col w-full align-center mt-[0rem] h-full  overflow-x-visible">
                    <div id = "hero-content" className = "w-4/5 mt-[0rem] flex-col self-center z-10 bg-transparent relative overflow-x-visible">
                        <div className = "text-white social-links-container hidden absolute left-[-15%] h-min md:flex md:flex-col justify-between overflow-visible">
                            <a href="https://www.instagram.com/angel1254/"><div id = "social-1" className = "social-link-svg"><Image src={instagram}></Image></div></a>
                            <a href="https://www.facebook.com/profile.php?id=100009900315625"><div id = "social-2" className = "social-link-svg"><Image src={facebook}></Image></div></a>
                            <a href="https://www.linkedin.com/in/angel1254/"><div id = "social-3" className = "social-link-svg"><Image src={linkedin}></Image></div></a>
                            <a href="https://github.com/angel1254mc"><div id = "social-4" className = "social-link-svg"><Image src={github}></Image></div></a>
                        </div>
                        <div className = "flex m-6  relative overflow-visible">
                            <div className = "leader-lg text-white text-6xl md:text-8xl">About Me</div>
                        </div>
                        <div className = "ml-5 leader2-lg text-3xl md:text-5xl text-white">&Aacute;ngel Andr&eacute;s L&oacute;pez Pol - he/him</div>
                        <div className = "leader-subtitle ml-5 mt-4  leader2-lg text-lg md:text-3xl text-white wrap md:w-10/12 lg:w-1/2">
                            language-agnostic software developer with a love for Front-end and UI design. Dexterous with languages such as C++, C, Java, JavaScript, and Python
                        </div>
                        <div className = "leader-subtitle ml-5 mt-10 w-full  leader2-lg text-lg md:text-3xl text-white wrap">
                            I am from <div className=" font-light mt-2" >Bayam&oacute;n, Comer&iacute;o, Carolina, and Aguas Buenas Puerto Rico!</div>
                        </div>
                        <div className = "leader-subtitle ml-5 mt-10 w-full  leader2-lg text-lg md:text-3xl text-white wrap">
                            Education: <div className=" font-light mt-2" >CISE & MAE, University of Florida 2024</div>
                            <div className=" font-light mt-2" >Lake Nona High School, Orlando FL, 2020 </div>
                        </div>
                        <div className = "leader-subtitle ml-5 mt-10 w-full  leader2-lg text-lg md:text-3xl text-white wrap">
                            I enjoy <div className=" font-light mt-2" >Games, Memes, LoFi Beats, Coffee, </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
}
    
export default HeroAbout

/*<div className = "bbl hidden md:block top-[30%] left-[40%] md:w-[20rem] md:top-[-20%] md:left-[100%] 2xl:top-[-60%] 2xl:w-[20rem] h-min md:absolute">
<Image src={BBL} layout="responsive"></Image>
</div>*/