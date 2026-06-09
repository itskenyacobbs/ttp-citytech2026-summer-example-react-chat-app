//importing useState function in react. It's a react hook
import { useState } from 'react'
// importing my css
import './App.css'



const App = () => {
    // a const variable that uses the useState method or react hook
    // inside the useState method is an empty array
    //so this is array destructuring. It's unpacking the values from an array
    //into individual named variables 
    //const [messages, setMessages] = useState([]);

    
// const a = useState([]);
// console.log(a);
// const [messages, setMessages] = a;
    const [messages, setMessages] = useState([]);

    return (
        <>
        <div style={{height: "100%", width: "100%"}}>
        {/* Header */}
        <section style={{ height: "100%"}} id = "header">
            <header> 
                <h1> Test </h1>
            </header>
        </section>
        {/*Text bubbles */}
        <section id ="text bubbles">
        <div> Test </div>
        </section>
        {/* INPUT */}
        <div style={{display: "flex", height: "100%", alignContent: "flex-end"}}>
        <section style={{ }}>
            <input style={{ height: "20px", width: "300px", }}>
            </input>
        </section>
        {/* Button */}
        {/* //So you can do inline styling in React */}
        <div style={{ display: "flex", justifyContent:"center"}}>
        <button style={{ 
            fontSize: "20px", 
            padding: "10px", 
            margin:"8px", 
            height:"30%", 
            width: "30%",
            }}>
            <p>Send</p>
        </button>
        </div>
        </div>
        </div>
        </>
    )

}

export default App;