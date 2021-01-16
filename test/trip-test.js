import { expect } from 'chai';

import Trip from '../src/Trip';

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
});
