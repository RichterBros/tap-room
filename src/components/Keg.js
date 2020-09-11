import React from "react";

function Keg(props){
  ;
  return (
    <React.Fragment>
       <h3>{props.name} - {props.brand}</h3>
      <p><em>{props.price}</em></p>
      <p><em>{props.alcoholContent}</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Keg;