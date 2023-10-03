import { useState } from "react";
import TermSelector from "./TermSelector";
import CourseList from "./CourseList";

const TermPage = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState("Fall");
  const [selectedCourses, setSelectedCourses] = useState([]);

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
      <h1>Course List for {selectedTerm}</h1>
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
    </div>
  );
};

export default TermPage;
