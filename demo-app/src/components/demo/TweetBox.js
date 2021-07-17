import { useState } from 'react';

function TweetBox({onSend, limit}) {
    const MAX_LENGTH = limit || 140;
    const [message, setMessage] = useState("");

    function handleChange(event) {
        if (event.target.value.length <= MAX_LENGTH) {
            setMessage(event.target.value);
        }
    }

    return (
        <>
            <textarea value={message} onChange={handleChange} />
            <p>{MAX_LENGTH - message.length} characters remaining</p>
            <button onClick={() => onSend(message)}>Send</button>
        </>
    )
}

export default TweetBox;
