import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  root: {
    backgroundColor: "#1a222a",
    width: 300,
    height: "auto",
    margin: "auto",
    marginTop: 80,
    padding: 15,
    "&:focus": {
      outline: "none",
    },
    borderRadius: 5,
    outline: "none",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  rootSingUp: {
    backgroundColor: "#1a222a",
    width: 500,
    height: "auto",
    margin: "auto",
    marginTop: 80,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  borderRadius: 5,
  outline: "none",
  inputContainer: {
    backgroundColor: "#2a3a48",
    borderRadius: 5,
    border: "1px solid #203d75",
    marginBottom: 10,
  },
  input: {
    padding: 10,
    textAlign: "right",
    color: "#FFF",
  },
  button: {
    // marginBottom: 8,
    color: "#fff",
    fontSize: 12,
  },
  buttonLable: {
    justifyContent: "left",
  },
  formGrid: {
    paddingRight: 7,
    paddingLeft: 7,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  codeDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  divText: {
    color: "#dbc2c2c9",
    marginBottom: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
  },
  counterText: {
    color: "#fff",
    marginBottom: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    width:250
  },
}));
