import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./itemLoader.styles";
import S1 from "../../assets/images/S1.png";
import Skeleton from "@material-ui/lab/Skeleton";

export default function ItemLoader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton
        className={classes.imageLoader}
        variant="rect"
        width={150}
        height={120}
        animation="wave"
      />
      <Skeleton
        className={classes.textLoader}
        variant="text"
        // // width={210}
        // height={190}
        animation="wave"
      />
       <Skeleton
        className={classes.subTitleLoader}
        variant="text"
        // // width={210}
        // height={190}
        animation="wave"
      /> 
      <Skeleton
        className={classes.priceLoader}
        variant="text"
        // // width={210}
        // height={190}
        animation="wave"
      />
      {/* <img src={S1} alt="" className={classes.image} />
        <Typography variant="h5" className={classes.title}>
          کفش اول
        </Typography>
        <Typography variant="body2" className={classes.subTitle}>
          زیر عنوان کفش است
        </Typography>
        <Typography variant="body2" className={classes.subTitle}>
          70,000 تومان
        </Typography>
        <div className={classes.pointDiv}>
          <Typography variant="body2" className={classes.point}>
            4.9
          </Typography>
        </div> */}
    </div>
  );
}
