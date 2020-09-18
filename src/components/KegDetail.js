import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
  //const { keg } = props;
  const { keg, onClickingDelete } = props;
  
  
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>name: {keg.name} - brand: {keg.brand}</h3>
      <p><em>price: {keg.price}</em></p>
      <p><em>pints: {keg.pints}</em></p>
      <button class="btn btn-info" onClick ={ props.onClickingDecrement }>Sell Pint</button>
      <hr/>
      <button class="btn btn-warning" onClick={ props.onClickingEdit }>Update Keg</button> 
      <button class="btn btn-danger" onClick={()=> onClickingDelete(keg.id) }>delete keg</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;