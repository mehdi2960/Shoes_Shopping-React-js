import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  titleDiv: {
    paddingBottom: 10,
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      width: 80,
      backgroundColor: "#5c0a23",
      height: 2,
      borderRadius: 4,
      bottom:0
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: 120,
      backgroundColor: "#f93327",
      height: 2,
      borderRadius: 4,
      bottom:0

    },
  },
}));
