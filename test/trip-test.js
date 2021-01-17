import { expect } from 'chai';

import Trip from '../src/Trip';
import Destinations from '../src/Destinations';

import { trips } from './test-data';
import { destinations } from './test-data';

describe('Destinations', () => {
  let tripDestinations;
  let trip1;
  let trip2;

  beforeEach(() => {
     tripDestinations = new Destinations(destinations);
     trip1 = new Trip(trips.trips[1], tripDestinations);
     trip2 = new Trip(trips.trips[7], tripDestinations);
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  })

  it('should initialize with a userID', () => {
    expect(trip1.userID).to.eql(1);
    expect(trip2.userID).to.eql(1);
  })

  it('should initialize with a destination id', () => {
    expect(trip1.destinationID).to.eql(2);
    expect(trip2.destinationID).to.eql(8);
  })

});
