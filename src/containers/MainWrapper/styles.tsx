import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#e50914"
  },
  toolbar: {
    justifyContent: "space-between"
  },
  titleBtn: {
    color: "#fff"
  },
  titleText: {
    fontFamily: "Helvetica Neue",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: -1,
    lineHeight: 1
  },
  container: {
    padding: 0,
    margin: 0
  },
  grid: {
    width: "100%",
    margin: 0
  }
}));
