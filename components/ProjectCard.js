import React from 'react';
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";
let ProjectCard= ({data}) => {
   

    return (
        <div id="projectCard" className="flex md:w-full align-center justify-center sm:align-left sm:justify-left">
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
    );
}

export default ProjectCard