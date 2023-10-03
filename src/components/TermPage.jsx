import { useState, useEffect } from "react";
import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import SchedulePopup from "./SchedulePopup";

const TermPage = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState("Fall");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isPopupOpen && !e.target.closest(".schedule-popup")) {
        handleClosePopup();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isPopupOpen]);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSelectTerm = (term) => {
    setSelectedTerm(term);
  };

  const handleToggleSelectCourse = (courseId) => {
    setSelectedCourses((prevSelectedCourses) => {
      if (prevSelectedCourses.includes(courseId)) {
        return prevSelectedCourses.filter((id) => id !== courseId);
      } else {
        return [...prevSelectedCourses, courseId];
      }
    });
  };

  return (
    <div>
      <div className="schedule-popup-link">
        <button onClick={handleOpenPopup}>Course Plan</button>
      </div>

      <TermSelector
        selectedTerm={selectedTerm}
        onSelectTerm={handleSelectTerm}
      />
      <CourseList
        courses={courses}
        selectedTerm={selectedTerm}
        onToggleSelectCourse={handleToggleSelectCourse}
        selectedCourses={selectedCourses}
      />
      {isPopupOpen && (
        <SchedulePopup
          courses={courses}
          selectedCourses={selectedCourses}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default TermPage;
