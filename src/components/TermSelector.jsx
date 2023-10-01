import Button from "@mui/material/Button";

const TermSelector = ({ selectedTerm, onSelectTerm }) => {
  return (
    <div>
      <Button
        onClick={() => onSelectTerm("Fall")}
        disabled={selectedTerm === "Fall"}
      >
        Fall
      </Button>
      <Button
        onClick={() => onSelectTerm("Winter")}
        disabled={selectedTerm === "Winter"}
      >
        Winter
      </Button>
      <Button
        onClick={() => onSelectTerm("Spring")}
        disabled={selectedTerm === "Spring"}
      >
        Spring
      </Button>
    </div>
  );
};

export default TermSelector;
