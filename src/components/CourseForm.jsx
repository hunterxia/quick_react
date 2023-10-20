import React from "react";
import { useDbUpdate } from "../utilities/firebase";
import { useFormData } from "../utilities/useFormData";

const validateCourseData = (key, value) => {
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

const CourseForm = ({ course, courseId, onCancel }) => {
  const [state, change] = useFormData(validateCourseData, course);
  const [update, result] = useDbUpdate(`/courses/${courseId}`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state.errors) {
      try {
        await update(state.values);
        window.location.reload();
      } catch (error) {
        console.error("An error occurred during update:", error);
      }
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
          value={state.values.title}
          onChange={change}
        />
        <div className="invalid-feedback">{state.errors?.title}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="meets" className="form-label">
          Meeting Time
        </label>
        <input
          className="form-control"
          id="meets"
          name="meets"
          value={state.values.meets}
          onChange={change}
        />
        <div className="invalid-feedback">{state.errors?.meets}</div>
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
