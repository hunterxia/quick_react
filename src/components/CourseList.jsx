import React, { useState } from "react";
import CourseCard from "./CourseCard";
import Grid from "@mui/material/Grid";
import {
  areCoursesEqual,
  getConflictedCourses,
} from "../utilities/timeConflict";
import CourseForm from "./CourseForm";

const CoursesList = ({
  courses,
  selectedTerm,
  onToggleSelectCourse,
  selectedCourses,
}) => {
  if (!courses) return null;

  const handleToggleCourseSelection = (courseId) => {
    onToggleSelectCourse(courseId);
  };

  const conflictedCourses = getConflictedCourses(
    selectedCourses,
    Object.values(courses)
  );

  const isCourseSelectable = (course) => {
    const conflictedCourses = getConflictedCourses(selectedCourses, [course]);

    return !conflictedCourses.some((conflictedCourse) =>
      areCoursesEqual(conflictedCourse, course)
    );
  };

  const [editingCourse, setEditingCourse] = useState(null);

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
        .map(([id, info]) => (
          <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
            <CourseCard
              info={info}
              isSelected={selectedCourses.includes(id)}
              onToggleSelect={() => handleToggleCourseSelection(id)}
              isSelectable={isCourseSelectable(info)}
              onEdit={() => handleEditCourse(id)}
              conflicted={conflictedCourses.some((course) =>
                areCoursesEqual(course, info)
              )}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default CoursesList;
