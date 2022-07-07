import React from "react";
import Chart from "./Chart"
import Chart1 from "./chart1"

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
                <div className="hh">
                    <h2 className="hh1">Your grass</h2>
                    <h2 className="hh2">Your growing power</h2>
                </div>
                <div>
                    <Chart />
                    <Chart1/>
                </div>
            </div>
        </div>
    )
}