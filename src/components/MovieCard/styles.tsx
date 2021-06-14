import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 185
  },
  cardContent: {
    padding: 12,
    "&:last-child": {
      padding: 12
    }
  },
  noImagePic: {
    width: 185,
    height: 271,
    background: "grey",
    opacity: 0.5
  },
  titleText: {
    fontWeight: 700
  }
}));
