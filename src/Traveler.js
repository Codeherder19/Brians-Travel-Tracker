class Traveler {
  constructor(traveler, allTripData) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.type = traveler.travelerType;
    this.trips = allTripData.filter(trip => trip.userID === this.id);
  }


}

module.exports = Traveler;
