import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faYoutubeSquare, faGoogleDrive} from '@fortawesome/free-brands-svg-icons';
import {Transition} from "@headlessui/react";
import Link from 'next/link';
import GetAuthors, {getProjectGithub, getProjectYoutube} from "./tools/UIUtil.js"
let ProjectCard= ({data}) => {
   

    return (
        <div id="projectCard" className="flex h-96 md:w-full md:h-96 align-center justify-center sm:align-left sm:justify-left relative" style={{backgroundImage: `url(\"`+data.bg+`\")`}}>
            <div className="p-color-overlay w-full h-full absolute" style={{backgroundColor: data.bgcolor }}></div>
            <div className="projectCardPicture h-[23rem] w-96 flex-none bg-cover text-center flex justify-center items-center self-center overflow-visible" style={{backgroundImage:  `url(\"`+data.url+`\")`}} title="project image">
            </div>
            <div className="projectCardBody md:items-start opacity-0 flex flex-col text-left h-full left-[70%] sm:left-[55%] md:left-[45%] lg:left-[35%] absolute md:overflow-y-auto xl:overflow-hidden">
                <div className = "hidden md:flex flex-wrap leader-lg text-2xl sm:text3xl lg:text-4xl p-2">{data.name} <FontAwesomeIcon className = "ml-4" icon={faGithub}></FontAwesomeIcon></div>
                <div className = "hidden md:block leader-lg-card text-xl sm:text-2xl lg:text-3xl w-10/12 p-2"><GetAuthors authorsarray={data.authors} proj = {data.index}></GetAuthors></div>
                <div className = "hidden md:block leader-descriptor-card text-lg sm:text-xl lg:text-3xl p-2" >{data.desc}</div>
                <div className = "hidden md:flex flex-wrap leader-lg-card text-lg sm:text-xl lg:text-xl p-2" ></div>
                <div className = "items-center justify-center flex md:flex-wrap flex-col md:flex-row mt-1 md:items-auto h-full md:items-end md:h-full w-auto">
                    <Link href={"" + getProjectGithub(data.index)}>
                        <a>
                            <FontAwesomeIcon className = "custom-fa-size my-5 md:mt-0 md:mr-5" icon={faGithub}></FontAwesomeIcon>
                        </a>
                    </Link>
                    <Link href={"" + getProjectYoutube(data.index)}>
                        <a>
                        <FontAwesomeIcon className = " custom-fa-size my-5 md:mt-0 md:mr-5" icon={faYoutubeSquare}></FontAwesomeIcon>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard

/**
 * <div id="projectCard" className="flex md:w-full align-center justify-center sm:align-left sm:justify-left">
           <div className="md:flex w-full p-3">
            <div className="projectCardPicture h-96 w-96 flex-none bg-cover rounded-t-3xl lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage:  `url("https://developer.apple.com/design/human-interface-guidelines/macos/images/app-icon-macos-mail_2x.png")`}} title="project image">
            </div>
            <div className="projectCardBody w-96  md:w-full border-r border-b border-l border-teal-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-teal-800 p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">

                    <div className="text-white-900 font-semibold text-2xl mb-2">{data.name}</div>
                        <p className="text-White-700 text-base"> {data.desc}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="text-lg">
                            <p className="text-white-900 leading-none">{data.authors}</p>
                            <p className="text-lightgray-600">{data.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 */