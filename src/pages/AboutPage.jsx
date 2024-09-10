import eric from '../assets/Eric.jpg';
import ku from '../assets/KULogo.png';
import nebraska from '../assets/Nebraska.jpg';

export default function AboutPage() {
    return (
      <div className="container-fluid pt-4 mb-5">
        <div className='text-center d-flex justify-content-around'>
          <img src={ku} alt="Kansas Logo" className='img-eric d-none d-md-block' />
          <img src={eric} alt="Eric" className='img-eric' />
          <img src={nebraska} alt="Nebraska Logo" className='img-eric d-none d-md-block' />
        </div>
        <h4 className="text-center mb-4 mt-1 border-bottom border-dark">Hello and welcome to my portfolio! My name is Eric and I'm an endlessly curious person who loves figuring out how things work and helping others succeed.</h4>
        <section className="features-icons bg-light text-center m-4 pb-4">
          <div className="container-fluid">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                  <h3>Education</h3>
                  <p className="lead mb-0">2024</p>
                  <p className="lead mb-0">The University of Kansas</p>
                  <p className="lead mb-0">Full Stack Development Boot Camp</p>
                  <p className="lead mb-0">--------------------------------------------------------</p>
                  <p className="lead mb-0">2021</p>
                  <p className="lead mb-0">Project Management Institute</p>
                  <p className="lead mb-0">Disciplined Agile Scrum Master (DASM) Certification</p>
                  <p className="lead mb-0">--------------------------------------------------------</p>
                  <p className="lead mb-0">2017</p>
                  <p className="lead mb-0">Project Management Institute</p>
                  <p className="lead mb-0">Project Management Professional (PMP) Certification</p>
                  <p className="lead mb-0">--------------------------------------------------------</p>
                  <p className="lead mb-0">2013</p>
                  <p className="lead mb-0">University of Nebraska-Lincoln</p>
                  <p className="lead mb-0">Bachelor's Degree in Supply Chain Management</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
                  <h3>Scrum Master / Project Manager</h3>
                  <p className="lead mb-0">2018 - 2023</p>
                  <p className="lead mb-0"><b>Oracle</b> - Scrum Master II</p>
                  <p className="lead mb-0">Business Intelligence and Analytics</p>
                  <p className="lead mb-0">--------------------------------------------------------</p>
                  <p className="lead mb-0">2017 - 2018</p>
                  <p className="lead mb-0"><b>Cerner</b> - Scrum Master</p>
                  <p className="lead mb-0">Analytics Applications</p>
                  <p className="lead mb-0">--------------------------------------------------------</p>
                  <p className="lead mb-0">2015 - 2017</p>
                  <p className="lead mb-0"><b>Cerner</b> - Senior Business Analyst</p>
                  <p className="lead mb-0">Analytics Applications</p>
                  <p className="lead mb-0">--------------------------------------------------------</p>
                  <p className="lead mb-0">2014 - 2015</p>
                  <p className="lead mb-0"><b>Cerner</b> - Business Analyst</p>
                  <p className="lead mb-0">Analytics Applications</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                  <h3>Full Stack Developer</h3>
                  <a className="lead mb-0 text-decoration-none" href="https://pwa-text-editor-m5av.onrender.com/">Progressive Web Application (PWA) - Text Editor</a>
                  <p className="lead mb-0">An installable text editor that works in offline and online</p>
                  <a className="lead mb-0 text-decoration-none" href="https://github.com/ekellogg90/PWA-Text-Editor">Check out the code on GitHub!</a>
                  <p className="lead mb-0">--------------------------------------------------------</p>
                  <a className="lead mb-0 text-decoration-none" href="https://ekellogg90.github.io/pet-finder-proj1/">Pet Adoption Web Application</a>
                  <p className="lead mb-0">Web application to help you find adoptable pets in your area</p>
                  <a className="lead mb-0 text-decoration-none" href="https://github.com/ekellogg90/pet-finder-proj1">Check out the code on GitHub!</a>
                  <p className="lead mb-0">--------------------------------------------------------</p>
                  <a className="lead mb-0 text-decoration-none" href="https://drive.google.com/file/d/1Tz_ExR958wIOlppwuo52_ceybbXi4Qw5/view">NoSQL Social Network API</a>
                  <p className="lead mb-0">Utilized MongoDB to store user input and expose it via API routes</p>
                  <a className="lead mb-0 text-decoration-none" href="https://github.com/ekellogg90/NoSQL-Social-Network-API">Check out the code on GitHub!</a>
                  <p className="lead mb-0">--------------------------------------------------------</p>
                  <a className="lead mb-0 text-decoration-none" href="https://drive.google.com/file/d/1rpUgJ4J5uJ85fvob6t1o3JFJurvNDEne/view">ReadMe Generator</a>
                  <p className="lead mb-0">Command line application that automates ReadMe file creation for new Projects</p>
                  <a className="lead mb-0 text-decoration-none" href="https://github.com/ekellogg90/eric-readme-generator">Check out the code on GitHub!</a>
                  <p className="lead mb-0">--------------------------------------------------------</p>
                  <a className="lead mb-0 text-decoration-none" href="https://ekellogg90.github.io/eric-weather-forecast/">Weather Web Application</a>
                  <p className="lead mb-0">Web application to show you the weather in your desired city</p>
                  <a className="lead mb-0 text-decoration-none" href="https://github.com/ekellogg90/eric-weather-forecast">Check out the code on GitHub!</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  