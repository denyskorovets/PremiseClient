import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  detailsWrapper: {
    width: "100%",
    // marginTop: 40,
    height: 570
  },
  backdropWrapper: {
    width: "100%",
    height: `calc(100vh - 64px)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  backdropCover: {
    width: "100%",
    height: `calc(100vh - 64px)`,
    opacity: 0.9,
    display: "flex",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(to right, rgba(97.25%, 97.25%, 97.25%, 1.00) 150px, rgba(97.25%, 97.25%, 97.25%, 0.84) 100%)"
  },
  posterWrapper: {
    width: 300,
    height: 450,
    marginLeft: 200,
    [theme.breakpoints.down("md")]: {
      marginLeft: 100
    }
  },
  posterImg: {
    borderRadius: 5
  },
  boldText: {
    fontWeight: 600
  },
  overviewText: {
    marginBottom: 20
  },
  ratingText: {
    marginBottom: 20
  },
  yearText: {
    opacity: 0.8
  },
  tagline: {
    opacity: 0.9,
    marginTop: 20,
    fontStyle: "italic"
  },
  overview: {
    fontWeight: 600,
    marginTop: 16
  },
  descriptionWrapper: {
    margin: "0 40px"
  },
  backBtn: {
    margin: "8px 0 8px 0",
    minWidth: 185,
    zIndex: 1,
    position: "absolute",
    left: 20
  },
  categoryTitleText: {
    margin: " 24px 0 24px 0"
  }
}));
