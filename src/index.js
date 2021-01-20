//IMPORT FILES HERE
const moment = require("moment")

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
const submitUsernameAndPassword = document.querySelector('.login-submit');
const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const mainPage = document.querySelector('.full-content-wrapper');
const loginForm = document.querySelector('.login-wrapper');


// ADD EVENT LISTENERS HERE
// window.addEventListener("load", loadAllDataFromAPI);
submitTripRequestButton.addEventListener('click', loadUpdatedTripsData)
allDestinationsSection.addEventListener('click', selectDestinationPriorToBooking)
calculateTripCostButton.addEventListener('click', displayTripCostEstimateMessage)
tripStartDateSelection.addEventListener('click', domUpdates.disableSelectionOfPastDates())
submitUsernameAndPassword.addEventListener('click', validateLoginForm)

// GLOBAL OBJECTS HERE
let destinations;
let allTrips;
let traveler;
let selectedDestination;

// LOAD DATA MODEL HERE
function loadAllDataFromAPI(id) {
  Promise.all([fetchRequests.getDestinations(), fetchRequests.getTrips(), fetchRequests.getTraveler(id)])
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

function validateLoginForm(event) {
  event.preventDefault(event);
  let userIDNumber = parseInt(usernameInput.value.toLowerCase().split('traveler')[1]);
  if (usernameInput.value) {
    if (!userIDNumber || userIDNumber < 1 || userIDNumber > 50 || passwordInput.value !== 'traveler2020') {
      domUpdates.displayLoginErrorMessage();
    } else {
      loginForm.style.display = 'none';
      mainPage.style.display = 'grid';
      loadAllDataFromAPI(userIDNumber);
    }
  }
}

function loadUpdatedTripsData() {
  let bookedTrip = instantiateNewTripObject();
  Promise.all([fetchRequests.postTrip(bookedTrip), fetchRequests.getTrips()])
  .then(values => {
    allTrips = generateAllTrips(values[1], destinations);
    updateTravelersTrips();
  })

  function updateTravelersTrips() {
    addPendingTripToTravelersTrips(bookedTrip);
    displayAllUserTrips(traveler);
    domUpdates.displayMessageUponSuccessfulTripRequest(bookedTrip.destinationName);
  }

function addPendingTripToTravelersTrips(pendingTrip) {
  traveler.trips.push(pendingTrip)
}

}

function displayTripCostEstimateMessage() {
  if (!returnTripWithTotalCostProperty().duration || !returnTripWithTotalCostProperty().date || !returnTripWithTotalCostProperty().numberOfTravelers || !selectedDestination) {
    domUpdates.displayErrorMessageIfAnyInputHasNoValue();
  } else {
    let trip = returnTripWithTotalCostProperty();
    domUpdates.displayCostOfTrip(trip.totalCostOfTrip, trip.destinationName)
  }
}

function returnTripWithTotalCostProperty() {
  let tripToBeBooked = instantiateNewTripObject();
  if(tripToBeBooked) {
  tripToBeBooked.totalCostOfTrip = tripToBeBooked.calculateTotalTripCost();
  return tripToBeBooked;
}
}

function instantiateNewTripObject() {
  if (selectedDestination) {
  let tripData = allTrips.find(trip => trip.destinationID === selectedDestination.id)
  let possibleTrip = new Trip(tripData, destinations);
  let formattedTripDate = moment(tripStartDateSelection.value).format('YYYY/MM/DD');
  possibleTrip.id = allTrips.length + 1;
  possibleTrip.userID = traveler.id;
  possibleTrip.numberOfTravelers = numberOfTravelersSelection.value;
  possibleTrip.date = formattedTripDate;
  possibleTrip.duration = tripDurationSelection.value;
  possibleTrip.status = 'pending';
  return possibleTrip;
} else {
  domUpdates.displayErrorMessageIfAnyInputHasNoValue()
}
}


function selectDestinationPriorToBooking() {
  selectedDestination = destinations.getDestinationById(parseInt(event.target.id));
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
