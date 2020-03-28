const express = require('express');
const Ongs = require('./controllers/OngController');
const Incidents = require('./controllers/IncidentController');
const Profile = require('./controllers/ProfileController');
const Session = require('./controllers/SessionController');

const routes = express.Router();

/** LOGIN ROUTES */
routes.post('/session', Session.create);

/** ONGS ROUTES */
routes.get('/ongs', Ongs.index);
routes.post('/ongs', Ongs.create);

/**INCIDENTS ROUTES */
routes.get('/incidents', Incidents.index);
routes.post('/incidents', Incidents.create);
routes.delete('/incidents/:id', Incidents.delete);

/** PROFILE ROUTES */

routes.get('/profile', Profile.index);


module.exports = routes;