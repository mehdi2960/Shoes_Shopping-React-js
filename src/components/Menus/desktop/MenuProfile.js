import React, { useState, useContext } from "react";
import { Button, Fade } from "@material-ui/core";
import Avatar from "../../../assets/images/avatar1.png";
import useStyles from "./menuprofile.styles";
import { LoginContext } from "../../../contexts/LoginContext";
import { SIGNIN, SIGNUP } from "../../../constants/ActionTypes";

export default function MenuProfile() {
  const { dispatch } = useContext(LoginContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <div onClick={() => setOpen(!open)}>
        <img src={Avatar} alt="" className={classes.profileImg} />
      </div>
      {/* {open ? ( */}
      <Fade in={open}>
        <div className={classes.content}>
          {localStorage.token ? (
            <>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                fullWidth
              >
                پروفایل{" "}
              </Button>
              <Button
                variant="text"
                size="small"
                color="primary"
                fullWidth
                style={{ marginTop: 5 }}
              >
                خروج
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                fullWidth
                onClick={() => {
                  setOpen(false);
                  dispatch({ type: SIGNIN });
                }}
              >
                ورود
              </Button>
              <Button
                variant="text"
                size="small"
                color="primary"
                fullWidth
                style={{ marginTop: 5 }}
                onClick={() => {
                  setOpen(false);
                  dispatch({ type: SIGNUP });
                }}
              >
                ثبت نام
              </Button>
            </>
          )}
        </div>
      </Fade>
      {/* ) : null} */}
    </div>
  );
}
