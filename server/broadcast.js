'use strict'

const M = require('./../server/schemas.js');
const Send = require('./../server/send.js');
const Twilio = require('./../server/twilio.js');

/* 
  Sends given message to user, with events if type is 
  "upcomingEvents" */
function processMessage(req, res) {
  let type = req.query.type;
  let message = decodeURIComponent(req.query.message);
  if (type == "message") {
    M.User.find({}, (err, result) => {
      let counter = 0;
      for(let i = 0; i<result.length; i++){
        if(result[i].notifications !== "off"){
          let uid = {
            _id: result[i].id,
            phoneNumber: result[i].phoneNumber,
          }
          uid.mid = (result[i].mid) ? result[i].mid : null;
          Send.text(uid, message, (error) => {
            if (error) {
              console.log('Error with send via messenger, sending sms');
              Twilio.sendSms(uid.phoneNumber, message, () => {
                console.log('Sms sent');
              });
            }
          });
          counter++;
        }
      }
      res.send("People reached: " + counter)
    })
  } else if (type == "upcomingEvents") {
    console.log('5');
    M.User.find({}, (err, result) => {
      let counter =  0;
      for(let i = 0; i<result.length; i++){
        if(result[i].notifications !== "off"){
          let uid = {
            _id: result[i].id,
            phoneNumber: result[i].phoneNumber,
          }
          uid.mid = (result[i].mid) ? result[i].mid : null;
          Send.allEvents(uid, message);
          counter++;
        }
      }
      res.send("People reached: " + counter)
    })
  }
}

module.exports = {
  processMessage: processMessage
}
