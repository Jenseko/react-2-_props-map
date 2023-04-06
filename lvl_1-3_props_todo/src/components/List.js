const List = (props) => {
    console.log(props)
    return (
        <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
            <li>{props.item4}</li>
            <li>{props.item5}</li>
        </ul>
    );
}

export default List;