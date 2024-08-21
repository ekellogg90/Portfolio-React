import resumeEric from '../assets/resumeEric.pdf';

export default function ResumePage() {
    return (
        <div className="container-fluid pt-4 justify-content-center text-center">
            <div className="row mt-3">
                <h1>Click for my résumé</h1>
            </div>
            <a href={resumeEric} className="btn btn-primary btn-lg mt-3">Résumé</a>
        </div>
      );
}