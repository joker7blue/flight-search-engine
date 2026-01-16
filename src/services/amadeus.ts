import { amadeus } from "@/lib/amadeus";
import { Airline } from "@/models/airline.types";
import { FlightOffer } from "@/models/flight-offer-types";

interface FlightOffersSearch {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: string;
  returnDate?: string;
  adults: string;
}

export const getFlifghts = async (data: FlightOffersSearch) => {
  try {
    const response = await amadeus.shopping.flightOffersSearch.get({
      ...data,
    });

    const flightsData: FlightOffer[] = (response.data as FlightOffer[]) ?? [];
    const airlinesData: Airline[] = [];

    const carriers = response.result?.dictionaries?.carriers;
    if (carriers) {
      Object.entries(carriers).forEach(([code, name]) => {
        airlinesData.push({
          code,
          name: name as string,
        });
      });
    }

    return { flightsData, airlinesData };
  } catch (error) {
    throw error;
  }
};
