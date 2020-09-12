import React from "react";
import PropTypes from "prop-types";

// function Keg(props){
//   ;
//   return (
//     <React.Fragment>
//        <h3>{props.name} - {props.brand}</h3>
//       <p><em>{props.price}</em></p>
//       <p><em>{props.alcoholContent}</em></p>
//       <hr/>
//     </React.Fragment>
//   );
// }

// Keg.propTypes = {
//   name: PropTypes.string,
//   brand: PropTypes.string,
//   price: PropTypes.string,
//   alcoholContent: PropTypes.string

// };

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
      <p><em>{props.price}</em></p>
      <p><em>{props.alcoholContent}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenKegClicked: PropTypes.func // new PropType
};
export default Keg;
        

