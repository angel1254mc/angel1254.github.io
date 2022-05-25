import React from 'react';
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import Link from 'next/link';
import {useRouter} from 'next/router';
let NavBar = ({ Component, pageProps },{}) => {
    let router = useRouter();

    return (
        <nav className="w-full z-50 sticky flex items-center justify-between flex-wrap bg-transparent p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-2xl tracking-tight"><Link href ="/"><a>Angel1254mc</a></Link></span>
            </div>
            <div className="  flex-grow flex justify-center sm:justify-end items-center text-right w-auto">
                <div className="  text-sm flex">
                {router.asPath == '/' || router.asPath == '/#projects' ? <LinkS
                className = "block mt-4 lg:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Projects</LinkS>  :
                <Link href="/#projects"><a className = "block mt-4 lg:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">Projects</a></Link>
                }
                <Link href="/about">
                    <a className="block mt-4 lg:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
                      About Me
                    </a>
                </Link>
                    <a href="mailto:angellopezpol1254@gmail.com" className="block mt-4 lg:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
                      Contact Me 
                    </a>
                    <Link href="/Resume Angel Lopez Pol 2022.pdf">
                    <a className="block mt-4 lg:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
                      Resume
                    </a>
                    </Link>
                </div>
                
            </div>
        </nav>
    );
  }
  
  export default NavBar