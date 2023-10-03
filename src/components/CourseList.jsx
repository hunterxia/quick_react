import CourseCard from "./CourseCard";
import Grid from "@mui/material/Grid";

const CoursesList = ({ courses, selectedTerm }) => {
  // Add a guard clause to handle cases where courses is undefined or null
  if (!courses) return null;

  return (
    <Grid container spacing={3}>
      {Object.entries(courses)
        .filter(([id, course]) => course.term === selectedTerm)
        .map(([id, info]) => (
          <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
            <CourseCard info={info} />
          </Grid>
        ))}
    </Grid>
  );
};

export default CoursesList;
