import React, { useState, useEffect } from "react";

const CourseForm = ({ course, onCancel, onSubmit }) => {
  const [state, setState] = useState({
    title: course.title,
    meets: course.meets,
    errors: {},
  });

  const validate = (key, value) => {
    if (key === "title" && value.length < 2) {
      return "Title must be at least two characters.";
    }
    if (
      key === "meets" &&
      !/^[A-Za-z]{1,7} \d{2}:\d{2}-\d{2}:\d{2}$/.test(value)
    ) {
      return "Meeting time must contain days and start-end, e.g., MWF 12:00-13:20";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errMsg = validate(name, value);
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: errMsg,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(state.errors).every((x) => x === "")) {
      onSubmit({
        title: state.title,
        meets: state.meets,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          className="form-control"
          id="title"
          name="title"
          value={state.title}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{state.errors.title}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="meets" className="form-label">
          Meeting Time
        </label>
        <input
          className="form-control"
          id="meets"
          name="meets"
          value={state.meets}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{state.errors.meets}</div>
      </div>
      <button type="submit" className="btn btn-primary me-auto">
        Submit
      </button>
      <button
        type="button"
        className="btn btn-outline-dark me-2"
        onClick={onCancel}
      >
        Cancel
      </button>
    </form>
  );
};

export default CourseForm;
