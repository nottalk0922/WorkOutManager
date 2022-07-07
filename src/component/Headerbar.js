import React from "react";

export default function Headerbar(){
    return(
        <header className="header">
            <img src="https://cdn-icons-png.flaticon.com/512/30/30924.png"></img>
            <a href="/"><h1>WORKOUT MANAGER</h1></a>
            <div>
                <a href="/Dayroutine"><li>day routine</li></a>
                <a href="/Weekroutine"><li>week routine</li></a>
                <a href=""><li>Other people</li></a>
                <a href=""><li>Infomation</li></a>
                <button type="button" onclick="LoginHandler"><img src="https://cdn-icons.flaticon.com/png/512/3033/premium/3033143.png?token=exp=1657016912~hmac=fea2e21342c5573d0412f944102a9d5c"></img></button>
            </div>
        </header>
        
        
    );
}