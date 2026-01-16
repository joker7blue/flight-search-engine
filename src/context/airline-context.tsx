"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Airline } from "@/models/airline.types";

interface AirlineContextType {
  airlines: Airline[];
  setAirlines: (airlines: Airline[]) => void;
  getAirlineName: (code: string) => string;
}

const AirlineContext = createContext<AirlineContextType | undefined>(undefined);

export function AirlineProvider({ children }: { children: ReactNode }) {
  const [airlines, setAirlines] = useState<Airline[]>([]);

  const getAirlineName = (code: string): string => {
    const airline = airlines.find((a) => a.code === code);
    return airline?.name || code;
  };

  return (
    <AirlineContext.Provider value={{ airlines, setAirlines, getAirlineName }}>
      {children}
    </AirlineContext.Provider>
  );
}

export function useAirlines() {
  const context = useContext(AirlineContext);
  if (context === undefined) {
    throw new Error("useAirlines must be used within an AirlineProvider");
  }
  return context;
}
