class Trip {
  constructor(trip, destinations) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.numberOfTravelers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
    this.destinationName = destinations.getDestinationById(trip.destinationID).destination;
    this.lodgingCostPerDay = destinations.getDestinationById(trip.destinationID).estimatedLodgingCostPerDay;
    this.flightCostPerPerson = destinations.getDestinationById(trip.destinationID).estimatedFlightCostPerPerson;
    this.tripImage = destinations.getDestinationById(trip.destinationID).image;
    this.imageAltText = destinations.getDestinationById(trip.destinationID).alt;
  }

  calculateTotalTripCost() {
    const totalLodgingExpenses = this.lodgingCostPerDay * this.duration;
    const totalFlightExpenses = this.flightCostPerPerson * this.numberOfTravelers;
    const totalCost = Math.floor((totalLodgingExpenses + totalFlightExpenses) * 1.1);
    return totalCost;
  }

  determineIfTripIsPastOrCurrent(startDate, tripDuration) {
    if (Date.now() > Date.parse(startDate) && Date.now() < Date.parse(startDate) + (tripDuration * 86400000) && this.status !== "pending") {
      this.status = "current";
    } else if (Date.parse(startDate) + (tripDuration * 86400000) < Date.now() && this.status !== "pending") {
      this.status = "archived"
    }
  }
}

module.exports = Trip;
