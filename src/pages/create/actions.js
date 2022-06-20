import { publicPost, publicGet } from "../../utils/apiCaller";

export const createAddon = (data) => async dispatch => {
   
    return publicPost(`addons`, data)
      .then(response => {
        // dispatch(updateSuccess());
        console.log(`response: `, response)
      })
      .catch(error => {
        // dispatch(updateFail());
        console.log(`error: `, error);
      });
  };
  export const getAddon = (data) => async dispatch => {
    
    // return publicPost(`addons`, data)
    return publicGet(`addons`)
      .then(response => {
        // dispatch(updateSuccess());
        console.log(`response: `, response)
      })
      .catch(error => {
        // dispatch(updateFail());
        console.log(`error: `, error);
      });
  };

  export const getCategory = (data) => async dispatch => {
    console.log(`createAddon data: `, data)
    // return publicPost(`addons`, data)
    return publicGet(`addons/categories`)
      .then(response => {
        // dispatch(updateSuccess());
        console.log(`response: `, response.data.data);
        return response.data.data;
      })
      .catch(error => {
        // dispatch(updateFail());
        console.log(`error: `, error);
      });
  };