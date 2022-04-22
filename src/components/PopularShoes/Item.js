import React from 'react'
import { Typography } from '@material-ui/core';
import useStyles from "./item.styles ";

export default function Item({image}) {
    const classes=useStyles();
  return (
    <div className={classes.root}>
        <img src={image} alt="" className={classes.image}/>
        <Typography variant='h5' className={classes.title}>کفش اول</Typography>
        <Typography variant='body2' className={classes.subTitle}>زیر عنوان کفش است</Typography>
        <Typography variant='body2' className={classes.subTitle}>70,000 تومان</Typography>
        <div className={classes.pointDiv}>
         <Typography variant='body2' className={classes.point}>4.9</Typography>
        </div>
    </div>
  )
}
