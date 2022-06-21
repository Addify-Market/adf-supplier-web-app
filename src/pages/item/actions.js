import {  publicGet } from "../../utils/apiCaller";


  export const getAddonInfo = (addonId) => async dispatch => {
    //console.log("addonidgetAddon",addonId);
    
    publicGet(`addons/${addonId}`)
      .then(response => {
          
        dispatch({type:"ADDON_INFO",data: response.data.data});
      })
      .catch(error => {
        // dispatch(updateFail());
        console.log(`error: `, error);
      });
  };