import React from "react";
import ImageSearchSharpIcon from "@material-ui/icons/ImageSearchSharp";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const EmptySearch: React.FC = () => {
  const { wrapper, icon } = useStyles();
  return (
    <div className={wrapper}>
      <ImageSearchSharpIcon className={icon} />
      <Typography variant="h5">
        Sorry, there are no movies that match your query...
      </Typography>
    </div>
  );
};

export default EmptySearch;
