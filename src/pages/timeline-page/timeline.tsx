import { Button, Box } from "@material-ui/core";
import React from "react";

const TimeLinePage = () => {
  return (
    <>
      <div className="App">Time line</div>
      <Box component="span" m={1} color="text.primary">
        <Button />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          alert("clicked");
        }}
      >
        Sign in
      </Button>
    </>
  );
};

export default TimeLinePage;
