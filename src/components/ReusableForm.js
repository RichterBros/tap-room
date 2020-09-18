import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form  onSubmit={props.formSubmissionHandler}>
      <div class="form-row">
      <div class="col">
        <input class="form-control"
          type='text'
          name='name'
          placeholder='name' />
        </div>
        <div class="col">
        <input class="form-control"
          type='text'
          name='brand'
          placeholder='brand' />
        </div>
        <div class="col">
        <input class="form-control"
          type='text'
          name='price'
          placeholder='price' />
        </div>
        <div class="col">
        <input class="form-control"
          type='text'
          name='alcoholContent'
          placeholder='abv.' />
        </div>
        <div class="col">
        <input class="form-control"
          type='text'
          name='pints'
          placeholder='pints left' />
        </div>
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