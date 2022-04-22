import React from "react";
import { Container, Grid } from "@material-ui/core";
import LazyLoad from "react-lazyload";
import useStyles from "./index.styles";
import Slider from "../../components/Slider";
import Categoryies from "../../components/Categoryies";
import PopularShoes from "../../components/PopularShoes";

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <LazyLoad height={500}>
        <Grid container direction="row" className={classes.topGrid}>
          <Grid item lg={7} className={classes.sliderGrid}>
            <Slider />
          </Grid>
          <Grid item lg={5} className={classes.catGrid}>
            <Categoryies />
          </Grid>
        </Grid>
      </LazyLoad>
        <PopularShoes />
    </Container>
  );
}
