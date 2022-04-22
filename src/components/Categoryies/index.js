import React from "react";
import useStyles from "./index.styles";
import S1 from "../../assets/images/S1.png";
import S3 from "../../assets/images/S3.png";
import S6 from "../../assets/images/S6.png";
import { Button, Typography } from "@material-ui/core";

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.catDiv}>
        <img src={S1} alt="" className={classes.image} />
        <Typography variant="h6" style={{color:"#fff"}}>کفش مردانه</Typography>
        <div className={classes.cat}>
          <Button variant="text" style={{fontSize:10,color:"#d32f2f"}}>مشاهده کفش ها</Button>
        </div>
      </div> 
      <div className={classes.catDiv}>
        <img src={S3} alt="" className={classes.image} />
        <Typography variant="h6" style={{color:"#fff"}}>کفش زنانه</Typography>
        <div className={classes.cat}>
          <Button variant="text" style={{fontSize:10,color:"#d32f2f"}}>مشاهده کفش ها</Button>
        </div>
      </div> 
      <div className={classes.catDiv}>
        <img src={S6} alt="" className={classes.image} />
        <Typography variant="h6" style={{color:"#fff"}}>کفش بچگانه</Typography>
        <div className={classes.cat}>
          <Button variant="text" style={{fontSize:10,color:"#d32f2f"}}>مشاهده کفش ها</Button>
        </div>
      </div>
      <div className={classes.catDiv}>
        <img src={S1} alt="" className={classes.image} />
        <Typography variant="h6" style={{color:"#fff"}}>کفش اسپرت</Typography>
        <div className={classes.cat}>
          <Button variant="text" style={{fontSize:10,color:"#d32f2f"}}>مشاهده کفش ها</Button>
        </div>
      </div>
    </div>
  );
}
