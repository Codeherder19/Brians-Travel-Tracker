import { expect } from 'chai';

import Destination from '../src/user';

import { destinations } from './test-data';

describe('Destinations', () => {
  let tripDestinations;

  beforeEach(() => {
     tripDestinations = destinations.destinations.map(destination => new Destination(destination));

  });
  });
