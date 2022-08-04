const express = require('express');
const path = require('path');
const db = require('./db'); // program will auto-look for index.js file inside db

// calculate distance between two coordinates
const haversineDistance = require('haversine-distance');

const app = express();
app.use(express.json());
const userLocation = { lat: 35.6581391, lng: 139.7277848 };

// add middleware
app.use(express.static(path.join(__dirname, './client/build'))); // create path to URL

// Return n closest locations
const closestNLocations = (data, b) => {
  data.map((el) => {
    el.distance = haversineDistance(userLocation, { lat: el.lat, lng: el.lng });
  });
  data.sort(function (a, b) {
    return a.distance - b.distance;
  });
  return data.slice(0, 10);
};

app.get('/test', (req, res) => {
  // test to see if it's working
  res.status(200).json({ status: 'success', message: 'From express' });
});

// return top ten closest locations from db
app.get('/getToilet', async (req, res) => {
  // const userLat = req.query.lat;
  // const userLng = req.query.lng;
  const data = await db('locations').select('*');

  res.status(200).send(closestNLocations(data, 10));
});

app.get('/getPrivate', async (req, res) => {
  // const userLat = req.query.lat;
  // const userLng = req.query.lng;
  const data = await db('locations')
    .select('*')
    .whereNotIn('type', ['publicToilet']);

  res.status(200).send(closestNLocations(data, 10));
});

app.get('/getPublic', async (req, res) => {
  // const userLat = req.query.lat;
  // const userLng = req.query.lng;
  const data = await db('locations')
    .select('*')
    .whereIn('type', ['publicToilet']);

  res.status(200).send(closestNLocations(data, 10));
});

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

module.exports = app;
