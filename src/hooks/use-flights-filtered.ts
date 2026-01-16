import { useMemo } from "react";
import { FilterData } from "@/components/filters-panel";
import { FlightOffer } from "@/models/flight-offer-types";

export const useFlightsFiltered = (
  flights: FlightOffer[],
  filters: FilterData
) => {
  return useMemo(() => {
    return flights.filter((flight) => {
      // Parse price as number for comparison
      const flightPrice = parseFloat(flight.price.total);
      const priceOk =
        flightPrice >= filters.priceRange[0] &&
        flightPrice <= filters.priceRange[1];

      // Calculate number of stops from segments
      const numberOfStops = flight.itineraries[0]?.segments.length - 1 || 0;

      // Map stop filters to numbers
      const stopsOk =
        filters.selectedStops.length === 0 ||
        filters.selectedStops.some((stopFilter) => {
          if (stopFilter === "Non-stop") return numberOfStops === 0;
          if (stopFilter === "1 Stop") return numberOfStops === 1;
          if (stopFilter === "2+ Stops") return numberOfStops >= 2;
          return false;
        });

      // Check airline codes
      const airlineOk =
        filters.selectedAirlines.length === 0 ||
        filters.selectedAirlines.some((airline) =>
          flight.validatingAirlineCodes.includes(airline)
        );

      return priceOk && stopsOk && airlineOk;
    });
  }, [flights, filters]);
};
