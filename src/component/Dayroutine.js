import React from "react";
import Headerbar from "./Headerbar";

function Dayroutine() {

    return (
      <div className="Dayroutin">
        <Headerbar />
        <div>
          <h2>Your Dayroutine</h2>
          <button type='button' onClick='./Addinput' >루틴 추가</button>
          <button type='button' onClick='rmInput()'>삭제</button> 
        </div>
      </div>
    );
  }
  
  export default Dayroutine;
  