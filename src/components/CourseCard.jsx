import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CourseForm from "./CourseForm";
import { useProfile } from "../utilities/profile";

const CourseCard = ({
  info,
  id,
  onToggleSelect,
  isSelected,
  isSelectable,
  conflicted,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [{ user, isAdmin }] = useProfile();

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const cardStyles = {
    cursor: isSelectable ? "pointer" : "not-allowed",
    border: isSelected ? "2px solid #007BFF" : "none",
    backgroundColor: isSelected
      ? "lemonchiffon"
      : conflicted
      ? "lightcoral"
      : "white",
    color: isSelected ? "green" : conflicted ? "white" : "black",
    opacity: isSelected ? 1 : 0.7,
  };

  return (
    <Card
      style={cardStyles}
      onClick={isSelectable ? onToggleSelect : null}
      data-cy="course"
    >
      <CardContent>
        {isEditing ? (
          <CourseForm course={info} courseId={id} onCancel={handleCancelEdit} />
        ) : (
          <>
            <h3>
              {info.term} CS {info.number}
            </h3>
            <p>{info.title}</p>
            <h3>{info.meets}</h3>
            {isSelectable && user && isAdmin && (
              <button onClick={handleEditClick}>Edit</button>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseCard;
