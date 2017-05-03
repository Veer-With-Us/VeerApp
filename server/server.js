// Get dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes

const api = require('./server/routes/api');

const app = express();

// Parsers for POST data

