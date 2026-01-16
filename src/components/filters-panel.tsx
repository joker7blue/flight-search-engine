"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { useAirlines } from "@/context/airline-context";

export interface FilterData {
  priceRange: [number, number];
  selectedStops: string[];
  selectedAirlines: string[];
}

interface FiltersPanelProps {
  filterInput: FilterData;
  setFilterInput: (data: FilterData) => void;
}

function FilterContent({ filterInput, setFilterInput }: FiltersPanelProps) {
  const { airlines } = useAirlines();
  const handlePriceChange = (value: number[]) => {
    setFilterInput({
      ...filterInput,
      priceRange: [value[0], value[1]],
    });
  };

  const toggleStop = (stop: string) => {
    const newStops = filterInput.selectedStops.includes(stop)
      ? filterInput.selectedStops.filter((s) => s !== stop)
      : [...filterInput.selectedStops, stop];

    setFilterInput({
      ...filterInput,
      selectedStops: newStops,
    });
  };

  const toggleAirline = (airline: string) => {
    const newAirlines = filterInput.selectedAirlines.includes(airline)
      ? filterInput.selectedAirlines.filter((a) => a !== airline)
      : [...filterInput.selectedAirlines, airline];

    setFilterInput({
      ...filterInput,
      selectedAirlines: newAirlines,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Price Range</h3>
        <div className="space-y-3">
          <Slider
            value={filterInput.priceRange}
            onValueChange={handlePriceChange}
            min={0}
            max={500}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${filterInput.priceRange[0]}</span>
            <span>${filterInput.priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Stops</h3>
        <div className="space-y-3">
          {["Non-stop", "1 Stop", "2+ Stops"].map((stop) => (
            <div key={stop} className="flex items-center space-x-2">
              <Checkbox
                id={`stop-${stop}`}
                checked={filterInput.selectedStops.includes(stop)}
                onCheckedChange={() => toggleStop(stop)}
              />
              <Label
                htmlFor={`stop-${stop}`}
                className="text-sm font-normal cursor-pointer"
              >
                {stop}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Airlines</h3>
        <div className="space-y-3">
          {airlines?.map((airline) => (
            <div key={airline.code} className="flex items-center space-x-2">
              <Checkbox
                id={`airline-${airline.code}`}
                checked={filterInput.selectedAirlines.includes(airline.code)}
                onCheckedChange={() => toggleAirline(airline.code)}
              />
              <Label
                htmlFor={`airline-${airline.code}`}
                className="text-sm font-normal cursor-pointer"
              >
                {airline.name} ({airline.code})
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FiltersPanel({
  filterInput,
  setFilterInput,
}: FiltersPanelProps) {
  return (
    <>
      <div className="hidden md:block">
        <Card className="p-6">
          <FilterContent
            filterInput={filterInput}
            setFilterInput={setFilterInput}
          />
        </Card>
      </div>

      <div className="md:hidden mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] overflow-y-auto p-6">
            <div className="mt-6">
              <FilterContent
                filterInput={filterInput}
                setFilterInput={setFilterInput}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
