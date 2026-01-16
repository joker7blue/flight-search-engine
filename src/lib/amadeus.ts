// import Amadeus from 'amadeus';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const Amadeus = require("amadeus");

export const amadeus = new Amadeus({
  clientId: process.env.NEXT_PUBLIC_AMADEUS_API_KEY,
  clientSecret: process.env.NEXT_PUBLIC_AMADEUS_API_SECRET,
});
