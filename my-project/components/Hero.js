import React from 'react';
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";

let Hero = () => {
   

    return ( 
        <div className = "w-full flex justify-center">
        <div className = "hero bg-teal-300 h-[38rem] w-10/12 rounded-3xl flex justify-center m-6">
            <div className = " w-10/12 grid lg:grid-cols-2">
                <div className = "hidden lg:flex items-center justify-center w-100">
                    <div className = "bg-emerald-400 grid grid-cols-1 gap-10 rounded-xl w-5/6 h-3/4 m-6 p-5">
                        <div className = "flex justify-center">
                            <div className = "text-white text-4xl font-semibold self-end">Could we pretend that</div>
                        </div>
                        <div className="flex justify-center">
                        <Link
                        activeClass="active" 
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}><section id="projects-button" className= "h-1/3">Airplanes In the Night Sky</section></Link>
                        </div>
                    </div>
                </div>
                <section className = " w-100 flex sm:p-1 items-center justify-center">
                    <h1 className = "lg:text-5xl text-4xl text-white pb-8">Hello!</h1>
                    <img src = 'https://dodo.ac/np/images/thumb/e/e3/Tom_Nook_NH.png/800px-Tom_Nook_NH.png' className= "h-[20rem] lg:h-[30rem]"></img>
                </section>
                <section className = "flex items-center justify-center lg:hidden">
                        <Link
                        activeClass="active" 
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}><div id="projects-button">Check out my Projects</div></Link>
                </section>
            </div>
        </div>
        </div>
        );
}
    
export default Hero