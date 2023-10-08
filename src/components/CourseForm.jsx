const CourseForm = ({ course, onCancel }) => {
  const { title, meets } = course;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} readOnly />
      </div>
      <div>
        <label htmlFor="meets">Meeting Times:</label>
        <input type="text" id="meets" value={meets} readOnly />
      </div>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default CourseForm;
