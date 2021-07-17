import { useState } from 'react';

function FormDemo() {
    const [username, setUsername] = useState("");

    function handleChange(event) {
        setUsername(event.target.value);
    }

    return (
        <>
            <label htmlFor="username" />
            <input type="text" name="username" value={username} onChange={handleChange} />
            <p>
                You typed: {username}
            </p>
        </>
    )
}

export default FormDemo;
