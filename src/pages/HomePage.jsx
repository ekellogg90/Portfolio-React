import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import API from '../utils/API';

import Project from '../components/Project';
import jate from '../assets/jate.png';
import mongo from '../assets/Mongo-db-logo.png';
import readme from '../assets/Readme1.png';
import weather from '../assets/Weather.jpg';

export default function HomePage() {
  const projects = [
    {
      id: 0,
      name: "PWA Text Editor",
      picture: jate,
      desc: "An installable text editor that works in offline and online",
      github: "https://github.com/ekellogg90/PWA-Text-Editor",
      deployed: "https://pwa-text-editor-m5av.onrender.com/"
    },
    {
      id: 1,
      name: "Pet Finder",
      picture: "https://picsum.photos/id/237/536/354",
      desc: "Web application to help you find adoptable pets in your area that meet your criteria",
      github: "https://github.com/ekellogg90/pet-finder-proj1",
      deployed: "https://ekellogg90.github.io/pet-finder-proj1/"
    },
    {
      id: 2,
      name: "NoSQL Social Network API",
      picture: mongo,
      desc: "Created a database in MongoDB that stores user input and exposes it via API routes",
      github: "https://github.com/ekellogg90/NoSQL-Social-Network-API",
      deployed: "https://drive.google.com/file/d/1Tz_ExR958wIOlppwuo52_ceybbXi4Qw5/view"
    },
    {
      id: 3,
      name: "ReadMe Generator",
      picture: readme,
      desc: "Command line application that automates ReadMe file creation for new Projects",
      github: "https://github.com/ekellogg90/eric-readme-generator",
      deployed: "https://drive.google.com/file/d/1rpUgJ4J5uJ85fvob6t1o3JFJurvNDEne/view"
    },
    {
      id: 4,
      name: "Weather Web Application",
      picture: weather,
      desc: "Web application to show you the weather in your desired city",
      github: "https://github.com/ekellogg90/eric-weather-forecast",
      deployed: "https://ekellogg90.github.io/eric-weather-forecast/"
    },
  ]

  return (
    <>
        <div className="container-fluid pt-2">
            {/* <div className="container-fluid border-bottom border-dark rounded"> */}
                <div className="row justify-content-center">
                    {/* <div className="col-sm-6"> */}
                        {projects.map((project) => (
                            <Project project={project} />
                        ))}
                    {/* </div> */}
                </div>
            {/* </div> */}
            
        </div>
    </>
  );
}
