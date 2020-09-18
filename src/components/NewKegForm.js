import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, pints: parseInt(event.target.pints.value), id: v4()
    })
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg!" />
    </React.Fragment>
  );
}
  


NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
  pints: PropTypes.number
};
export default NewKegForm;


//   return (
//     <React.Fragment>
//       <form onSubmit={handleNewKegFormSubmission}>
//         <input
//           type='text'
//           name='name'
//           placeholder='name' />
//         <input
//           type='text'
//           name='brand'
//           placeholder='brand' />
//         <input
//           name='price'
//           placeholder='price' />
//          <input
//           name='alcoholContent'
//           placeholder='alcoholContent' />
//         <input
//           type='text'
//           name='pints'
//           placeholder='pints' />
        

//         <button type='submit'>Add keg</button>
//       </form>
//     </React.Fragment>
//   );
// }