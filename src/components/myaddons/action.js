import {  privateGet } from "../../utils/apiCaller";


  export const getMyaddons = (supplierId) => async dispatch => {
    // return publicPost(`addons`, data)
     privateGet(`supplier/addons`,{supplierid:supplierId})
      .then(response => {
        dispatch({
          type:"GET_ADDONS",
          data: response.data.data
        })
      })
      .catch(error => {
        // dispatch(updateFail());
        console.log(`error: `, error);
      });
  };