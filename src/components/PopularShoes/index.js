import React from 'react'
import { Grid } from '@material-ui/core';
import Title from "./Title";
import Mens from "./Mens";
import Womens from "./Womens";
import Kids from "./Kids";


export default function Index() {
  return (
    <Grid container>
        <Title title="پرفروش های مردانه"/>
        <Mens/>
        <Title title="پرفروش های زنانه"/>
        <Womens/> 
        <Title title="پرفروش های بچگانه"/>
        <Kids/>
    </Grid>
  )
}
