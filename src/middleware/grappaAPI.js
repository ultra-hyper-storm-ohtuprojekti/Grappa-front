import axios from "axios";

export const CALL_API = "CALL_API";
export const CALL_API_AFTER_ACTION = "CALL_API_AFTER_ACTION";
const queue = {};

export const callApi = (action, store) => {
  const user = store.getState().get("auth").get("user").toJS();
  const token = store.getState().get("auth").get("token");
  axios({
    method: action.method,
    url: process.env.API_URL + action.url,
    data: action.data,
    headers: {
      "X-Access-Token": token,
      "X-Key": user.id,
    },
    responseType: action.responseType === undefined ? "json" : action.responseType,
  })
  .then(res => {
    store.dispatch({
      type: action.success,
      payload: res.data,
      sent: action.data,
      flashMessage: action.successMessage,
    });
  })
  .catch(err => {
    console.log("caugth error");
    store.dispatch({
      type: action.failure,
      error: err,
      flashMessage: {
        type: "error",
        title: "Error",
        body: err.data.message,
        // body: `Calling GrappaAPI produced an error on path ${action.url}.`,
      },
    });
  });
};

export const handleCallApi = store => next => action => {
  next(action);
  if (action.type === CALL_API) {
    callApi(action, store);
  } else if (action.type === CALL_API_AFTER_ACTION) {
    queue[action.after] = action;
  } else {
    console.log(action);
    if (queue[action.type] !== undefined) {
      const actionInQueue = queue[action.type];
      console.log("got after action");
      console.log(actionInQueue);
      actionInQueue.data.append("id", action.payload.id);
      console.log(actionInQueue);
      callApi(actionInQueue, store);
      queue[action.type] = undefined;
    }
  }
};
