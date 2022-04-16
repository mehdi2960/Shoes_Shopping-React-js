import { Typography } from "@material-ui/core";
import React from "react";
import ShoesIcon from "../../../assets/images/shoes.png";
import DeleteIcon from "@material-ui/icons/Delete";

export default function () {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor:"#efefef",
        borderBottomWidth:1,
        borderBottomStyle:"solid",
        paddingBottom:8
      }}
    >
      <div style={{display:"flex",alignItems:"center", justifyContent: "space-between",}}>
        <img src={ShoesIcon} style={{ width: 60 }} />
        <Typography color="primary" variant="body2" style={{fontWeight:500,color:"#000"}}>
          کفش آدیداس
        </Typography>
        <Typography color="primary" variant="body2">
          300,00,00
        </Typography>
      </div>
      <DeleteIcon style={{ color: "red" ,fontSize:18}} />
    </div>
  );
}
