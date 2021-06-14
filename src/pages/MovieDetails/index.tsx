import React, { useState, useEffect, useContext } from "react";
import { IMovieDetails, ImageConfig } from "../../utils/interfaces";
import { Typography, Button } from "@material-ui/core";
import { format } from "date-fns";
import { useStyles } from "./styles";
import Preloader from "../../components/Preloader";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory, useParams } from "react-router-dom";
import { ConfigContext } from "../../utils/providers/ConfigProvider";

const MovieDetails: React.FC = () => {
  const history = useHistory();
  const [movie, setMovie] = useState<IMovieDetails>();
  const [loading, setLoading] = useState<boolean>(true);
  const configData = useContext<ImageConfig>(ConfigContext);
  const {movieId} = useParams<{movieId: string}>();
  const {
    boldText,
    posterWrapper,
    detailsWrapper,
    backdropWrapper,
    backdropCover,
    posterImg,
    overviewText,
    ratingText,
    descriptionWrapper,
    yearText,
    tagline,
    overview,
    backBtn,
    categoryTitleText
  } = useStyles();

  const generateBackdropLink = () => {
    let result =
      configData?.images?.secure_base_url + "w1280" + movie?.backdrop_path;
    return result;
  };

  const generatePosterLink = () => {
    let result =
      configData?.images?.secure_base_url + "w300" + movie?.poster_path;
    return result;
  };

  const handleBack = () => {
    history.push(`/`);
  };

  const getMovie = () => {
    fetch(`http://localhost:8000/api/v1/movie/${movieId}`)
      .then((response) => response.json())
      .then((res: any) => {
        setMovie(res);
      })
      .catch((err) => {});
  };

  const currencyFormat = (num: number) => {
    return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    if (movie && configData) {
      setLoading(false);
    }
  }, [movie, configData]);

  if (loading || !movie) {
    return <Preloader size={200} />;
  }

  return (
    <div className={detailsWrapper}>
      <div
        className={backdropWrapper}
        style={{
          backgroundImage: `url('${generateBackdropLink()}')`
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          className={backBtn}
          onClick={handleBack}
        >
          <Typography variant="subtitle2" className={categoryTitleText}>
            Back to Dashboard
          </Typography>
        </Button>
        <div className={backdropCover}>
          <div className={posterWrapper}>
            <img
              src={generatePosterLink()}
              className={posterImg}
              alt="Poster"
            />
          </div>
          <div className={descriptionWrapper}>
            <Typography variant="h3">
              {movie.original_title}{" "}
              <span className={yearText}>
                ({format(new Date(movie.release_date), "yyyy")})
              </span>
            </Typography>
            <Typography>
              {format(new Date(movie.release_date), "yyyy")} &#8226;
              {movie.genres.map((item) => (
                <span key={item.id}> {item.name} &#8226;</span>
              ))}{" "}
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </Typography>
            <Typography variant="subtitle1" className={tagline}>
              {movie.tagline}
            </Typography>
            <Typography variant="h5" className={overview}>
              Overview
            </Typography>
            <Typography variant="body1" className={overviewText}>
              {movie.overview}
            </Typography>
            <Typography className={ratingText}>
              <span className={boldText}>Rating: </span>
              {((movie.vote_average / 10) * 100).toFixed(0) + "%"}
            </Typography>
            <Typography>
              <span className={boldText}>Budget: </span>
              {currencyFormat(movie.budget)}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
