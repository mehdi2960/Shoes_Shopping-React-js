import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  root:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"relative"
  },
  img:{
    color:"#FFF",
    fontSize:28
  },
  badge:{
     backgroundColor:"red",
     width:20,
     height:20,
     borderRadius:"50%",
     display:"flex",
     alignItems:"center",
     justifyContent:"center",
     position:"absolute",
     right:17,
     bottom:18

  },
  cartItem:{
    width:250,
    // height:200,
    backgroundColor:"#fff",
    position:"absolute",
    top:"115%",
    right:"-60%",
    borderRadius:5,
    padding:10,
    zIndex:10,
  }
}));
