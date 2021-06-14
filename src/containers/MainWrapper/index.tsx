import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core/";
import { useStyles } from "./styles";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import React from "react";

const MainWrapper: React.FC = ({ children }) => {
  const { appBar, toolbar, titleBtn, titleText, container, grid } = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={appBar}>
        <Toolbar className={toolbar}>
          <Button component={Link} to="/" className={titleBtn}>
            <Typography variant="h6" className={titleText}>
              Movie App
            </Typography>
          </Button>
          <SearchBar />
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth={false} className={container}>
          <Grid container className={grid}>
            {children}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default MainWrapper;
