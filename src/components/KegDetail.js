import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
  const { keg } = props;

  
  
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>name: {keg.name} - brand: {keg.brand}</h3>
      <p><em>price: {keg.price}</em></p>
      <p><em>pints: {keg.pints}</em></p>
      <button onClick={ props.onClickingDecrement }>Sell Pint</button>
      <hr/>
      <button onClick={ props.onClickingEdit }>Update Keg</button> 
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func
};

export default KegDetail;