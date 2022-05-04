import React from 'react';
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";
import {projects} from "../data";
import ProjectCard from "../components/ProjectCard";
let ManyBalls = ({ Component, pageProps }) => {
   

    return (
        <div className = "xl:block absolute w-full">
            <div id = "picture-circle-1" className = "block picture-circle w-[150px] h-[150px] md:w-[400px] md:h-[400px] top-[5rem] md:top-[17rem] xl:top-0 left-[40%] text-white xl:w-[300px] xl:h-[300px] rounded-full absolute" style = {{backgroundImage: 'url("https://i.imgur.com/F63ixRe.jpg")'}}>
                <div id = "picture-circle-overlay" className = "bg-white w-full h-full rounded-full relative"></div>
            </div>
            <div id = "picture-circle-2" className = "hidden xl:block picture-circle left-[65%] top-[10rem] text-white w-[280px] h-[280px] rounded-full absolute" style = {{backgroundImage: 'url("https://i.imgur.com/r77SU2c.jpg")'}}>
                <div id = "picture-circle-overlay" className = "bg-white w-full h-full rounded-full relative"></div>
            </div>
            <div id = "picture-circle-3" className = "hidden xl:block picture-circle left-[60%] top-[30rem] text-white w-[260px] h-[260px] rounded-full absolute" style = {{backgroundImage: 'url("https://i.imgur.com/Br7UFiJ.jpg")'}}>
                <div id = "picture-circle-overlay" className = "bg-white w-full h-full rounded-full absolute"></div>
            </div>
            <div id = "picture-circle-4" className = "hidden xl:block picture-circle left-[50%] top-[20rem] text-white w-[200px] h-[200px] rounded-full absolute" style = {{backgroundImage: 'url("https://i.imgur.com/ogPkukr.jpg")'}}>
                <div id = "picture-circle-overlay" className = "bg-white w-full h-full rounded-full absolute"></div>
            </div>
            <div id = "picture-circle-5" className = "hidden xl:block picture-circle left-[50%] top-[40rem] text-white w-[150px] h-[150px] rounded-full absolute" style = {{backgroundImage: 'url("https://i.imgur.com/NUOR27G.jpg")'}}>
                <div id = "picture-circle-overlay" className = "bg-white text-white w-full h-full rounded-full absolute"></div>
            </div>
        </div>
    );
}

export default ManyBalls