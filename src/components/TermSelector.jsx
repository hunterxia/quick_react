import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const TermSelector = ({ selectedTerm, onSelectTerm }) => {
  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyles}>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => onSelectTerm("Fall")}
          disabled={selectedTerm === "Fall"}
        >
          Fall
        </Button>
        <Button
          variant="contained"
          onClick={() => onSelectTerm("Spring")}
          disabled={selectedTerm === "Spring"}
        >
          Spring
        </Button>
        <Button
          variant="contained"
          onClick={() => onSelectTerm("Winter")}
          disabled={selectedTerm === "Winter"}
        >
          Winter
        </Button>
      </Stack>
    </div>
  );
};

export default TermSelector;
