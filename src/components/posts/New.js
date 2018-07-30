import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../redux/actions/posts';


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className}>
      <label>{label}</label>
      <div>
        <input {...input} className="form-control" placeholder={label} type={type} />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span className="text-warning">{warning}</span>))}
      </div>
    </div>
  );
}

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

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
          <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
          <button type="button" className="btn" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, { createPost })(New)
);
