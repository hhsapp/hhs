var admin = require('firebase-admin')

var serviceAccount = require('../../fcmkeys/hhsapp-20948-firebase-adminsdk-ujp9y-624ac57e5d.json')
var serviceAccountDoc = require('../../fcmkeys/hhsdoctor-firebase-adminsdk-i2g6v-c8f8a9da4e.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://hhsapp-20948.firebaseio.com'
})
var otherApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccountDoc),
  databaseURL: 'https://hhsdoctor.firebaseio.com'
}, 'hhsDoctor')

export const sendMessage = (message) => {
  admin.messaging().send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response)
    })
    .catch((error) => {
      console.log('Error sending message:', error)
    })
}
export const sendMessageDoc = (message) => {
  otherApp.messaging().send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response)
    })
    .catch((error) => {
      console.log('Error sending message:', error)
    })
}
