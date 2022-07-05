import React from "react";

export default function Headerbar(){
    return(
        <header className="header">
            <h1>WORKOUT MANAGER</h1>
            <div>
                <a href="/Dayroutine"><li>day routine</li></a>
                <a href=""><li>week routine</li></a>
                <a href=""><li>Other people</li></a>
                <a href=""><li>Infomation</li></a>
                <button type="button" onclick="LoginHandler"><img src="./images/user (1).png"></img></button>
            </div>
        </header>
        
        
    );
}