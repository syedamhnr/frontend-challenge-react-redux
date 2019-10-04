import React from "react";
import {ProductImage} from "../components/ProductImage";
import {ProductInfoDetails} from "../components/ProductInfoDetails";
import {Table,TableBody,TableCell,TableHead,TablePagination,TableRow,Paper,TableFooter} from "@material-ui/core";
import {FilterComponent} from "./FilterComponent";






export class  ProductTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page:0,
      rowsPerPage:10
    }
  }



  handleChangePage = (event,newPage) =>{

    this.setState({
      page:newPage
    })
  };

  handleChangeRowsPerPage = (event) =>{
    this.setState({
      page:0,
      rowsPerPage:(+event.target.value)
})
  }
  render() {
     let rows = this.props.devices;
     let tableBodyData = [];
    rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row) => {
         if (this.props.availableDevice && this.props.availableDevice.includes(row.descriptorId)) {
           if (row.os.toLowerCase() === this.props.filterValue || this.props.filterValue === "" || this.props.filterValue === undefined) {
             tableBodyData.push(<TableRow key={row.descriptorId + row.dataCenterId} hover={true}>
                 <TableCell>
                   {row.name}
                 </TableCell>
                 <TableCell align="center">{row.modelNumber}</TableCell>
                 <TableCell align="center">{row.os}</TableCell>
                 <TableCell align="center">{row.osVersion}</TableCell>
                 <TableCell align="center">{row.screenSize}</TableCell>
                 <TableCell align="center">
                   <ProductImage productDescriptorId={row.descriptorId}/>
                 </TableCell>
                 <TableCell>
                   <ProductInfoDetails productInfo={row}/>
                 </TableCell>
               </TableRow>
             )
           }
         }
       }
     );
     return (
       <Paper >
         <div style={{maxHeight:'inherit', overflow:'auto'}}>
         <Table stickyHeader>

           <TableHead>
             <TableRow>
               <TableCell>Name</TableCell>
               <TableCell align="center">Model Number</TableCell>
               <TableCell align="center">os
                 <FilterComponent onFilterChanged={this.props.onFilterChanged}/>
               </TableCell>
               <TableCell align="center">os Version</TableCell>
               <TableCell align="center">Screen Size</TableCell>
               <TableCell align="center">Device Image</TableCell>
               <TableCell>Product Information</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {tableBodyData}
           </TableBody>
         </Table>
       </div>

               <TablePagination
                 rowsPerPageOptions={[10, 25, 100]}
                 component="div"
                 count={rows.length}
                 rowsPerPage={this.state.rowsPerPage}
                 page={this.state.page}
                 backIconButtonProps={{
                   'aria-label': 'previous page',
                 }}
                 nextIconButtonProps={{
                   'aria-label': 'next page',
                 }}
                 onChangePage={this.handleChangePage}
                 onChangeRowsPerPage={this.handleChangeRowsPerPage}

               />



       </Paper>
     );
   }
}
