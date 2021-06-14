import React, { useState } from "react";
import { InputBase, Button, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");
  const classes = useStyles();
  const history = useHistory();

  const handleSearch = () => {
    if (search) {
      setSearch("");
      history.push(`/search?query=${search}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.searchWrapper}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
          value={search}
          onChange={handleChange}
          onKeyUp={(event) => {
            if (event.key === "Enter") handleSearch();
          }}
        />
      </div>
      <Button
        className={classes.searchBtn}
        onClick={handleSearch}
        type="submit"
      >
        <Typography variant="button">Search</Typography>
      </Button>
    </div>
  );
};

export default SearchBar;
