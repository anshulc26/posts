import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} className="form-control" placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const validate = values => {
  const errors = {};

  if(!values.title) {
    errors.title = "Enter a title";
  }
  if(!values.categories) {
    errors.categories = "Enter some categories";
  }
  if(!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
}

class New extends Component {
  // renderField(field) {
  //   return (
  //     <div className="form-group">
  //       <label>{field.label}</label>
  //       <input {...field.input} className="form-control" type="text" placeholder={field.label} />
  //       {field.meta.touched && field.meta.error &&
  //       <span className="error">{field.meta.error}</span>}
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <form>
          <Field
            label="Title"
            name="title"
            type="text"
            component={renderField}
          />
          <Field
            label="Categories"
            name="categories"
            type="text"
            component={renderField}
          />
          <Field
            label="Content"
            name="content"
            type="textarea"
            component={renderField}
          />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(New);
