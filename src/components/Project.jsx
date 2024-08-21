export default function Project(props) {
    const cardStyle = {
        width: '18rem',
    };

    return (
        <>
            <div className="card me-4 align-items-center" style={cardStyle}>
                <img src={props.project.picture} alt="Project 1" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.project.name}</h5>
                    <p className="card-text">{props.project.desc}</p>
                    <a href={props.project.deployed} className="btn btn-primary">Check it out!</a>
                </div>
            </div>
        </>
    );
}