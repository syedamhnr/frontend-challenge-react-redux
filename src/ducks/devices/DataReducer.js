// Place reducers here.
import * as actionTypes from './Types';


export default function DataReducer(state , action){
  switch (action.type) {

    case actionTypes.LOAD_DATA_SUCCESS:
      if(action.data) {

        return {
          ...state,
          data: action.data[0].data.concat(action.data[1].data),
          descriptorIdArr:action.data[0].data.concat(action.data[1].data).map((item)=>item.descriptorId)
        };
      }else
        return state;
    case actionTypes.LOAD_DATA_FAILURE: {
      return {
        ...state,
        error:"Error retrieving data"}
    }
    case actionTypes.POLL_DATA_SUCCESS:{
      return {
        ...state,
        descriptorIdArr:action.data[0].data.concat(action.data[1].data)
      }
    }
    case actionTypes.FILTER_APPLIED:{
      return {
        ...state ,
        filterValue : action.filterValue};
    }
    default:
      return state || {};

  }
}
