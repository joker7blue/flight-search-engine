"use client";

// import { mockFlights } from "@/lib/mock-data";
// import { FlightCard } from "@/components/flight-card";
import { FlightOffer } from "@/models/flight-offer-types";
import { FlightCard } from "./flight-card/flight-card";

interface ResultsListProps {
  flights: FlightOffer[];
}

export function ResultsList({ flights }: ResultsListProps) {
  return (
    <div className="space-y-4 w-full lg:w-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{flights.length} Flights Found</h2>
        <p className="text-sm text-muted-foreground">Sorted by: Best Value</p>
      </div>
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
}
