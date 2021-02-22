import React from "react";
import PropTypes from "prop-types";
import kegger from '../kegger.png';

function Keg(props) {

  return (
    <React.Fragment>

      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>name: {props.name} </h3>
        <h3>brand: {props.brand}</h3>
        <p><em>price: {props.price}</em></p>
        <p><em>alcohol Content: {props.alcoholContent}</em></p>
        <p><em>pints: {props.pints}</em></p>
        <button class="btn btn-info" >click for details</button>
        <img src={kegger} />
      </div>
        <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,

  pints: PropTypes.number,

};
export default Keg;






