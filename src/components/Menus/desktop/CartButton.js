import React, { useState } from "react";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Button, Fade, Typography } from "@material-ui/core";
import useStyles from "./cartbutton.styles";
import CartItemContetn from "./CartItemContetn";

export default function CartButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const cartContent = document.getElementById("cartContent");

  //   document.addEventListener("click", function (event) {
  //     const isClickTnside = cartContent.contains(event.target);

  //     if (!isClickTnside) {
  //       setOpen(false);
  //     }
  //   });
  // }, []);

  return (
    <div className={classes.root} onMouseEnter={() => setOpen(true)} onMouseLeave={()=>setOpen(false)}>
      <div>
        <ShoppingBasket className={classes.img} />
        <div className={classes.badge}>
          <Typography
            variant="subtitle2"
            style={{ color: "#fff", fontSize: 10, fontWeight: 400 }}
          >
            2
          </Typography>
        </div>
      </div>

      <Fade in={open}>
        <div className={classes.overlayCartContent}>
          <div className={classes.cartItem}>
            <CartItemContetn />
            <CartItemContetn />
            <CartItemContetn />
            <CartItemContetn />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 17,
                marginBottom: 10,
              }}
            >
              <Typography variant="h6" color="primary">
                قیمت کل :
              </Typography>
              <Typography>500,000</Typography>
            </div>
            <Button fullWidth size="small" variant="contained" color="primary">
              نمایش سبد خرید
            </Button>
          </div>
        </div>
      </Fade>
    </div>
  );
}
