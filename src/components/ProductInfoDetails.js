import React from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';


export  function ProductInfoDetails(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const infoKeys = ["resolutionHeight", "resolutionWidth"  ,"internalStorageSize"];
  const data = [];
  if(props.productInfo){
   for(let info in props.productInfo){
     if(infoKeys.includes(info)){
       data.push( <React.Fragment key={info}>
           {info.split(/(?=[A-Z])/).join(" ") } " : " {props.productInfo[info]}
           <br/>
         </React.Fragment>
       );
     }

   }
  }


  return (
    <React.Fragment>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {data}
      </Popover>
    </React.Fragment>
  );
}
