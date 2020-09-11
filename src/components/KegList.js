import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";




// const masterKegList = [
//   {
//     name:"bigKeg",
//     brand:"epicoors",
//     price:"$50",
//     alcoholContent:"5.0%"
//   },
//   {
//     name:"bigKeg",
//     brand:"epicoors",
//     price:"$50",
//     alcoholContent:"5.0%"
//   },
//   {
//     name:"bigKeg",
//     brand:"epicoors",
//     price:"$50",
//     alcoholContent:"5.0%"
//   }
// ];
function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={index}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  KegList: PropTypes.array
};

export default KegList;