class Traveler {
  constructor(traveler, allTripData) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.type = traveler.travelerType;
    this.trips = allTripData.filter(trip => trip.userID === this.id);
    this.updatedTrips = this.trips.forEach(trip => trip.determineIfTripIsPastOrCurrent(trip.date, trip.duration));
  }

  calculateTotalSpentOnTripsForGivenYear(year) {
    const validTrips = this.trips.filter(trip => trip.status !== 'pending');
    const tripsForGivenYear = validTrips.filter(trip => trip.date.includes(year));
    const totalMoneySpentForGivenYear = tripsForGivenYear.reduce((acc, trip) => {
      return acc += trip.calculateTotalTripCost();
    }, 0);
    return totalMoneySpentForGivenYear;
  }
}

module.exports = Traveler;




// converting destination to trip and pushing it to the travelers trips array should happen in scripts
// displaying that new trip on the dom should go in domUpdates
