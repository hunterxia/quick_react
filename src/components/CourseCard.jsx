import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CourseForm from "./CourseForm";
import Divider from "@mui/material/Divider";

const CourseCard = ({
  info,
  onToggleSelect,
  isSelected,
  isSelectable,
  conflicted,
}) => {
  const [isEditing, setIsEditing] = useState(false);
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

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <Card style={cardStyles} onClick={isSelectable ? onToggleSelect : null}>
      <CardContent>
        {isEditing ? (
          <CourseForm course={info} onCancel={handleCancelEdit} />
        ) : (
          <>
            <h3>
              {info.term} CS {info.number}
            </h3>
            <p> {info.title}</p>
            <Divider />
            <h3>{info.meets}</h3>
            {isSelectable && <button onClick={handleEditClick}>Edit</button>}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseCard;
