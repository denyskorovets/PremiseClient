import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120
  },
  icon: {
    width: 400,
    height: 400,
    color: "grey",
    opacity: 0.5,
    marginBottom: 50
  }
}));
