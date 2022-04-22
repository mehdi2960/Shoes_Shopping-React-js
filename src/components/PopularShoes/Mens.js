import React,{useState,useEffect} from "react";
import { Grid } from "@material-ui/core";
import Item from "./Item";
import ItemLoader from "./ItemLoader";
import S1 from "../../assets/images/S1.png";
import S3 from "../../assets/images/S3.png";
import S4 from "../../assets/images/S4.png";
import S5 from "../../assets/images/S5.png";
import S6 from "../../assets/images/S6.png";


export default function Mens() {
  const [loading,setLoader]=useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  }, [])
  
  return (
    <Grid
      container
      item
      xs={12}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {
        loading ===true ? 
        (
        <>
          <ItemLoader/>
          <ItemLoader/>
          <ItemLoader/>
          <ItemLoader/>
          <ItemLoader/>
        </>
        ):(
        <>
          <Item image={S1}/>
          <Item image={S3}/>
          <Item image={S4}/>
          <Item image={S5}/>
          <Item image={S6}/>
        </>
        )
      }
    
    </Grid>
  );
}
