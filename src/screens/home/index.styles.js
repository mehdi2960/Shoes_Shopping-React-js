import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  topGrid:{
    marginTop:15,
    marginBottom:15,
    [theme.breakpoints.up('md')]:{
      height:500
    }
  },
  sliderGrid:{
    height:450,
    padding:5,
    [theme.breakpoints.down('xs')]:{
      height:332
    }
  },
  catGrid:{
    padding:10,
    paddingRight:0,
    [theme.breakpoints.down('xs')]:{
      width:"97%"
    }
  },
}));
