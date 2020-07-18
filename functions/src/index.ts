import * as functions from 'firebase-functions';
const express = require('express');

const app = express();

app.get('/timestamp', (request: any, response: any)=>{
response.send(`${Date.now()}`)
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const nodejsapp = functions.https.onRequest(app);
