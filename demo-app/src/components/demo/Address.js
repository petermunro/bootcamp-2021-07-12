
function Address(props) {
    return (
        <div>
            <p>{props.address.line1}</p>
            <p>{props.address.town}</p>
            <p>{props.address.county}</p>
            <p>{props.address.country}</p>
        </div>
    )
}

export default Address;
