const double = require('./kata').double

describe('double', () => {
  it('should double a value', () => {
    expect( double(1) ).toEqual( 2 );
  });
});