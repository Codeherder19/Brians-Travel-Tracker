import Traveler from './Traveler';

const domUpdates = {

displayNameOfCurrentUser(user) {
  const firstName = user.name.split(" ")[0];
  const welcomeMessage = document.querySelector('.welcome-msg');
  welcomeMessage.innerText = `Welcome, ${firstName}!`;
},

displayUserTrip(tripName, tripTravelers, tripDuration, tripStartDate, tripImage, imageAltText, tripStatus) {
  let travelersTripSection = document.querySelector('.my-trips');
  let tripHTML = `<div class="trip-card">
    <p class="destination-name">${tripName}</p>
    <p class="number-of-travelers">Travelers: ${tripTravelers}</p>
    <p class="date-and-duration">${tripDuration} day trip from ${tripStartDate}.</p>
    <img src=${tripImage} class="trip-image" alt=${imageAltText}>
    <p>Status: ${tripStatus}</p>
    </div>`;
    travelersTripSection.insertAdjacentHTML("afterbegin", tripHTML);
},



}

export default domUpdates;
