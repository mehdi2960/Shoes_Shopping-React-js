import React from "react";
import { Grid } from "@material-ui/core";
import LazyLoad from "react-lazyload";
import Title from "./Title";
import Mens from "./Mens";
import Womens from "./Womens";
import Kids from "./Kids";

export default function Index() {
  return (
    <>
      <LazyLoad height={365}>
        <Grid container>
          <Title title="پرفروش های مردانه" />
          <Mens />
        </Grid>
      </LazyLoad>
      <LazyLoad height={365}>
        <Grid container>
          <Title title="پرفروش های زنانه" />
          <Womens />
        </Grid>
      </LazyLoad>
      <LazyLoad height={365}>
        <Grid container>
          <Title title="پرفروش های بچگانه" />
          <Kids />
        </Grid>
      </LazyLoad>
    </>
  );
}
