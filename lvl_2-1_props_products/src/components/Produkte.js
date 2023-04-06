const Produkte = (props) => {
    return (
        <div>
            {props.img}
            <h4>{props.Product}</h4>
            <h5>{props.Price}</h5>
            <h5>{props.Description}</h5>
            <button>BUY NOW</button>
        </div>
    );
}

export default Produkte
