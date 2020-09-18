import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form  onSubmit={props.formSubmissionHandler}>
      <div class="form-row">
        
        <input class="form-control"
          type='text'
          name='name'
          placeholder='name' />
        <input class="form-control"
          type='text'
          name='brand'
          placeholder='brand' />
        <input class="form-control"
          type='text'
          name='price'
          placeholder='price' />
        <input class="form-control"
          type='text'
          name='alcoholContent'
          placeholder='abv.' />
        <input class="form-control"
          type='text'
          name='pints'
          placeholder='pints left' />
        
        <button type='submit' class="btn btn-primary">{props.buttonText}</button>
        </div>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;