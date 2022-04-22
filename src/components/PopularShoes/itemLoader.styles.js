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
  imageLoader:{
    // width:"100%",
    backgroundColor:"rgba(50,53,134,0.28)",
    borderRadius:5
  },
  textLoader:{
    width:"70%",
    backgroundColor:"rgba(50,53,134,0.28)",
    marginTop:10,
  },
  subTitleLoader:{
    width:"90%",
    backgroundColor:"rgba(50,53,134,0.28)",
    marginTop:5,
  },
  priceLoader:{
    width:"50%",
    backgroundColor:"rgba(50,53,134,0.28)",
    marginTop:5,
  },
}));
