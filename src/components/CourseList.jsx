import React from "react";

export default function CourseList({ courses }) {
  return (
    <div className="course-list">
      {Object.entries(courses).map(([id, info]) => (
        <div key={id}>
          {info.term} CS {info.number}: {info.title}
        </div>
      ))}
    </div>
  );
}
