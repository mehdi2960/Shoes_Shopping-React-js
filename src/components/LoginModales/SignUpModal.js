import React, { useState ,useContext} from "react";
import {
  Modal,
  TextField,
  makeStyles,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import useStyles from "./index.styles";
import {LoginContext} from "../../contexts/LoginContext";
import { SIGNIN , CODE} from "../../constants/ActionTypes";

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

export default function SignUpModal() {
  const{state,dispatch}=useContext(LoginContext)
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  const underLineStyles = makeTextFieldStyles();
  const signUp=()=>{
    localStorage.setItem('loginCodeType','signUp')
     dispatch({type:CODE})
  }
  return (
    <Modal open={state.signup} onClose={() => dispatch({type:'closeAll'})}>
      <div className={classes.rootSingUp}>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <Typography
            variant="body2"
            style={{ color: "#FFF", marginBottom: 7 }}
          >
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
        </Grid>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <Typography
            variant="body2"
            style={{ color: "#FFF", marginBottom: 7 }}
          >
            نام و نام خانوادگی:
          </Typography>
          <TextField
            classes={{ root: classes.inputContainer }}
            variant="filled"
            fullWidth
            size="small"
            inputProps={{ className: classes.input }}
            InputProps={{ classes: underLineStyles }}
          />
        </Grid>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <Typography
            variant="body2"
            style={{ color: "#FFF", marginBottom: 7 }}
          >
            رمز عبور
          </Typography>

          <TextField
            classes={{ root: classes.inputContainer }}
            variant="filled"
            fullWidth
            size="small"
            inputProps={{ className: classes.input }}
            InputProps={{ classes: underLineStyles }}
          />
        </Grid>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <Typography
            variant="body2"
            style={{ color: "#FFF", marginBottom: 7 }}
          >
            تکرار رمز عبور:
          </Typography>

          <TextField
            classes={{ root: classes.inputContainer }}
            variant="filled"
            fullWidth
            size="small"
            inputProps={{ className: classes.input }}
            InputProps={{ classes: underLineStyles }}
          />
        </Grid>

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          className={classes.button}
          onClick={signUp}
        >
          ثبت نام
        </Button>

        <Button
          classes={{ label: classes.buttonLable }}
          className={classes.button}
          variant="text"
          color="primary"
          fullWidth
          onClick={()=>dispatch({type:SIGNIN})}
        >
          قبلا ثبت نام کرده اید؟
        </Button>
      </div>
    </Modal>
  );
}
