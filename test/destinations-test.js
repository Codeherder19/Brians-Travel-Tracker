import { expect } from 'chai';

import Destinations from '../src/Destinations';

import { destinations } from './test-data';

describe('Destinations', () => {
  let tripDestinations;
  let trip1;
  let trip2;

  beforeEach(() => {
     tripDestinations = new Destinations(destinations);
     trip1 = tripDestinations.getDestinationById(1);
     trip2 = tripDestinations.getDestinationById(7);
  });

  it('should be a function', () => {
    expect(Destinations).to.be.a('function');
  })

  it('each destination should have an id', () => {
    expect(trip1.id).to.eq(1);
    expect(trip2.id).to.eq(7);
  })

  it('each destination should have a destination name', () => {
    expect(trip1.destination).to.eq("Lima, Peru");
    expect(trip2.destination).to.eq("Paris, France");
  })

  it('each destination should have a estimated lodging cost per day', () => {
    expect(trip1.estimatedLodgingCostPerDay).to.eq(70);
    expect(trip2.estimatedLodgingCostPerDay).to.eq(100);
  })

  it('each destination should have an estimatedflight cost per traveler', () => {
    expect(trip1.estimatedFlightCostPerPerson).to.eq(400);
    expect(trip2.estimatedFlightCostPerPerson).to.eq(395);
  })

  it('each destination should have an image and alt text for that image', () => {
    expect(trip1.image).to.eq("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
    expect(trip1.alt).to.eq("overview of city buildings with a clear sky");
    expect(trip2.image).to.eq("https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80");
    expect(trip2.alt).to.eq("city during the day time with eiffel tower");
  })
});
