const express = require('express');
const path = require('path');
const db = require('./db'); // program will auto-look for index.js file inside db

const app = express();
app.use(express.json());
const userLocation = { lat: 35.6581391, lng: 139.7277848 };

// calculate distance between two coordinates
const haversineDistance = require('haversine-distance');
const getDistance = (lngA, latA, lngB, latB) => {
  let latDiff = latA - latB;
  let lngDiff = lngA - lngB;

  return Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
};

// add middlewares
app.use(express.static(path.join(__dirname, './client/build'))); // create path to URL

app.get('/test', (req, res) => {
  // test to see if it's working
  res.status(200).json({ status: 'success', message: 'From express' });
});

// return top ten closest locations from db
app.get('/getToilet', async (req, res) => {
  // const userLat = req.query.lat;
  // const userLng = req.query.lng;
  const data = await db('locations').select('*');

  data.map((el) => {
    el.distance = haversineDistance(userLocation, { lat: el.lat, lng: el.lng });
  });
  data.sort(function (a, b) {
    return a.distance - b.distance;
  });
  const topTenLocations = data.slice(0, 10);
  res.status(200).send(topTenLocations);
});

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

module.exports = app;
