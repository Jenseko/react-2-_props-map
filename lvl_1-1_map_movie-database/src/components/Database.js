import '../data/movies'

const Database = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.genre}</p>
            <p>{props.rate}</p>
        </div>
    );
}

export default Database;