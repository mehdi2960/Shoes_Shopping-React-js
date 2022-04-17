import React, { useState } from "react";
import {
  Modal,
  TextField,
  makeStyles,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import useStyles from "./index.styles";

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
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const underLineStyles = makeTextFieldStyles();
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
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
        >
          ثبت نام
        </Button>

        <Button
          classes={{ label: classes.buttonLable }}
          className={classes.button}
          variant="text"
          color="primary"
          fullWidth
        >
          قبلا ثبت نام کرده اید؟
        </Button>
      </div>
    </Modal>
  );
}
