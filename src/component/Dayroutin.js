import React from "react";
import Headerbar from "./Headerbar";
import AddInput from "./Addinput"

function Dayroutine() {
  function addInput(){
    <AddInput />
  }
    return (
      <div className="Dayroutin">
        <Headerbar />
        <div>
          <h2>Your Dayroutine</h2>
          <button type='button' onClick='addInput()' >루틴 추가</button>
          <button type='button' onClick='rmInput()'>삭제</button> 
        </div>
      </div>
    );
  }
  
  export default Dayroutine;
  