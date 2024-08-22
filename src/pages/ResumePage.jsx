import resumeEric from '../assets/resumeEric.pdf';

export default function ResumePage() {
    return (
        <div className="container-fluid pt-4 justify-content-center text-center">
            <a href={resumeEric} className="btn btn-primary btn-lg mt-3">Résumé</a>
            <section className="features-icons bg-light text-center m-4 pb-4">
          <div className="container-fluid">
            <div className="row p-2">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-window m-auto text-primary" />
                  </div>
                  <h3>Technical Skills</h3>
                  <p className="lead mb-0">HTML</p>
                  <p className="lead mb-0">CSS / Bootstrap / Tailwind / DaisyUi</p>
                  <p className="lead mb-0">Java Script</p>
                  <p className="lead mb-0">API development (Client and Server)</p>
                  <p className="lead mb-0">Jest</p>
                  <p className="lead mb-0">Node</p>
                  <p className="lead mb-0">Express</p>
                  <p className="lead mb-0">Sequelize</p>
                  <p className="lead mb-0">React</p>
                  <p className="lead mb-0">SQL and MongoDB</p>
                  <p className="lead mb-0">Model View Controller paradigm (MVC)</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-layers m-auto text-primary" />
                  </div>
                  <h3>Scrum Master Skills</h3>
                  <p className="lead mb-0">Servant Leader</p>
                  <p className="lead mb-0">SAFe</p>
                  <p className="lead mb-0">Agile Coaching</p>
                  <p className="lead mb-0">Project Management</p>
                  <p className="lead mb-0">Roadmapping</p>
                  <p className="lead mb-0">Sprint Planning</p>
                  <p className="lead mb-0">Backlog Grooming</p>
                  <p className="lead mb-0">Retrospectives</p>
                  <p className="lead mb-0">Information Radiator</p>
                  <p className="lead mb-0">Metric Driven</p>
                  <p className="lead mb-0">General Problem Solver</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="bi-terminal m-auto text-primary" />
                  </div>
                  <h3>Tooling</h3>
                  <p className="lead mb-0">GitHub</p>
                  <p className="lead mb-0">Postman</p>
                  <p className="lead mb-0">Thunderclient</p>
                  <p className="lead mb-0">Insomnia</p>
                  <p className="lead mb-0">Dbeaver</p>
                  <p className="lead mb-0">MongoDB Compass</p>
                  <p className="lead mb-0">Dbeaver</p>
                  <p className="lead mb-0">JIRA</p>
                  <p className="lead mb-0">Microsoft Project</p>
                  <p className="lead mb-0">Tableau</p>
                  <p className="lead mb-0">PowerBi</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      );
}

