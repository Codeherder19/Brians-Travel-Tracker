import { expect } from 'chai';

import Destination from '../src/Destination';

import { destinations } from './test-data';

describe('Destinations', () => {
  let tripDestinations;
  let trip1;
  let trip2;

  beforeEach(() => {
     tripDestinations = destinations.destinations.map(destination => new Destination(destination));
     trip1 = tripDestinations[0];
     trip2 = tripDestinations[7];
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('each destination should have an id', () => {
    expect(trip1.id).to.eq(1);
    expect(trip2.id).to.eq(8);
  })

  it('each destination should have a destination name', () => {
    expect(trip1.location).to.eq("Lima, Peru");
    expect(trip2.location).to.eq("Tokyo, Japan");
  })

  // it('each destination should have a ')
  });
