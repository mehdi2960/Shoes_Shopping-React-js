import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./index.styles";
import TitleFooter from "../TitleFooter";

export default function Index() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="row">
      <Container maxWidth="lg">
          <Grid className={classes.root} container direction="row">
              <Grid className={classes.item} item lg={3} xs={12}>
                <TitleFooter title="فروشگاه کفش" />
                <Typography style={{ color: "#a1a1a1", marginTop: 10, fontSize: 12 }}>
                  تهران ، گیشا
                </Typography>
                <Typography style={{ color: "#a1a1a1", marginTop: 5, fontSize: 12 }}>
                  تلفن تماس : 09371282960
                </Typography>
              </Grid>
              <Grid className={classes.item} item lg={3} xs={12}>
                <TitleFooter title="ویژگی ها" />
                <Typography style={{ color: "#a1a1a1", marginTop: 10, fontSize: 12 }}>
                  ارسال رایگان
                </Typography>
                <Typography style={{ color: "#a1a1a1", marginTop: 5, fontSize: 12 }}>
                  ارسال برگشت محصول تا 7 روز
                </Typography>
                <Typography style={{ color: "#a1a1a1", marginTop: 5, fontSize: 12 }}>
                  کفش های برنده های اصل
                </Typography>
                <Typography style={{ color: "#a1a1a1", marginTop: 5, fontSize: 12 }}>
                  پایین تر از قیمت بازار
                </Typography>
              </Grid>
              <Grid className={classes.item} item lg={3} xs={12}>
                <TitleFooter title="برند ها" />
                <Typography style={{ color: "#a1a1a1", marginTop: 10, fontSize: 12 }}>
                  آدیداس
                </Typography>
                <Typography style={{ color: "#a1a1a1", marginTop: 10, fontSize: 12 }}>
                  نایکی
                </Typography>
                <Typography style={{ color: "#a1a1a1", marginTop: 10, fontSize: 12 }}>
                  پوما
                </Typography>
              </Grid>
              <Grid className={classes.item} item lg={3} xs={12}>
                <TitleFooter title="درباره ما" />
                <Typography style={{ color: "#a1a1a1", marginTop: 10, fontSize: 12 ,textAlign:"justify"}}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                  درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
                  نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                  خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </Typography>
              </Grid>
          </Grid>
      </Container>
    </Grid>
  );
}
