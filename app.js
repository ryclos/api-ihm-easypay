// Modules imports
const express = require('express');

// Routes
const easypayRoute = require('./src/routes/easypayRoute');

// Application
const app = express();

// Application configuration
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Set routes
app.use('/api/osb-commercant', easypayRoute);

module.exports = app;