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
    expect(trip1.userID).to.eq(1);
    expect(trip2.userID).to.eq(1);
  })

  it('should initialize with a destination id', () => {
    expect(trip1.destinationID).to.eq(2);
    expect(trip2.destinationID).to.eq(8);
  })

  it('should initialize with a number of travelers', () => {
    expect(trip1.numberOfTravelers).to.eq(5);
    expect(trip2.numberOfTravelers).to.eq(6);
  })

  it('should intitialize with a start date', () => {
    expect(trip1.date).to.eq("2020/10/04");
    expect(trip2.date).to.eq("2021/02/07");
  })

  it('should initialize with a duration', () => {
    expect(trip1.duration).to.eq(18);
    expect(trip2.duration).to.eq(4);
  })

  it('should initialize with a status', () => {
    expect(trip1.status).to.eq('pending');
    expect(trip2.status).to.eq('approved');
  })

  it('should initialize with an array of suggested activities', () => {
    expect(trip1.suggestedActivities).to.eql([])
    expect(trip2.suggestedActivities).to.eql([])
  })



});
