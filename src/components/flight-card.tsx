"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Flight } from "@/lib/mock-data";
import { Plane, Clock, ArrowRight } from "lucide-react";

export function FlightCard({ flight }: { flight: Flight }) {
  return (
    <Card className="group p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-to-br from-card to-card/80">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1 space-y-5">
          <div className="flex items-center justify-between md:justify-start md:gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20">
                {flight.logo}
              </div>
              <div>
                <p className="font-semibold text-base">{flight.airline}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  {flight.class}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="text-center min-w-[80px]">
              <p className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                {flight.departureTime}
              </p>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                {flight.origin}
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center px-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">{flight.duration}</span>
              </div>
              <div className="relative w-full h-[3px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full my-2">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                  <Plane className="h-4 w-4 text-primary-foreground rotate-90" />
                </div>
              </div>
              <p className="text-xs font-semibold mt-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30">
                {flight.stops === 0
                  ? "Non-stop"
                  : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
              </p>
            </div>

            <div className="text-center min-w-[80px]">
              <p className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                {flight.arrivalTime}
              </p>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                {flight.destination}
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-3 border-t md:border-t-0 md:border-l border-border/50 md:pl-6 pt-4 md:pt-0">
          <div className="flex-1 md:flex-none text-left md:text-right">
            <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ${flight.price}
            </p>
            <p className="text-sm text-muted-foreground">per person</p>
          </div>
          <Button
            size="lg"
            className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all"
          >
            Select Flight
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
