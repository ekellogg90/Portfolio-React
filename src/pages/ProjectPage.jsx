import Project from '../components/Project';
import jate from '../assets/jate.png';
import mongo from '../assets/Mongo-db-logo.png';
import readme from '../assets/Readme1.png';
import weather from '../assets/Weather.jpg';
import logo from '../assets/logo.svg';

export default function ProjectPage() {
  const projects = [
    {
      id: 0,
      name: "PWA Text Editor",
      picture: jate,
      desc: "An installable text editor that works offline and online",
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
    {
      id: 5,
      name: "Logo Generator",
      picture: logo,
      desc: "Command Line application that generates a custom logo for the user. Utilized Jest for Test Driven Development",
      github: "https://github.com/ekellogg90/Eric-Logo-Maker",
      deployed: "https://drive.google.com/file/d/1VtUfpjmi6Cg8cD-1jH34midJmiWF5EQ_/view"
    },
  ]

  return (
    <>
        <div className="container-fluid pt-2 mt-4">
          <div className="row justify-content-center">
                  {projects.map((project) => (
                      <Project project={project} />
                  ))}
          </div>
            
        </div>
    </>
  );
}
