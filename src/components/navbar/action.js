import {  publicGet } from "../../utils/apiCaller";


  export const getSupplierInfo = (walletId) => async dispatch => {

    publicGet(`supplier/${walletId}`)
      .then(response => {
        dispatch({type:"SUPPLIER_INFO",data: response.data.data});
      })
      .catch(error => {
        // dispatch(updateFail());
        console.log(`error: `, error);
      });
  };