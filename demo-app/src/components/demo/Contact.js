import { useState } from 'react';
import Address from './Address';

function Contact(props) {
    let [isExpanded, setIsExpanded] = useState(false);

    function handleClick() {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <h3 onClick={handleClick}>{props.name}</h3>
            {
                isExpanded &&
                <>
                    <p>{props.email}</p>
                    <Address address={props.address} />
                </>
            }
        </>
    );
}

export default Contact;
