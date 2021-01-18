//IMPORT FILES HERE
import './css/base.scss';
import fetchRequests from './fetchRequests';
import domUpdates from './domUpdates';

import Destinations from './Destinations.js';
import Trip from './Trip.js';
import Traveler from './Traveler';

// QUERY SELECTORS HERE
const reserveTripButtons = document.querySelectorAll('.reserve-button');
const calculateTripCostButton = document.querySelector('.calculate-cost');
const submitTripRequestButton = document.querySelector('.submit');
const tripStartDateInputField = document.querySelector('#date');
const tripDurationDropDownMenu = document.querySelector('#duration');
const numberOfTravelersDropDownMenu = document.querySelector('#travelers');

// ADD EVENT LISTENERS HERE


// GLOBAL OBJECTS HERE

let destinations;
let allTrips;
let traveler;

// LOAD DATA MODEL HERE
window.addEventListener("load", loadAllDataFromAPI);

function loadAllDataFromAPI() {
  Promise.all([fetchRequests.getDestinations(), fetchRequests.getTrips(), fetchRequests.getTraveler(9)])
  .then(values => {
    destinations = generateAllDestinations(values[0]);
    allTrips = generateAllTrips(values[1], destinations);
    traveler = generateTraveler(values[2], allTrips);
    domUpdates.displayNameOfCurrentUser(traveler);
    displayAllUserTrips(traveler);
    domUpdates.displayTotalSpentForTripsInAYear(2021, traveler);
    displayAllPossibleDestinations(destinations);
  });
}


function displayAllPossibleDestinations(allDestinations) {
  allDestinations.allDestinationData.forEach(destination => domUpdates.displayDestination(destination.id, destination.destination, destination.image, destination.alt))
}

function displayAllUserTrips(user) {
  user.trips.forEach(trip => domUpdates.displayUserTrip(trip.destinationName, trip.numberOfTravelers, trip.duration, trip.date, trip.tripImage, trip.imageAltText, trip.status))
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
