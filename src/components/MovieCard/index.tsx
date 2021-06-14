import React from "react";
import { IMovie } from "../../utils/interfaces";
import { useStyles } from "./styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography
} from "@material-ui/core";
import NoImageIcon from "../../assets/icons/NoImageIcon";
import { Link } from "react-router-dom";

interface IProps {
  movie: IMovie;
  imagePath: string;
}

const MovieCard: React.FC<IProps> = ({ movie, imagePath }) => {
  const { card, noImagePic, cardContent, titleText } = useStyles();

  return (
    <Card className={card}>
      <CardActionArea component={Link} to={`/details/${movie.id}`}>
        {movie.poster_path ? (
          <CardMedia
            component="img"
            alt={movie.title}
            height="272"
            image={imagePath}
          />
        ) : (
          <NoImageIcon className={noImagePic} />
        )}
        <CardContent className={cardContent}>
          <Typography variant="body2" className={titleText}>
            {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
