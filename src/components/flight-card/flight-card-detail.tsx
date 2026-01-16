"use client";

import { type FlightOffer } from "@/models/flight-offer-types";
import { useAirlines } from "@/context/airline-context";
import { Plane, Clock, MapPin, Luggage, Ticket, Calendar } from "lucide-react";

export function FlightCardDetail({ flight }: { flight: FlightOffer }) {
  const { getAirlineName } = useAirlines();

  // Format time from ISO string
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  // Format date
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  // Format duration from ISO 8601
  const formatDuration = (duration: string) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?/);
    if (!match) return duration;
    const hours = match[1] ? match[1].replace("H", "h ") : "";
    const minutes = match[2] ? match[2].replace("M", "m") : "";
    return `${hours}${minutes}`.trim();
  };

  // Calculate layover time between segments
  const calculateLayover = (currentArrival: string, nextDeparture: string) => {
    const arrival = new Date(currentArrival);
    const departure = new Date(nextDeparture);
    const diffMs = departure.getTime() - arrival.getTime();
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const itinerary = flight.itineraries[0];

  return (
    <div className="p-4 space-y-6">
      {/* Flight Segments */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Plane className="h-5 w-5 text-primary" />
          Flight Itinerary
        </h3>
        <div className="space-y-4">
          {itinerary.segments.map((segment, index) => {
            const airlineName = getAirlineName(segment.carrierCode);
            const isLastSegment = index === itinerary.segments.length - 1;

            return (
              <div key={segment.id}>
                <div className="bg-card/50 rounded-lg p-4 border border-border/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs font-bold">
                        {segment.carrierCode}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">
                          {airlineName || segment.carrierCode} {segment.number}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Aircraft: {segment.aircraft.code}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatDuration(segment.duration)}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Departure */}
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Departure</p>
                      <p className="text-xl font-bold">{formatTime(segment.departure.at)}</p>
                      <p className="text-sm font-medium">{segment.departure.iataCode}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(segment.departure.at)}
                        {segment.departure.terminal && ` • Terminal ${segment.departure.terminal}`}
                      </p>
                    </div>

                    {/* Arrival */}
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-1">Arrival</p>
                      <p className="text-xl font-bold">{formatTime(segment.arrival.at)}</p>
                      <p className="text-sm font-medium">{segment.arrival.iataCode}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(segment.arrival.at)}
                        {segment.arrival.terminal && ` • Terminal ${segment.arrival.terminal}`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Layover Info */}
                {!isLastSegment && (
                  <div className="flex items-center gap-2 py-3 px-4 my-2 bg-amber-500/10 border-l-2 border-amber-500 rounded">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <p className="text-sm">
                      <span className="font-semibold">Layover in {segment.arrival.iataCode}</span>
                      <span className="text-muted-foreground ml-2">
                        {calculateLayover(
                          segment.arrival.at,
                          itinerary.segments[index + 1].departure.at
                        )}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Fare Details */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Ticket className="h-5 w-5 text-primary" />
          Price Breakdown
        </h3>
        <div className="bg-card/50 rounded-lg p-4 border border-border/50 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Base Fare</span>
            <span className="font-medium">
              {flight.price.base} {flight.price.currency}
            </span>
          </div>
          {flight.price.fees && flight.price.fees.length > 0 && (
            <>
              {flight.price.fees.map((fee, index) => (
                <div key={index} className="flex justify-between text-sm text-muted-foreground">
                  <span>{fee.type}</span>
                  <span>{fee.amount} {flight.price.currency}</span>
                </div>
              ))}
            </>
          )}
          {flight.price.additionalServices && flight.price.additionalServices.length > 0 && (
            <>
              {flight.price.additionalServices.map((service, index) => (
                <div key={index} className="flex justify-between text-sm text-muted-foreground">
                  <span>{service.type}</span>
                  <span>{service.amount} {flight.price.currency}</span>
                </div>
              ))}
            </>
          )}
          <div className="border-t pt-2 flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-primary">
              {flight.price.total} {flight.price.currency}
            </span>
          </div>
        </div>
      </div>

      {/* Baggage & Amenities */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Luggage className="h-5 w-5 text-primary" />
          Baggage & Amenities
        </h3>
        <div className="bg-card/50 rounded-lg p-4 border border-border/50">
          {flight.travelerPricings[0]?.fareDetailsBySegment.map((fareDetail, index) => (
            <div key={index} className="mb-3 last:mb-0">
              <p className="text-sm font-medium mb-2">Segment {index + 1}</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Cabin: {fareDetail.cabin}</p>
                {fareDetail.brandedFareLabel && (
                  <p>Fare Type: {fareDetail.brandedFareLabel}</p>
                )}
                {fareDetail.includedCheckedBags && (
                  <p>Checked Bags: {fareDetail.includedCheckedBags.quantity} piece(s)</p>
                )}
                {fareDetail.includedCabinBags && (
                  <p>Cabin Bags: {fareDetail.includedCabinBags.quantity} piece(s)</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Booking Information
        </h3>
        <div className="bg-card/50 rounded-lg p-4 border border-border/50 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Available Seats</span>
            <span className="font-medium">{flight.numberOfBookableSeats}</span>
          </div>
          <div className="flex justify-between">
            <span>Instant Ticketing Required</span>
            <span className="font-medium">
              {flight.instantTicketingRequired ? "Yes" : "No"}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Last Ticketing Date</span>
            <span className="font-medium">
              {new Date(flight.lastTicketingDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
