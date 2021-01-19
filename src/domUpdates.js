const moment = require("moment")

const domUpdates = {

displayNameOfCurrentUser(user) {
  const firstName = user.name.split(" ")[0];
  const welcomeMessage = document.querySelector('.welcome-msg');
  welcomeMessage.innerText = `Welcome, ${firstName}!`;
},

displayLoginErrorMessage() {
  const errorMessageHeading = document.querySelector('.login-error-message');
  errorMessageHeading.innerText = 'Please provide a valid user name and password';
},

displayUserTrip(tripName, tripTravelers, tripDuration, tripStartDate, tripImage, imageAltText, tripStatus) {
  const travelersTripSection = document.querySelector('.my-trips');
  const tripHTML = `<div class="trip-card">
    <p class="destination-name">${tripName}</p>
    <p class="number-of-travelers">Travelers: ${tripTravelers}</p>
    <p class="date-and-duration">${tripDuration} day trip from ${tripStartDate}.</p>
    <img src=${tripImage} class="trip-image" alt=${imageAltText}>
    <p>Status: ${tripStatus.toUpperCase()}</p>
    </div>`;
    travelersTripSection.insertAdjacentHTML('afterbegin', tripHTML);
},

displayTotalSpentForTripsInAYear(year, traveler) {
  const displayedMoneySpent = document.querySelector('.money-spent');
  displayedMoneySpent.innerText = `You have spent $${traveler.calculateTotalSpentOnTripsForGivenYear(year)} in ${year}. (This includes a 10% agency fee on all trips).`
},

displayDestination(destinationID, destinationName, destinationImage, imageAltText) {
  const allDestinations = document.querySelector('.all-destinations');
  const destinationHTML = `<div class="destination-card">
    <p class="destination-name">${destinationName}</p>
    <img src=${destinationImage} class="trip-image" alt=${imageAltText}>
    <button class="reserve-button" type="checked" id=${destinationID}>Reserve</button>
    </div>`;
    allDestinations.insertAdjacentHTML('afterbegin', destinationHTML);
},

disableSelectionOfPastDates() {
  let calendar = document.querySelector('#date');
  let todaysDate = moment().format().split('T')[0];
  calendar.setAttribute("min", todaysDate)
},

displayCostOfTrip(tripCost, tripName) {
  let costDisplay = document.querySelector('.money-spent');
  costDisplay.innerText = `Your total cost for this trip to ${tripName} will be $${tripCost} (this includes a 10% agency fee)`;
},

displayErrorMessageIfAnyInputHasNoValue() {
  let costDisplay = document.querySelector('.money-spent');
  costDisplay.innerText = "Please select a valid destination, date, trip duration, and number of travelers for this trip!";
},

displayMessageUponSuccessfulTripRequest(tripName) {
  let costDisplay = document.querySelector('.money-spent');
  costDisplay.innerText = `Your trip to ${tripName} has been successfully booked and is pending approval! Check My Trips for updates!`;
}

}

export default domUpdates;
