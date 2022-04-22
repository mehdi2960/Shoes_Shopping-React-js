import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  image:{
    width:90,
    height:69,
    marginRight:10
  },
  catDiv:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    width:"100%",
    backgroundColor:"#131a21",
    padding:14,
    borderRadius:5,
    marginBottom:10,
    borderWidth:1,
    borderStyle:"solid",
    borderColor:"#3d495caa",
    position:"relative",
    // [theme.breakpoints.down('xs')]:{
    //   marginTop:15,
    //   marginBottom:7,
    //   width:"100%",
    // }
  },
  cat:{
    position:"absolute",
    bottom:3,
    right:3,
  }
}));
