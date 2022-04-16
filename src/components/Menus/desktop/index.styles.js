import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 60,
    // backgroundColor: "#000",
    padding:10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  brandDiv: {
    width: 165,
    marginTop: 10,
  },
  brandImg: {
    width: "90%",
  },
  menuDiv: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    paddingLeft: 50,
    height:"100%"
  },
  activeMenu: {
    color: theme.palette.text.primary
  },
  inactiveMenu: {
    color: theme.palette.text.inActiveMenu
  },
  inactiveMenuDive:{
      borderBottomColor:"#f93327",
      borderBottomWidth:1,
      borderBottomStyle:"solid",
      borderRadius:4,
  },
  leftDivMenu:{
      height:"100%",
      width:140,
      display:"flex",
      alignItems:"center",
      justifyContent:"space-around",
      paddingLeft:40,
      marginRight:20
  }
}));
