import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const TermSelector = ({ selectedTerm, onSelectTerm }) => {
  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyles} data-cy="course">
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => onSelectTerm("Fall")}
          data-cy="Fall"
        >
          Fall
        </Button>
        <Button
          variant="contained"
          onClick={() => onSelectTerm("Spring")}
          data-cy="Spring"
        >
          Spring
        </Button>
        <Button
          variant="contained"
          onClick={() => onSelectTerm("Winter")}
          data-cy="Winter"
        >
          Winter
        </Button>
      </Stack>
    </div>
  );
};

export default TermSelector;
