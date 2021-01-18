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
const tripStartDateSelection = document.querySelector('#date');
const tripDurationSelection = document.querySelector('#duration');
const numberOfTravelersSelection = document.querySelector('#travelers');
const allDestinationsSection = document.querySelector('.all-destinations');

// ADD EVENT LISTENERS HERE


// GLOBAL OBJECTS HERE

let destinations;
let allTrips;
let traveler;
let selectedDestination;

// LOAD DATA MODEL HERE
window.addEventListener("load", loadAllDataFromAPI);
allDestinationsSection.addEventListener('click', selectDestinationPriorToBooking)
calculateTripCostButton.addEventListener('click', calculateTotalCostOfTripToBeBooked)
tripStartDateSelection.addEventListener('click', domUpdates.disableSelectionOfPastDates())

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

function calculateTotalCostOfTripToBeBooked() {
  let tripToBeBooked = instantiateNewTripObject();
  console.log(tripToBeBooked);
  console.log(tripToBeBooked.calculateTotalTripCost());
  return tripToBeBooked.calculateTotalTripCost();
}

function instantiateNewTripObject() {
  let tripData = allTrips.find(trip => trip.destinationID === selectedDestination.id)
  let possibleTrip = new Trip(tripData, destinations);
  possibleTrip.userID = traveler.id;
  possibleTrip.numberOfTravelers = numberOfTravelersSelection.value;
  possibleTrip.date = tripStartDateSelection.value;
  possibleTrip.duration = tripDurationSelection.value;
  possibleTrip.status = 'pending';
  return possibleTrip;
}

function selectDestinationPriorToBooking() {
  selectedDestination = destinations.getDestinationById(parseInt(event.target.id));
  console.log(selectedDestination)
}

const displayAllPossibleDestinations = allDestinations => {
  allDestinations.allDestinationData.forEach(destination => domUpdates.displayDestination(destination.id, destination.destination, destination.image, destination.alt))
}

const displayAllUserTrips = user => {
  user.trips.forEach(trip => domUpdates.displayUserTrip(trip.destinationName, trip.numberOfTravelers, trip.duration, trip.date, trip.tripImage, trip.imageAltText, trip.status))
}


const generateAllDestinations = allDestinations => {
  return new Destinations(allDestinations);
}

const generateAllTrips = (tripData, destinationsObject) => {
  return tripData.trips.map(trip => new Trip(trip, destinationsObject));
}

const generateTraveler = (currentUser, allTripObjects) => {
  return new Traveler(currentUser, allTripObjects);
}
