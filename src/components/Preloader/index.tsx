import React from "react";
import { CircularProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

interface Props {
  size: number;
}

const Preloader: React.FC<Props> = ({ size }) => {
  const { grid, progressBar } = useStyles();
  return (
    <Grid container justify="center" className={grid}>
      <CircularProgress className={progressBar} size={size} />
    </Grid>
  );
};

export default Preloader;
