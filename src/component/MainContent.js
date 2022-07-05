import React from "react";
import Chart from "./Chart"

export default function MainContent(){

    return(
        <div className="mainContent">
            <div className="Ranknpm AndSugg">
                <div className="rank">
                    <h2>Routine Rank</h2>
                    <a href=""><li>1. user1</li></a> 
                    <a href=""><li>2. user2</li></a>
                    <a href=""><li>3. user3</li></a>
                </div>
                <div className="sugg">
                    <h2>Routine 추천</h2>
                    <a href=""><li>왕초보</li></a>
                    <a href=""><li>초보</li></a>
                    <a href=""><li>중수</li></a>
                </div>
            </div>
            <div className="grow">
                    <h2>Your grass</h2>
                    <Chart />
            </div>
        </div>
    )
}