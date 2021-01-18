import Traveler from './Traveler';

const domUpdates = {

displayNameOfCurrentUser(user) {
  const firstName = user.name.split(" ")[0];
  const welcomeMessage = document.querySelector('.welcome-msg');
  welcomeMessage.innerText = `Welcome, ${firstName}!`;
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
    travelersTripSection.insertAdjacentHTML("afterbegin", tripHTML);
},

displayTotalSpentForTripsInAYear(year, traveler) {
  const displayedMoneySpent = document.querySelector('.money-spent');
  displayedMoneySpent.innerText = `You have spent $${traveler.calculateTotalSpentOnTripsForGivenYear(year)} in ${year}. (This includes a 10% agency fee on all trips).`
}



}

export default domUpdates;
