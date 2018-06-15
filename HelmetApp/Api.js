let requestPayload;
let responsePayload;
let messageEndpoint = 'http://localhost:3000/api/message';

function sendRequest(text, context) {
  // Build request payload
  var payloadToWatson = {};
  if (text) {
    payloadToWatson.input = {
      text: text
    };
  }
  if (context) {
    payloadToWatson.context = context;
  }

  // Built http request
  var http = new XMLHttpRequest();
  http.open('POST', messageEndpoint, true);
  http.setRequestHeader('Content-type', 'application/json');
  http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200 && http.responseText) {
      Api.setResponsePayload(http.responseText);
    }
  };

  var params = JSON.stringify(payloadToWatson);
  // Stored in variable (publicly visible through Api.getRequestPayload)
  // to be used throughout the application
  if (Object.getOwnPropertyNames(payloadToWatson).length !== 0) {
    Api.setRequestPayload(params);
  }

  // Send request
  http.send(params);
}

export const Api = {

  sendRequest: sendRequest,
  // The request/response getters/setters are defined here to prevent internal methods
  // from calling the methods without any of the callbacks that are added elsewhere.
  getRequestPayload: () => {
    return requestPayload;
  },
  
  setRequestPayload: (newPayloadStr) => {
    requestPayload = JSON.parse(newPayloadStr);
  },

  getResponsePayload: () => {
    return responsePayload;
  },

  setResponsePayload: (newPayloadStr) => {
    responsePayload = JSON.parse(newPayloadStr);
  }
}
