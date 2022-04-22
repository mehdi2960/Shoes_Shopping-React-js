import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  root:{
    width:"100%",
    height:430,
    backgroundColor:"#011a1d",
    // borderWidth:1,
    // borderStyle:"solid",
    // borderColor:"#6e7f9daa",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    position:"relative",
    boxShadow:"0px 0px 2px #504c4c",
    [theme.breakpoints.down('xs')]:{
      height:300,
      width:"95%",
      margin:'auto',
    }
  },
  image:{
    width:"70%",
    [theme.breakpoints.down('xs')]:{
      width:130,
      paddingLeft:15,
      paddingRight:15,
    }
  },
  rightSlider:{
    width:220,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    [theme.breakpoints.down('xs')]:{
      flex:2
     }
  },
  leftSlider:{
    flex:1,
    [theme.breakpoints.down('xs')]:{
     flex:3
    }
  },
  discount:{
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    background: '#811c6b',
    borderBottomRightRadius: 100,
    width:110
  },
  redmore:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 10,
    borderBottomRightRadius: 100,
  }
}));
