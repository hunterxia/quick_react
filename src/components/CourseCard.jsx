import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";

export default function CourseCard({ info }) {
  return (
    <Card>
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
}
