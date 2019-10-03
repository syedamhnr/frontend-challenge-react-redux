import React from "react";
import {TextField} from "@material-ui/core";




export class FilterComponent extends React.Component{


  render() {

    return(
      <TextField
      onKeyPress={(event)=>{
        if(event.key === 'Enter') {
          this.props.onFilterChanged(event.target.value);
         }
        }
      }
      placeholder={'Android/ios'}
      ></TextField>

    );
  }

}
