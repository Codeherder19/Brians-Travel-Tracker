import { expect } from 'chai';

import Trip from '../src/Trip';
import Destinations from '../src/Destinations';

import { trips } from './test-data';
import { destinations } from './test-data';

describe('Trip', () => {
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
    expect(trip2.date).to.eq("2021/01/15");
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

  it('should initialize with a destination name', () => {
    expect(trip1.destinationName).to.eq("Stockholm, Sweden")
    expect(trip2.destinationName).to.eq("Tokyo, Japan")
  })

  it('should initialize with an estimated lodging cost per day', () => {
    expect(trip1.lodgingCostPerDay).to.eq(100);
    expect(trip2.lodgingCostPerDay).to.eq(125);
  })

  it('should initialize with an estimated flight cost per person', () => {
    expect(trip1.flightCostPerPerson).to.eq(780)
    expect(trip2.flightCostPerPerson).to.eq(1000)
  })

  it('should initialize with a trip image', () => {
    expect(trip1.tripImage).to.eq("https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")
    expect(trip2.tripImage).to.eq("https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80")
  })

  it('should initialize with with alt text that describes the trip image', () => {
    expect(trip1.imageAltText).to.eq("city with boats on the water during the day time")
    expect(trip2.imageAltText).to.eq("city with people walking in crosswalk and brightly lit shops at night")
  })

  it('should be able to calculate total trip cost with 10% agency fee included', () => {
    expect(trip1.calculateTotalTripCost()).to.eq(6270);
    expect(trip2.calculateTotalTripCost()).to.eq(7150);
  })

  it('should be able to determine if a trip is current or past', () => {
    trip1.determineIfTripIsPastOrCurrent(trip1.date, trip1.duration);
    expect(trip1.status).to.eq("pending");
    trip2.determineIfTripIsPastOrCurrent(trip2.date, trip2.duration);
    expect(trip2.status).to.eq("current");
    const trip3 = new Trip(trips.trips[9], tripDestinations);
    trip3.determineIfTripIsPastOrCurrent(trip3.date, trip3.duration);
    expect(trip3.status).to.eq("archived");


  })

});
