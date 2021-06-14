import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  Grid,
  Button,
  TextField,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { useStyles } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { IMovie } from "../../utils/interfaces";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import SearchIcon from "@material-ui/icons/Search";
import MovieCard from "../../components/MovieCard";
import EmptySearch from "../../components/EmptySearch";
import CustomPagination from "../../components/Pagination";
import { ConfigContext } from "../../utils/providers/ConfigProvider";

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<IMovie[]>();
  const [totalPages, setTotalPages] = useState<number>(0);
  const { categoryTitleText, header, backBtn, searchWrapper, searchInput } =
    useStyles();
  const getParamsQuery = new URLSearchParams(useLocation().search);
  const searchQuery = getParamsQuery.get("query");
  const configData = useContext(ConfigContext);

  const handleClearSearch = () => {
    setSearch("");
    setMovies([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (!e.target.value) setMovies([]);
  };

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const getMovies = () => {
    fetch(
      `http://localhost:8000/api/v1/search/movie?query=${search}&page=${page}`
    )
      .then((response) => response.json())
      .then((res: any) => {
        setMovies(res.results);
        setTotalPages(res.total_pages);
      })
      .catch(() => {});
  };

  const generateImageLink = (link: string) => {
    let result = configData?.images?.secure_base_url + "w185" + link;
    return result;
  };

  useEffect(() => {
    searchQuery && setSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    search && getMovies();
  }, [search, page]);

  return (
    <div className={searchWrapper}>
      <div className={header}>
        <Button
          startIcon={<ArrowBackIcon />}
          className={backBtn}
          component={Link}
          to="/"
        >
          <Typography variant="subtitle2" className={categoryTitleText}>
            Back to Dashboard
          </Typography>
        </Button>
        <TextField
          className={searchInput}
          variant="outlined"
          value={search}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: search && (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClearSearch}
              >
                <CancelRoundedIcon />
              </IconButton>
            )
          }}
        />
      </div>
      {(!movies?.length || !search) && <EmptySearch />}
      <Grid container spacing={2}>
        {!!movies?.length &&
          movies?.map((movie: IMovie) => (
            <Grid item key={movie.id}>
              <MovieCard
                movie={movie}
                imagePath={generateImageLink(movie.poster_path)}
              />
            </Grid>
          ))}
      </Grid>
      {!!movies?.length && (
        <CustomPagination
          totalPages={totalPages}
          handlePagination={handlePagination}
        />
      )}
    </div>
  );
};

export default Search;
