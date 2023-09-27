import React from "react";
import CourseCard from "./CourseCard";

const CoursesList = ({ courses }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {Object.entries(courses).map(([id, info]) => (
        <div key={id} style={{ flex: "1", width: "250px", margin: "10px" }}>
          <CourseCard id={id} info={info} />
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
