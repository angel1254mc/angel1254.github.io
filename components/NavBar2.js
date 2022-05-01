import React from 'react';
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";
import Image from 'next/image';
import Angel from "../public/Angel.png";
let NavBar2 = ({ Component, pageProps }) => {
   

    return (
        <nav className=" navbar2 hidden 4xl:flex w-44 h-full fixed flex-col z-10 justify-start items-start p-6">
            <div className="flex text-white">
                <span className="font-semibold text-2xl"><Image src={Angel} alt="Logo" width = "300px" height= "300px"></Image></span>
            </div>
            <div className="hidden">
                <button className="leader-lg flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block  my-8 lg:w-32">
                <div className="text-md lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 text-teal-200 hover:text-white mr-4">
                      Projects
                    </a>
                    <a href="#responsive-header" className="block mt-4 text-teal-200 hover:text-white mr-4">
                      About Me
                    </a>
                    <a href="#responsive-header" className="block mt-4 text-teal-200 hover:text-white mr-4">
                      Contact Me
                    </a>
                </div>
                
            </div>
        </nav>
    );
  }
  
  export default NavBar2