import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  img: {
    maxWidth:'100%',
    minWidth:'100%',
  },
  square:{
    height:'185px',
    width:'50px'
  }
}));


export function ProductImage(props){
     let imageUrl = "";
     const classes = useStyles();
     if(props.productDescriptorId){
       imageUrl = "https://d3ty40hendov17.cloudfront.net/device-pictures/"+ props.productDescriptorId+".png";
     }
     return(
       <div className={classes.square}>
       <img className={classes.img}
         src={ imageUrl }
         alt="new"
       />
       </div>
       );
}
