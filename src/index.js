//IMPORT FILES HERE
import './css/base.scss';
import fetchRequests from './fetchRequests';
import domUpdates from './domUpdates';

import Destinations from './Destinations.js';
import Trip from './Trip.js';
import Traveler from './Traveler';

// QUERY SELECTORS HERE

// GLOBAL OBJECTS HERE

let destinations;
let allTrips;
let traveler;

// LOAD DATA MODEL HERE
window.addEventListener("load", loadAllDataFromAPI);

function loadAllDataFromAPI() {
  Promise.all([fetchRequests.getDestinations(), fetchRequests.getTrips(), fetchRequests.getTraveler(1)])
  .then(values => {
    destinations = generateAllDestinations(values[0]);
    allTrips = generateAllTrips(values[1], destinations);
    traveler = generateTraveler(values[2], allTrips);
    domUpdates.displayNameOfCurrentUser(traveler);
  });
}

function generateAllDestinations(allDestinations) {
  return new Destinations(allDestinations);
}

function generateAllTrips(tripData, destinationsObject) {
  return tripData.trips.map(trip => new Trip(trip, destinationsObject));
}

function generateTraveler(currentUser, allTripObjects) {
  return new Traveler(currentUser, allTripObjects);
}
