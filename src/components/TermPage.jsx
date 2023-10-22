import { useState, useEffect } from "react";
import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import SchedulePopup from "./SchedulePopup";
import Button from "@mui/material/Button";
import "../style/TermPage.css";
import { signInWithGoogle, signOut, useAuthState } from "../utilities/firebase";

const TermPage = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState("Fall");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const SignInButton = () => (
    <Button variant="contained" onClick={signInWithGoogle}>
      Sign in
    </Button>
  );

  const SignOutButton = () => (
    <Button variant="contained" onClick={signOut}>
      Sign out
    </Button>
  );

  const AuthButton = () => {
    const [user] = useAuthState();
    return user ? <SignOutButton /> : <SignInButton />;
  };

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
      <div className="button-container">
        <Button variant="contained" onClick={handleOpenPopup}>
          Course Plan
        </Button>
        <AuthButton />
      </div>
      <TermSelector onSelectTerm={handleSelectTerm} />

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
