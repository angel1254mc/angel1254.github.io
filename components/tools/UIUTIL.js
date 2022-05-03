import React from 'react';
import Link from 'next/link'
import {authorgithubs, projectgithubs, projectyoutubes} from '../../githubs.js';
const getGithub = (name) => {
    if (name == "Angel")
        return authorgithubs.Angel;
    else if (name =="Jenna")
        return authorgithubs.Jenna;
    else if (name =="Juan")
        return authorgithubs.Juan;
    else if (name =="Jorge")
        return authorgithubs.Jorge;
    else if (name =="Shehzad")
        return authorgithubs.Shehzad;
    else if (name =="Jeya")
        return authorgithubs.Jeya;
}
let Author = ({classname, link, id, end}) => {
    return (
        <h4 className = {classname}>
            <Link href={getGithub(id)}>
                <a>
                    {
                        (end == 1) ? "and " + id :
                        (end == 0) ? id + ", " :
                        (end == -1) ? "" + id :
                        "nothing!"
                    }
                </a>
            </Link>
        </h4>
    );
}
let GetAuthors = ({authorsarray, proj}) => {
    let size = authorsarray.length;
    return (
        <div className = "flex w-full flex-wrap">
            {
                authorsarray.map((el, index) => {
                    return (
                        (index == size-1) && (index != 0) ? <Author key = {el} link = {getGithub(el)} classname = "mr-4 projlink" id = {el} end = {1}></Author> :
                            (size == 1) ? <Author key = {el}  link = {getGithub(el)} classname = "mr-4 projlink" id = {el} end = {-1}></Author> :
                            <Author key = {el}  link = {getGithub(el)} classname = "mr-4 projlink" id = {el} end = {0}></Author>
                        )

                })
            }
        </div>
    );
}

function getProjectGithub(index) {
    return projectgithubs[index];
};

function getProjectYoutube(index) {
    return projectyoutubes[index];
}

export {GetAuthors as default};
export {getProjectGithub};
export {getProjectYoutube};