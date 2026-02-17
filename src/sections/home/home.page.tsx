"use client";

import { useState, useEffect } from "react";
import { SearchForm, type SearchFormData } from "@/components/search-form";
import { PriceChart } from "@/components/price-chart";
import { FiltersPanel, type FilterData } from "@/components/filters-panel";
import { ResultsList } from "@/components/results-list";
import { BackToTop } from "@/components/back-to-top";
import { getFlifghts } from "@/services/amadeus";
import { FlightOffer } from "@/models/flight-offer-types";
import { Spinner } from "@/components/ui/spinner";
import { EmptyContent } from "@/components/empty-content";
import { AlertCircle } from "lucide-react";
import { useFlightsFiltered } from "@/hooks/use-flights-filtered";
import { AirlineProvider, useAirlines } from "@/context/airline-context";

const initialFormData: SearchFormData = {
  origin: "JFK",
  destination: "LAX",
  departureDate: new Date().toISOString().split("T")[0],
  returnDate: "",
  passengers: "1",
};

const initialFilterData: FilterData = {
  priceRange: [0, 500],
  selectedStops: [],
  selectedAirlines: [],
};

function HomePageContent() {
  const [formInput, setFormInput] = useState<SearchFormData>(initialFormData);
  const [filterInput, setFilterInput] = useState<FilterData>(initialFilterData);

  const [flights, setFlights] = useState<FlightOffer[]>([]);
  const { setAirlines } = useAirlines();

  const flightsFiltered = useFlightsFiltered(flights, filterInput);

  // loadind and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchFlights = async (data: SearchFormData) => {
    setFlights([]);
    setLoading(true);
    setError(null);
    try {
      // Call the flight search service here
      const { flightsData, airlinesData } = await getFlifghts({
        originLocationCode: data.origin,
        destinationLocationCode: data.destination,
        departureDate: data.departureDate,
        ...(data.returnDate ? { returnDate: data.returnDate } : {}),
        adults: data.passengers,
      });
      // console.log("Fetched flights:", flightsData);
      setFlights(flightsData);
      setAirlines(airlinesData);
    } catch (err) {
      const errrorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      setError(errrorMessage);
      console.error("Error fetching flights:", errrorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchFlights(initialFormData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="lg:container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-3">
          <div className="flex items-center">
            {/* Since it's logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Plane Icon"
              className="inline-block w-10 h-10 mr-2"
            />{" "}
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flight Search
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Find and compare flights to your destination
          </p>
        </div>

        <SearchForm
          formInput={formInput}
          setFormInput={setFormInput}
          onSearch={(data) => searchFlights(data)}
        />

        <PriceChart flights={flightsFiltered} />

        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-6">
          <aside>
            <FiltersPanel
              filterInput={filterInput}
              setFilterInput={setFilterInput}
            />
          </aside>

          <main
            id="flight-results"
            className="flex flex-col items-center w-full"
          >
            {loading ? (
              <div className="flex flex-col items-center gap-2">
                <Spinner className="size-16 text-primary" />
                <p className="text-muted-foreground text-xl">
                  Loading flights...
                </p>
              </div>
            ) : null}
            {!loading && !error && flightsFiltered.length === 0 && (
              <EmptyContent />
            )}
            {!loading && !error && flightsFiltered.length > 0 && (
              <ResultsList flights={flightsFiltered} />
            )}
            {error && (
              <div className="text-red-400 flex flex-col items-center">
                <AlertCircle className="size-15" />
                <p className="mt-4">Error: {error}</p>
                <p>Try again later.</p>
              </div>
            )}
          </main>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}

export default function HomePage() {
  return (
    <AirlineProvider>
      <HomePageContent />
    </AirlineProvider>
  );
}
