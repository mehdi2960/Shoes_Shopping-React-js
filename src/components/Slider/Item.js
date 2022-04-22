import React from "react";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./item.styles";

export default function Item({ item }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rightSlider}>
        <img src={item.image} alt="" className={classes.image} />
      </div>
      <div className={classes.leftSlider}>
        <Typography style={{ color: "#fff",marginBottom:10 }} variant="h5">
          {item.title}
        </Typography>
        <Typography style={{ color: "#fff" }} variant="subTitle2">
          {item.subTitle}
        </Typography>
        <Typography style={{ color: "#fff" }} variant="body2">
          {item.price} تومان
        </Typography>
      </div>
      <div className={classes.discount}>
        <Typography style={{ color: "#fff" }} variant="subTitle2">
          {item.discount}% تخفیف
        </Typography>
      </div>
      <div className={classes.redmore}>
        <Button color="primary" variant="text">مشاهده جزییات</Button>
      </div>
    </div>
  );
}
