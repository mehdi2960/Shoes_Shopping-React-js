import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  root: {
    width: 230,
    height: 270,
    backgroundColor: "#131a21",
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#3d495caa",
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position:"relative",
    padding:12,
    cursor:"pointer",
    marginBottom:25
  },
  image: {
    width: "60%",
    transition:".5s",
    "&:hover":{
        transform:"scale(1.4)",
        transition:".5s"
    }
  },
  title: {
    color: "#fff",
    marginTop: 25,
  },
  subTitle: {
    color: "#9e9e9e",
    marginTop: 10,
  },
  pointDiv:{
      position:"absolute",
      right:3,
      top:3,
    //   width:30,
    //   height:30,
    padding:3,
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#102344",
      borderWidth:1,
      borderStyle:"solid",
      borderRadius:50,
  },
  point:{
      color:"#fff"
  }
}));
