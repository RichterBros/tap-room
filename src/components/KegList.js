import React from "react";
import Keg from "./Keg";




const masterKegList = [
  {
    name:"bigKeg",
    brand:"epicoors",
    price:"$50",
    alcoholContent:"5.0%"
  },
  {
    name:"bigKeg",
    brand:"epicoors",
    price:"$50",
    alcoholContent:"5.0%"
  },
  {
    name:"bigKeg",
    brand:"epicoors",
    price:"$50",
    alcoholContent:"5.0%"
  }
];
function KegList(){
  return (
    <React.Fragment>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={index}/>
      )}
    </React.Fragment>
  );
}
export default KegList;