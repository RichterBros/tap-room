import React from "react";
import PropTypes from "prop-types";


function Keg(props){
  
  return (
    <React.Fragment>
      
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>names: {props.names} - brand: {props.brand}</h3>
      <p><em>price: {props.price}</em></p>
      <p><em>abv: {props.alcoholContent}</em></p>

      <p><em>pints: {props.pints}</em></p>
      
      
      
      <hr/>
      </div>
      
    </React.Fragment>
  );
}

Keg.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string, 
  whenKegClicked: PropTypes.func, 

  pints: PropTypes.number,
 
};
export default Keg;
        

