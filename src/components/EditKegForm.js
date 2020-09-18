import React from "react";
// import NewKegForm from "./NewKegForm";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
}

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pints: parseInt(event.target.pints.value),
      id: keg.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}



EditKegForm.propTypes = {
  onEditKeg: PropTypes.func,
  //pints: PropTypes.number
};
export default EditKegForm;

























// function EditKegForm (props) {
//   return (
//     <React.Fragment>
//       <NewKegForm 
//         buttonText="Update keg" />
//     </React.Fragment>
//   );
// }


// EditKegForm.propTypes = {
//   onEditKeg: PropTypes.func
// };



// export default EditKegForm;