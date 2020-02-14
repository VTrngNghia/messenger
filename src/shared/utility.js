// import {hostDomain} from "./constants";

export let store = null;
export const setStore = _store => {
  store = _store;
};

export const updateObject = (oldObject, updatedProperties) => {
  const updatedObject = {
    ...oldObject,
    ...updatedProperties,
  };
  return updatedObject;
};

export const isEmpty = str => !str || str.trim() === "";

// export const sendHttpRequest = (path, method, headers, body) => {
//     console.log("Request:", {path, method, headers, body});
//     return new Promise((resolve, reject) => {
//         fetch(hostDomain + path, {
//             method,
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer " + store.getState().auth.token
//                 // ...headers
//             },
//             body
//         }).then(res => {
//             return Promise.all([res.status, res.json()]);
//         }).then(result => {
//             resolve(result);
//         }).catch(error => {
//             reject(error);
//         });
//     });
//     /**/
// };

export const isSuccessful = httpResponse => (
  httpResponse[0] >= 200
  && httpResponse[0] < 300);

export const addTokenPrefix = token => "Bearer " + token;
