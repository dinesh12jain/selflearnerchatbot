
exports.handler = (event, context, callback) => {
    // TODO implement
    callback(null,
    {
        "dialogAction": {
    "type": "Close",
    "fulfillmentState": "Fulfilled",
    "message": {
      "contentType": "PlainText",
      "content": "Thanks for giving your name. My name is selflearnerbot"
    }
        }   
        });
};
