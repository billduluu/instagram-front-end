import React from "react";
import "./style.css";
import { StoryBar } from "../../components/index";
import Grid from "@material-ui/core/Grid";

const Timeline = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={6} className="maincontent-container">
          <div>
            <StoryBar />
            {/* post component end orj irne */}
          </div>
        </Grid>
        <Grid item xs={2}>
          {/* profile bolon suggest friends gardg heseg end irne */}
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default Timeline;
