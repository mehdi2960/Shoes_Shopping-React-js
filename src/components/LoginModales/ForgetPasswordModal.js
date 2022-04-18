import React, { useState, useContext } from "react";
import {
  Modal,
  TextField,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "./index.styles";
import { LoginContext } from "../../contexts/LoginContext";
import { CODE } from "../../constants/ActionTypes";

const makeTextFieldStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
});

export default function ForgetPasswordModal() {
  const { state, dispatch } = useContext(LoginContext);
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  const underLineStyles = makeTextFieldStyles();
  const forgetPassword = () => {
    localStorage.setItem('loginCodeType','forgetPassword')
    dispatch({ type: CODE });
  };
  return (
    <Modal
      open={state.forgetPassword}
      onClose={() => dispatch({ type: "closeAll" })}
    >
      <div className={classes.root}>
        <Typography variant="body2" style={{ color: "#FFF", marginBottom: 7 }}>
          تلفن همراه:
        </Typography>
        <TextField
          classes={{ root: classes.inputContainer }}
          variant="filled"
          fullWidth
          size="small"
          inputProps={{ className: classes.input }}
          InputProps={{ classes: underLineStyles }}
        />
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          className={classes.button}
        >
          فراموشی رمز عبور
        </Button>
        <Button
          classes={{ label: classes.buttonLable }}
          className={classes.button}
          variant="text"
          color="primary"
          fullWidth
        >
          بازگشت به فرم ورود
        </Button>
        <Button
          classes={{ label: classes.buttonLable }}
          className={classes.button}
          variant="text"
          color="primary"
          fullWidth
        >
          ثبت نام
        </Button>
      </div>
    </Modal>
  );
}
