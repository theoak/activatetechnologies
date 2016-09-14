'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function(connection){

  let userSchema = new Schema({
    mid: String,
    firstName: String,
    lastName: String,
    profilePic: String,
    locale: String,
    gender: String,
    notifications: String,
    signedUpDate: Date,
    conversationLocation: {
      conversationName: String,
      nodeId: String,
      nodeType: String,
      userErrorText: String
    }
  })

  let eventSchema = new Schema({
    name: String,
    strapline: String,
    image_name: String,
    image_url: String,
    latlong: String,
    price: Number,
    when: Date,
    desc: String,
    joined: [{
      uid: String,
      joinDate: Date
    }],
    capacity: Number
  })

  let analyticsSchema = new Schema({
    name: String,
    total: Number,
    activity: [{
      uid: String,
      time: Date,
      gid: String,
      amount: Number
    }]
  })

  let conversationsSchema = new Schema({
    name: String,
    next: Array
  })


  if (!connection.models.User) {
    connection.model('User', userSchema);
  }
  if (!connection.models.Event) {
    connection.model('Event', eventSchema);
  }
  if (!connection.models.Analytics) {
    connection.model('Analytics', analyticsSchema)
  }
  if (!connection.models.Conversation) {
    connection.model('Conversation', conversationsSchema)
  }

  module.exports = connection;
}
