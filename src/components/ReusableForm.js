import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='name' />
        <input
          type='text'
          name='brand'
          placeholder='brand' />
        <input
          type='text'
          name='price'
          placeholder='price' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='abv.' />
        <input
          type='text'
          name='pints'
          placeholder='pints left' />
        
        
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;