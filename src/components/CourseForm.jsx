import React, { useState } from "react";

const errorStyle = {
  color: "red",
  fontSize: "12px",
};

const CourseForm = ({ course, onCancel }) => {
  const [title, setTitle] = useState(course.title);
  const [meets, setMeets] = useState(course.meets);
  const [errors, setErrors] = useState({});

  const handleCancel = () => {
    onCancel();
  };

  const validate = () => {
    const newErrors = {};

    if (title.length < 2) {
      newErrors.title = "Title must be at least two characters.";
    }

    if (
      meets !== "" &&
      !/^[A-Za-z]{1,7} \d{2}:\d{2}-\d{2}:\d{2}$/.test(meets)
    ) {
      newErrors.meets =
        "Meeting time must contain days and start-end, e.g., MWF 12:00-13:20";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Do nothing for now. Later you can handle the submit here.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <div style={errorStyle}>{errors.title}</div>}
      </div>

      <div>
        <label>Meeting Time</label>
        <input
          type="text"
          value={meets}
          onChange={(e) => setMeets(e.target.value)}
        />
        {errors.meets && <div style={errorStyle}>{errors.meets}</div>}
      </div>

      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CourseForm;
