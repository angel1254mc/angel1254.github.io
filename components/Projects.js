import React from 'react';
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";
import {projects} from "../data";
import ProjectCard from "../components/ProjectCard";
let Projects = ({ Component, pageProps }) => {
   

    return (
        <div id="projects" className="flex-column w-10/12 rounded-lg justify-center align-center px-4 mt-[200px] h-auto">
            <div id = "projects-header" className="w-full text-5xl font-light p-6 text-white " >
                <h1 className = "leader-lg text-6xl md:text-center p-3 pb-6">Projects</h1>
                <hr></hr>
            </div>
            <div id = "projects-body" className = "flex flex-col w-full text-3xl mt-8 text-white" >
                <div className = "flex justify-center align-center"><ProjectCard data = {projects[0]}></ProjectCard></div>
                <div className = "flex justify-center align-center"><ProjectCard data = {projects[1]}></ProjectCard></div>
                <div className = "flex justify-center align-center"><ProjectCard data = {projects[2]}></ProjectCard></div>
                
            </div>
        </div>
    );
}

export default Projects