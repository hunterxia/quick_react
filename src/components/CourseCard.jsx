import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

const CourseCard = ({ info, isSelected, onToggleSelect }) => {
  const cardStyles = {
    cursor: "pointer",
    border: isSelected ? "2px solid #007BFF" : "none",
    backgroundColor: isSelected ? "lemonchiffon" : "white",
    color: isSelected ? "green" : "black",
  };

  return (
    <Card onClick={onToggleSelect} style={cardStyles}>
      <CardContent>
        <h3>
          {info.term} CS {info.number}
        </h3>
        <p> {info.title}</p>
        <Divider />
        <h3>{info.meets}</h3>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
