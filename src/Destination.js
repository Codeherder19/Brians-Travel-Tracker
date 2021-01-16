class Destination {
  constructor(destination) {
    this.id = destination.id;
    this.location = destination.destination;
    this.lodgingCostPerDay = destination.estimatedLodgingCostPerDay;
    this.flightCostPerPerson = destination.estimatedFlightCostPerPerson;
    this.image = destination.image;
    this.altText = destination.alt

  }
};

module.exports = Destination;
