import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ProductTable} from "../components/ProductTable";
import {loadData,onFilterChangedForOS,pollData} from "../ducks/devices/Actions";
import CircularProgress from "@material-ui/core/CircularProgress";

class OverviewContainer extends Component {
  constructor(props) {
    super(props);

  }
  onFilterChange = (value) => {
    const {onFilterChangedOS} = this.props;
    if(value.toLowerCase() === 'android' || value.toLowerCase() === "ios" || value === ""){
      onFilterChangedOS(value);
    }
  }

  componentDidMount() {
    const {onLoad , onPollData} = this.props;
    onLoad();
    this.pollDataInterval = setInterval(()=>{
       onPollData();
    }, 60*1000)
  }
  componentWillUnmount() {
    clearInterval(this.pollDataInterval);
    this.pollDataInterval = null;
  }

  render() {
  let deviceList  = this.props.devices && this.props.devices.length > 0 ?
  (<ProductTable devices={this.props.devices} onFilterChanged={this.onFilterChange}
                 filterValue={this.props.filterValue} availableDevice = {this.props.descriptorId}/> )
  : <CircularProgress color="inherit" size={100} variant="indeterminate" />;

    return (
      <div>
        {this.props.error && this.props.error !== null && this.props.error !== "" ? this.props.error : deviceList}
      </div>
    )

  }
}

OverviewContainer.propTypes = {};

const mapStateToProps = (state) => ({
  devices : state.devices.data,
  filterValue : state.devices.filterValue,
  error : state.devices.error,
  descriptorId : state.devices.descriptorIdArr
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad : () => dispatch(loadData()),
    onFilterChangedOS : (value) => dispatch(onFilterChangedForOS(value)),
    onPollData : () => dispatch(pollData())

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewContainer);
