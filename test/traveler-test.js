import { expect } from 'chai';

import Trip from '../src/Trip';
import Destinations from '../src/Destinations';
import Traveler from '../src/Traveler'

import { trips } from './test-data';
import { destinations } from './test-data';
import { travelers } from './test-data';

describe('Traveler', () => {
  let tripDestinations;
  let allTripObjects;
  let traveler1;
  let traveler2;

  beforeEach(() => {
     tripDestinations = new Destinations(destinations);
     allTripObjects = trips.trips.map(trip => new Trip(trip, tripDestinations));
     traveler1 = new Traveler(travelers.travelers.find(traveler => traveler.id === 1), allTripObjects);
     traveler2 = new Traveler(travelers.travelers.find(traveler => traveler.id === 2), allTripObjects);
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('should initialize with an id', () => {
    expect(traveler1.id).to.eq(1);
    expect(traveler2.id).to.eq(2);
  })

  it('traveler should have a name', () => {
    expect(traveler1.name).to.eq("Ham Leadbeater");
    expect(traveler2.name).to.eq("Rachael Vaughten");
  })

  it('traveler should have a traveler type', () => {
    expect(traveler1.type).to.eq("relaxer");
    expect(traveler2.type).to.eq("thrill-seeker");
  })

  it('traveler should instantiate with an array of trips', () => {
    expect(traveler1.trips.length).to.eq(6);
    expect(traveler2.trips.length).to.eq(4);
  })

  it('travelers trips array should have status updated based on', () => {
    expect(traveler2.trips[0].status).to.eq("current");
    expect(traveler1.trips[0].status).to.eq("archived");
  })


});
