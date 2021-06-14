import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    height: "200px",
    margin: "100px auto",
    alignItems: "center",
    position: "relative"
  },
  listItem: {
    background: "#ffffff",
    borderRadius: 8,
    border: "1px solid #eeeeee",
    padding: 30,
    boxShadow: "0 10px 5px rgba(0, 0, 0, 0.1)",
    width: 420,
    height: 200,
    transition: "all 0.75s ease",
    opacity: 0,
    position: "absolute",
    transform: "scale(0.85) translateY(50px)"
  },
  card: {
    maxWidth: 185
  },
  cardContent: {
    padding: 12,
    "&:last-child": {
      padding: 12
    }
  },
  categoryTitleText: {
    margin: " 24px 0 24px 0"
  },
  noImagePic: {
    width: 185,
    height: 271,
    background: "grey",
    opacity: 0.5
  },
  header: {
    margin: "20px 100px 0 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  backBtn: {
    margin: "8px 0 8px 0",
    minWidth: 185
  },
  searchWrapper: {
    width: 1920,
    marginLeft: 20
  },
  searchInput: {
    width: "100%",
    marginLeft: 100,
    marginRight: "auto",
    maxWidth: 700,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: 0,
      marginBottom: 20,
      maxWidth: 335
    }
  }
}));
