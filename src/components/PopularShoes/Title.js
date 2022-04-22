import React from 'react'
import { Button, Grid, Typography } from "@material-ui/core";
import useStyles from "./popular.styles";

export default function Title({title}) {
    const classes=useStyles();
  return (
   <Grid container item xs={12} className={classes.root} direction="row" justifyContent='space-between' alignItems='center'>
       <Typography variant='h5' className={classes.title}>{title}</Typography>
       <Button variant='text' className={classes.btn}>مشاهده همه</Button>
   </Grid>
  )
}
