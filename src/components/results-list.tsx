"use client";

import { mockFlights } from "@/lib/mock-data";
import { FlightCard } from "@/components/flight-card";

export function ResultsList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{mockFlights.length} Flights Found</h2>
        <p className="text-sm text-muted-foreground">
          Sorted by: Best Value
        </p>
      </div>
      {mockFlights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
}
