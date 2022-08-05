const express = require('express');
const path = require('path');
const db = require('./db'); // program will auto-look for index.js file inside db

// calculate distance between two coordinates
const haversineDistance = require('haversine-distance');

const app = express();
app.use(express.json());

let cors = require('cors');
app.use(cors());

// add middleware
app.use(express.static(path.join(__dirname, './client/build'))); // create path to URL

// Sort data for N closest locations
const closestNLocations = (data, userLocation, n) => {
  data.map((el) => {
    el.distance = haversineDistance(userLocation, { lat: el.lat, lng: el.lng });
  });
  data.sort(function (a, b) {
    return a.distance - b.distance;
  });
  return data.slice(0, n);
};

app.get('/api/v1/closest', async (req, res) => {
  const userLocation = req.query.userLocation;
  const limit = req.query.limit || 10;
  const mode = req.query.mode || "";

  try {
    const data = await db('locations').select('*');
    res.status(200).send(closestNLocations(data, userLocation, limit));
  } catch (err) {
    console.log(err);
  }
});

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

module.exports = app;
