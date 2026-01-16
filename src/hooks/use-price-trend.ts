import { useMemo } from "react";
import { FlightOffer } from "@/models/flight-offer-types";

export interface PriceTrendData {
  date: string;
  price: number;
  airlines: string[];
}

export const usePriceTrend = (flights: FlightOffer[]): PriceTrendData[] => {
  return useMemo(() => {
    if (flights.length === 0) {
      return [];
    }

    // Group flights by departure time (hour blocks)
    const pricesByTime = new Map<
      string,
      { prices: number[]; airlines: Set<string> }
    >();

    flights.forEach((flight) => {
      const departureDate = flight.itineraries[0]?.segments[0]?.departure.at;
      if (!departureDate) return;

      // formatting ( "06:00", "12:00")
      const dateObj = new Date(departureDate);
      const hour = dateObj.getHours();
      const timeLabel = `${hour.toString().padStart(2, "0")}:00`;

      const price = parseFloat(flight.price.total);
      const airlineCode =
        flight.itineraries[0]?.segments[0]?.carrierCode || "Unknown";

      if (!pricesByTime.has(timeLabel)) {
        pricesByTime.set(timeLabel, { prices: [], airlines: new Set() });
      }
      const timeData = pricesByTime.get(timeLabel)!;
      timeData.prices.push(price);
      timeData.airlines.add(airlineCode);
    });

    // return empty to hide chart only have one time slot
    if (pricesByTime.size < 2) {
      return [];
    }

    // average price for each time and format
    const trendData: PriceTrendData[] = Array.from(pricesByTime.entries())
      .map(([time, { prices, airlines }]) => {
        const avgPrice = prices.reduce((sum, p) => sum + p, 0) / prices.length;

        return {
          date: time,
          price: Math.round(avgPrice),
          airlines: Array.from(airlines),
        };
      })
      .sort((a, b) => {
        const [hourA] = a.date.split(":").map(Number);
        const [hourB] = b.date.split(":").map(Number);
        return hourA - hourB;
      });

    return trendData;
  }, [flights]);
};
