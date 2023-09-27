import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CourseCard({ id, info }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          style={{ textAlign: "center" }}
        >
          {info.term} CS {info.number}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
          style={{ textAlign: "center" }}
        >
          {info.title}
        </Typography>
        <Typography variant="body2" style={{ textAlign: "center" }}>
          {info.meets}
        </Typography>
      </CardContent>
    </Card>
  );
}
