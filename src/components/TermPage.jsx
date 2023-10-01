import { useState } from "react";
import TermSelector from "./TermSelector";
import CourseList from "./CourseList";

const TermPage = () => {
  const [selectedTerm, setSelectedTerm] = useState("Fall");

  const handleSelectTerm = (term) => {
    setSelectedTerm(term);
  };

  return (
    <div>
      <h1>Course List for {selectedTerm}</h1>
      <TermSelector
        selectedTerm={selectedTerm}
        onSelectTerm={handleSelectTerm}
      />
      <CourseList selectedTerm={selectedTerm} />
    </div>
  );
};

export default TermPage;
