export const areCoursesEqual = (course1, course2) =>
  course1.term === course2.term &&
  course1.number === course2.number &&
  course1.title === course2.title;

const parseMeetingTime = (meetingTimeStr) => {
  const [daysStr, timeStr] = meetingTimeStr.split(" ");
  const [startTimeStr, endTimeStr] = timeStr.split("-");
  const days = extractDays(daysStr);
  const startTime = convertTimeToMinutes(startTimeStr);
  const endTime = convertTimeToMinutes(endTimeStr);

  return {
    days,
    startTime,
    endTime,
  };
};

const extractDays = (daysStr) => {
  const regex = /[A-Z][a-z]*/g;
  return daysStr.match(regex);
};

const convertTimeToMinutes = (timeStr) => {
  const [hours, minutes] = timeStr.split(":");
  return parseInt(hours) * 60 + parseInt(minutes);
};

const doTimeIntervalsOverlap = (interval1, interval2) => {
  const daysOverlap = interval1.days.some((day) =>
    interval2.days.includes(day)
  );
  const timeOverlap =
    interval1.startTime < interval2.endTime &&
    interval1.endTime > interval2.startTime;
  return daysOverlap && timeOverlap;
};

export const getConflictedCourses = (selectedCourses, unselectedCourses) =>
  unselectedCourses.filter((course) =>
    selectedCourses.some((selectedCourse) => {
      const interval1 = parseMeetingTime(selectedCourse.meets);
      const interval2 = parseMeetingTime(course.meets);
      return (
        selectedCourse.term === course.term &&
        doTimeIntervalsOverlap(interval1, interval2)
      );
    })
  );
