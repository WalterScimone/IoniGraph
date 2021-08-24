const admin = require('firebase-admin');

const serviceAccount = require('..credentials.json'); // you need your own json file from firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  //databaseURL: 'https://tobeadded.firebaseio.com',
});
