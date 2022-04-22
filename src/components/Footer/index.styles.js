import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  root: {
    height: 240,
    backgroundColor: "#131a21",
    padding: 20,
    [theme.breakpoints.down('xs')]:{
      height: 'auto',
    }
  },
  item: {
    [theme.breakpoints.down('xs')]:{
      marginBottom:15
    }
  },
}));
