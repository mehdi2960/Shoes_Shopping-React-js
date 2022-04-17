import React from "react";
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./index.styles";
import kingImage from "../../../assets/images/large.png";
import MenuProfile from "./MenuProfile";
import CartButton from "./CartButton";

export default function Desktop() {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={classes.root}>
      <div className={classes.brandDiv}>
        <img src={kingImage} alt="فروشگاه کفش" className={classes.brandImg} />
      </div>
      <div className={classes.menuDiv}>
        <div className={path==='/'?classes.inactiveMenuDive:null}>
          <Button
            className={path === "/" ? classes.activeMenu : classes.inactiveMenu}
            component={Link}
            to="/"
            style={{ color: "#fff" }}
          >
            صفحه اصلی
          </Button>
        </div>
        <div className={path==='/products'?classes.inactiveMenuDive:null}>
          <Button
            className={
              path === "/products" ? classes.activeMenu : classes.inactiveMenu
            }
            component={Link}
            to="/products"
            style={{ color: "#fff" }}
          >
            محصولات
          </Button>
        </div>
        <div className={path==='/faq'?classes.inactiveMenuDive:null}>
          <Button
            className={
              path === "/faq" ? classes.activeMenu : classes.inactiveMenu
            }
            component={Link}
            to="/faq"
            style={{ color: "#fff" }}
          >
            سوالات پر تکرار
          </Button>
        </div>
        <div className={path==='/blog'?classes.inactiveMenuDive:null}>
          <Button
            className={
              path === "/blog" ? classes.activeMenu : classes.inactiveMenu
            }
            component={Link}
            to="/blog"
            style={{ color: "#fff" }}
          >
            بلاگ
          </Button>
        </div>
        <div className={path==='/contact'?classes.inactiveMenuDive:null}>
          <Button
            className={
              path === "/contact" ? classes.activeMenu : classes.inactiveMenu
            }
            component={Link}
            to="/contact"
            style={{ color: "#fff" }}
          >
            تماس با ما
          </Button>
        </div>
      </div>
      <div className={classes.leftDivMenu}>
       <MenuProfile/>
       <CartButton/>
      </div>
    </div>
  );
}
