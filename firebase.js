const admin = require('firebase-admin');
const functions = require('firebase-functions');

const Firebase = admin.initializeApp(functions.config().firebase);

export default Firebase
