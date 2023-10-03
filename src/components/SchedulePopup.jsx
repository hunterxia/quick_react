import "../style/SchedulePopup.css";

const SchedulePopup = ({ courses, selectedCourses, onClose }) => {
  const selectedCourseInfos = selectedCourses.map((id) => courses[id]);

  return (
    <div className="schedule-popup">
      {selectedCourseInfos.length > 0 ? (
        <div>
          <h2>Selected Courses:</h2>
          <ul>
            {selectedCourseInfos.map((courseInfo) => (
              <li key={courseInfo.id}>
                CS {courseInfo.number}: {courseInfo.title} ({courseInfo.meets})
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>
            No courses selected. Please select courses from the course list.
          </p>
        </div>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SchedulePopup;
