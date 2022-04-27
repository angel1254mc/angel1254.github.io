import React from 'react';
import {Transition} from "@headlessui/react";
import {Link} from "react-scroll";
import {app, database} from '../firebaseConfig';
import {collection, addDoc, getDocs, doc, docs}  from 'firebase/firestore';
let Hero = () => {
   
    const dbInstance = collection(database, 'something');
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
    });
    return ( 
        <div className = "w-full flex justify-center">
        <div className = "hero w-full h-[90vh] rounded-3xl flex justify-center">
            <div className = " w-10/12 grid lg:grid-cols-2">
                <div className = "hidden lg:flex items-center justify-center w-100">
                    <div className = " grid grid-cols-1 gap-10 rounded-xl w-full">
                        <div className = "flex justify-start ml-6">
                            <div className = "leader-lg text-white text-7xl self-end">Angel is Currently...</div>
                        </div>
                        <button className = "bg-white" onClick = {() => {saveNote()}}>Press this real quick</button>
                        <div className = "relative left-20 leader2-lg text-8xl text-white">{activity}</div>
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