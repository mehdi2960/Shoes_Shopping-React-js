import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  root:{
    position:"relative"
  },
  profileImg:{
    width:30,
    borderWidth:1,
    borderColor:"#000",
    borderStyle:"solid",
    borderRadius:4,
    cursor:"pointer",
    transition:'0.5s',
    '&:hover':{
      opacity:0.5,
      transition:'0.5s'
    }
  },
  content:{
    width:200,
    backgroundColor:"#fff",
    position:"absolute",
    left:"-380%",
    borderRadius:5,
    padding:15
  }
}));
