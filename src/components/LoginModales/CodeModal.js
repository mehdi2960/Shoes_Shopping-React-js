import React, { useState, useEffect, useContext } from "react";
import { Modal, Typography, Button } from "@material-ui/core";
import useStyles from "./index.styles";
import ReactCodeInput from "react-code-input";
import { LoginContext } from "../../contexts/LoginContext";
import { CHANGE_PASSWORD, FORGET_PASSWORD, SIGNIN, SIGNUP } from "../../constants/ActionTypes";

export default function CodeModal() {
  const { state, dispatch } = useContext(LoginContext);
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(10);
  const codeType=localStorage.getItem("loginCodeType");
  const sendCode=()=>{
    setCounter(10)
  }

  useEffect(() => {
    setInterval(() => {
      setCounter((oldCounter) => (oldCounter === 0 ? 0 : oldCounter - 1));
    }, 1000);
  }, []);

  const checkCode=()=>{
    if(codeType==='signUp'){
      //
    }else{
      dispatch({type:CHANGE_PASSWORD})
    }
  }

  return (
    <Modal open={state.code} onClose={() => dispatch({ type: "closeAll" })}>
      <div className={classes.root}>
        <Typography variant="body2" style={{ color: "#FFF", marginBottom: 7 }}>
          کد ارسالی به تلفن همراهتان را در کادر زیر وارد کنید:
        </Typography>
        {/* <TextField
          classes={{ root: classes.inputContainer }}
          variant="filled"
          fullWidth
          size="small"
          inputProps={{ className: classes.input }}
          InputProps={{ classes: underLineStyles }}
        /> */}
        <div className={classes.codeDiv} dir="ltr">
          <ReactCodeInput
            fields={5}
            inputStyle={{
              width: 30,
              height: 30,
              backgroundColor: "#2a3a48",
              margin: 5,
              border: "none",
              color: "#FFF",
              fontSize: 18,
              textAlign: "center",
            }}
          />
        </div>
        {counter !== 0 ? (
          <Typography variant="body2" className={classes.divText}>
            {counter} ثانیه تا پایان اعتبار کد
          </Typography>
        ) : (
          <Button variant="text" color="primary" onClick={sendCode}>
            <Typography variant="body2" className={classes.counterText}>
              درخواست مجدد کد
            </Typography>
          </Button>
        )}
        <Button
          disabled={counter===0}
          variant="outlined"
          color="primary"
          fullWidth
          className={classes.button}
          onClick={checkCode}
        >
          تایید کد
        </Button>
        <Button
          classes={{ label: classes.buttonLable }}
          className={classes.button}
          variant="text"
          color="primary"
          fullWidth
          onClick={()=>{dispatch({type:codeType==='signUp'?SIGNUP:FORGET_PASSWORD})}}
        >
          اصلاح شماره موبایل
        </Button>
        <Button
          classes={{ label: classes.buttonLable }}
          className={classes.button}
          variant="text"
          color="primary"
          fullWidth
          onClick={()=>dispatch({type:SIGNIN})}
        >
          ورود به سایت
        </Button>
      </div>
    </Modal>
  );
}
