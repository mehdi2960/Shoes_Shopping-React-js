import React, { useState ,useEffect} from "react";
import { Modal, Typography, Button } from "@material-ui/core";
import useStyles from "./index.styles";
import ReactCodeInput from "react-code-input";

export default function CodeModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [counter, setCounter] = useState(10);
useEffect(() => {
  setInterval (() => {
    setCounter((oldCounter)=>(oldCounter===0?0:oldCounter-1))
  },1000)
}, [])

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
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
        {counter !==0 ?(
              <Typography variant="body2" className={classes.divText}>
                  {counter} ثانیه تا پایان اعتبار کد
              </Typography>
           ):
           <Button variant="text" color="primary">
             <Typography variant="body2" className={classes.counterText}>درخواست مجدد کد</Typography>
           </Button>
           }
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          className={classes.button}
        >
          تایید کد
        </Button>
        <Button
          classes={{ label: classes.buttonLable }}
          className={classes.button}
          variant="text"
          color="primary"
          fullWidth
        >
          اصلاح شماره موبایل
        </Button>
        <Button
          classes={{ label: classes.buttonLable }}
          className={classes.button}
          variant="text"
          color="primary"
          fullWidth
        >
          ورود به سایت
        </Button>
      </div>
    </Modal>
  );
}
