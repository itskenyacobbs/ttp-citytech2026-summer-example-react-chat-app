import {useState} from 'react';

const Message = ({text}) => {
    return <>
    <p>
          {text}
    </p>
    </>;
}

const App = () => {

    //business logic
/*
    //we are referencing this array 
    const messages = [
        "Argentina",
        "Bolivia",
        "Cambodia",
    ];
*/

const [messages, setMessages] = useState([]);

    return <>
    <h1>
        CHAT ROOM
    </h1>

    {
        messages.map(
            (text) => <Message text={text} />)
    }

    <form onSubmit={(event) => {
        event.preventDefault();

        //determine what the message is
        const new_message = event.target.incoming_text.value;

        //add the new message to the message state
        setMessages([..])
    }}
    
    <input />
    <button>
        send
    </button>

    </>;
}

export default App;