import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  img: {
    color: "#FFF",
    fontSize: 28,
    cursor: "pointer",

  },
  badge: {
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 27,
    top: -4,
  },
  cartItem: {
    width: 250,
    // height:200,
    backgroundColor: "#fff",
    position: "absolute",
    top: "115%",
    right: "-11%",
    borderRadius: 5,
    padding: 10,
    zIndex: 10,
  },
  overlayCartContent: {
    // position: "absolute",
    // width: "100%",
    // height: "100%",
    // bottom: 0,
    // right: 0,
    // backgroundColor: "red",
    zIndex: 1,
  },
}));
