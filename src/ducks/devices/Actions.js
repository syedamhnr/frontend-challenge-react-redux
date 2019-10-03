import * as actionTypes from './Types';
import {Api} from "./api"


let api = new Api();
//Load-data thunk action
const loadDataSuccess = (payload) => ({
  type: actionTypes.LOAD_DATA_SUCCESS,
  data : payload,

});

const loadDataFailure = (payload) => ({
  type: actionTypes.LOAD_DATA_FAILURE,
  data: payload
});

export const loadData = (payload) => (dispatch) => {
  return api.getAllData(payload).then(
    (data) =>  dispatch(loadDataSuccess(data)),
    (error) => {
      dispatch(loadDataFailure(error));
      throw error;
    },
  );
};
//------------------------------


export const onFilterChangedForOS = (payload) => ({
  type: actionTypes.FILTER_APPLIED,
  filterValue: payload

});

//poll-data thunk action
const pollDataSuccess = (payload) => ({
  type: actionTypes.POLL_DATA_SUCCESS,
  data : payload,

});

const pollDataFailure = (payload) => ({
  type: actionTypes.POLL_DATA_FAILURE,
  data: payload
});

export const pollData = (payload) => (dispatch) => {
  return api.pollData(payload).then(
    (data) =>  dispatch(pollDataSuccess(data)),
    (error) => {
      dispatch(pollDataFailure(error));
      throw error;
    },
  );
};
