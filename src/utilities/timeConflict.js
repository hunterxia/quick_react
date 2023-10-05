function convertTimeStringToTime(dateString, timeString) {
  const [hours, minutes] = timeString.split(":");
  const date = new Date(`${dateString}T${hours}:${minutes}`);
  return date;
}

// Function to check if two time intervals overlap
export function doTimeIntervalsOverlap(time1, time2) {
  return time1[0] <= time2[1] && time1[1] >= time2[0];
}

// Function to check if two classes have a time conflict
export function doClassesConflict(class1, class2) {
  const days1 = class1.meets.split(" ");
  const days2 = class2.meets.split(" ");

  for (const day1 of days1) {
    for (const day2 of days2) {
      if (day1 === day2) {
        const time1 = [
          convertTimeStringToTime(class1.start),
          convertTimeStringToTime(class1.end),
        ];
        const time2 = [
          convertTimeStringToTime(class2.start),
          convertTimeStringToTime(class2.end),
        ];

        if (doTimeIntervalsOverlap(time1, time2)) {
          return true;
        }
      }
    }
  }

  return false;
}

// Function to check if a new class has conflicts with existing selected classes
export function doesNewClassHaveConflicts(newClass, selectedClasses) {
  for (const selectedClass of selectedClasses) {
    if (doClassesConflict(newClass, selectedClass)) {
      return true;
    }
  }
  return false;
}
