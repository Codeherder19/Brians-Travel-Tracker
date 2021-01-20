class Destinations {
  constructor(destinations) {
    this.allDestinationData = destinations.destinations;
  }

  getDestinationById(id) {
    return this.allDestinationData.find(destination =>
    destination.id === id);
  }


}

module.exports = Destinations;
