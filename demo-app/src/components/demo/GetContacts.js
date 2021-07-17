import { useState, useEffect } from 'react';
import Contact from './Contact';


function GetContacts() {
    let [contacts, setContacts] = useState([]);
    let [status, setStatus] = useState("Fetching data");

    useEffect(
        () => fetch("http://localhost:3001/contacts.json")
            .then(res => res.json())
            .then(data => {
                setContacts(data);
                setStatus("");
            })
            .catch(error => setStatus(error.message)),
        []);

    let contactComponents = contacts.map(contact => <Contact
        name={contact.fullName}
        address={contact.address}
        email={contact.email}
        key={contact.id}
    />);

    return (
        <>
            <p>{status}</p>
            {
                contactComponents
            }
        </>
    )
}

export default GetContacts;
