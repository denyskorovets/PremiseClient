import React, { useState, useEffect, useContext } from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { IMovie } from "../../utils/interfaces";
import MovieCard from "../../components/MovieCard";
import Preloader from "../../components/Preloader";
import CustomPagination from "../../components/Pagination";
import { ConfigContext } from "../../utils/providers/ConfigProvider";

interface MovieReq {
  results: IMovie[];
  total_pages: number;
  page: number;
  loading: boolean;
}

const defaultState: MovieReq = {
  results: [],
  total_pages: 0,
  page: 1,
  loading: true
};

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [popular, setPopular] = useState(defaultState);
  const [topRated, setTopRated] = useState(defaultState);
  const [upcoming, setUpcoming] = useState(defaultState);
  const configData = useContext(ConfigContext);
  const { categoryTitleText, dashboardWrapper, gridWrapper } = useStyles();

  const getPopular = (page: number) => {
    fetch(`http://localhost:8000/api/v1/movies/popular?page=${page}`)
      .then((response) => response.json())
      .then((res: MovieReq) => {
        setPopular({ ...res, loading: false });
      })
      .catch(() => {});
  };

  const getTopRated = (page: number) => {
    fetch(`http://localhost:8000/api/v1/movies/topRated?page=${page}`)
      .then((response) => response.json())
      .then((res: MovieReq) => {
        setTopRated({ ...res, loading: false });
      })
      .catch(() => {});
  };

  const getUpcoming = (page: number) => {
    fetch(`http://localhost:8000/api/v1/movies/upcoming?page=${page}`)
      .then((response) => response.json())
      .then((res: MovieReq) => {
        setUpcoming({ ...res, loading: false });
      })
      .catch(() => {});
  };

  const handlePopularPagination = (
    _: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPopular((prev) => ({ ...prev, page: value }));
  };

  const handleTopRatedPagination = (
    _: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setTopRated((prev) => ({ ...prev, page: value }));
  };

  const handleUpcomingPagination = (
    _: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setUpcoming((prev) => ({ ...prev, page: value }));
  };

  const generateImageLink = (link: string) => {
    let result = configData?.images?.secure_base_url + "w185" + link;
    return result;
  };

  useEffect(() => {
    getPopular(popular.page);
  }, [popular.page]);

  useEffect(() => {
    getTopRated(topRated.page);
  }, [topRated.page]);

  useEffect(() => {
    getUpcoming(upcoming.page);
  }, [upcoming.page]);

  useEffect(() => {
    if (configData) setLoading(false);
  }, [configData]);

  if (loading) {
    return <Preloader size={200} />;
  }

  return (
    <div className={dashboardWrapper}>
      {popular.loading ? (
        <Preloader size={200} />
      ) : (
        <div>
          <Typography variant="h4" className={categoryTitleText}>
            What's Popular
          </Typography>
          <Grid container spacing={2} className={gridWrapper}>
            {popular?.results?.map((movie: IMovie) => (
              <Grid item key={movie.id}>
                <MovieCard
                  movie={movie}
                  imagePath={generateImageLink(movie.poster_path)}
                />
              </Grid>
            ))}
          </Grid>
          <CustomPagination
            totalPages={popular?.total_pages}
            handlePagination={handlePopularPagination}
          />
        </div>
      )}

      {topRated.loading ? (
        <Preloader size={200} />
      ) : (
        <div>
          <Typography variant="h4" className={categoryTitleText}>
            Top Rated
          </Typography>
          <Grid container spacing={2} className={gridWrapper}>
            {topRated?.results?.map((movie: IMovie) => (
              <Grid item key={movie.id}>
                <MovieCard
                  movie={movie}
                  imagePath={generateImageLink(movie.poster_path)}
                />
              </Grid>
            ))}
          </Grid>
          <CustomPagination
            totalPages={topRated?.total_pages}
            handlePagination={handleTopRatedPagination}
          />
        </div>
      )}

      {upcoming.loading ? (
        <Preloader size={200} />
      ) : (
        <div>
          <Typography variant="h4" className={categoryTitleText}>
            Upcoming
          </Typography>
          <Grid container spacing={2} className={gridWrapper}>
            {upcoming?.results?.map((movie: IMovie) => (
              <Grid item key={movie.id}>
                <MovieCard
                  movie={movie}
                  imagePath={generateImageLink(movie.poster_path)}
                />
              </Grid>
            ))}
          </Grid>
          <CustomPagination
            totalPages={upcoming?.total_pages}
            handlePagination={handleUpcomingPagination}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
