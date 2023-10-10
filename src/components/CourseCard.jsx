import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import CourseForm from "./CourseForm";
import { useState } from "react";

const CourseCard = ({
  info,
  onToggleSelect,
  isSelected,
  isSelectable,
  conflicted,
}) => {
  const cardStyles = {
    cursor: isSelectable && !conflicted ? "pointer" : "not-allowed",
    border: isSelected ? "2px solid #007BFF" : "none",
    backgroundColor: isSelected
      ? "lemonchiffon"
      : conflicted
      ? "lightcoral"
      : "white",
    color: isSelected ? "green" : conflicted ? "white" : "black",
    opacity: isSelected ? 1 : 0.7,
  };
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <Card style={cardStyles} onClick={isSelectable ? onToggleSelect : null}>
      <CardContent>
        <h3>
          {info.term} CS {info.number}
        </h3>
        <p> {info.title}</p>
        <Divider />
        <h3>{info.meets}</h3>
        {isSelectable && <button onClick={handleEditClick}>Edit</button>}
      </CardContent>
      {isEditing && (
        <div style={{ padding: "16px" }}>
          <CourseForm course={info} onCancel={handleCancelEdit} />
        </div>
      )}
    </Card>
  );
};

export default CourseCard;
