import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import Grid from "@mui/material/Grid";
import {
  areCoursesEqual,
  getConflictedCourses,
} from "../utilities/timeConflict";

const CoursesList = ({
  courses,
  selectedTerm,
  onToggleSelectCourse,
  selectedCourses,
}) => {
  const [editingCourse, setEditingCourse] = useState(null);
  const [conflictedCourses, setConflictedCourses] = useState([]);

  useEffect(() => {
    const newConflictedCourses = getConflictedCourses(
      selectedCourses.map((id) => courses[id]),
      Object.values(courses).filter(
        (course) => !selectedCourses.includes(course.id)
      )
    );
    setConflictedCourses(newConflictedCourses);
  }, [selectedCourses, courses]);

  const handleEditCourse = (courseId) => {
    setEditingCourse(courseId);
  };

  const handleCancelEdit = () => {
    setEditingCourse(null);
  };

  return (
    <Grid container spacing={3}>
      {Object.entries(courses)
        .filter(([id, course]) => course.term === selectedTerm)
        .map(([id, info]) => {
          const isConflicted = conflictedCourses.some((course) =>
            areCoursesEqual(course, info)
          );
          const isSelected = selectedCourses.includes(id);
          const isSelectable = !isConflicted || isSelected;

          return (
            <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
              <CourseCard
                info={info}
                isSelected={isSelected}
                onToggleSelect={() => isSelectable && onToggleSelectCourse(id)}
                isSelectable={isSelectable}
                onEdit={() => handleEditCourse(id)}
                conflicted={isConflicted}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default CoursesList;
