import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./Home.css"

const Home = ({setUsername , username}) => {


    const navigate = useNavigate();

    const shouldLogin = username.length > 0

    function handleInputUsername(event) {
        // debugger
        console.log(event.target.value)
        setUsername(event.target.value)

    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        navigate("/search")


    }

    return (<div className={"banner"} style={{marginTop: "40%"}}>
        <h1>BOOK.ly</h1>
        <div>
            <input type={"text"} placeholder="What's your name?" onChange={handleInputUsername}/>
            <button onClick={shouldLogin && SubmitHandler}>Sign In</button>
        </div>

    </div>);
}

export default Home;