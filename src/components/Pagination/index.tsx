import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useStyles } from "./styles";

interface Props {
  totalPages: number;
  handlePagination: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CustomPagination: React.FC<Props> = ({
  totalPages,
  handlePagination
}) => {
  const { wrapper } = useStyles();
  return (
    <div className={wrapper}>
      <Pagination count={totalPages} size="large" onChange={handlePagination} />
    </div>
  );
};

export default CustomPagination;
