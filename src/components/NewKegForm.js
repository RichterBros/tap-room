import React from "react";
import { v4 } from 'uuid';

function NewKegForm(){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.alcoholContent.value);
  }
  
  
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='name' />
        <input
          type='text'
          name='brand'
          placeholder='brand' />
        <input
          name='price'
          placeholder='price' />
         <input
          name='alcoholContent'
          placeholder='alcoholContent' />
        
        <button type='submit'>Add keg</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;