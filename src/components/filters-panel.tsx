"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { airlines } from "@/lib/mock-data";

function FilterContent() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedStops, setSelectedStops] = useState<string[]>([]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);

  const toggleStop = (stop: string) => {
    setSelectedStops((prev) =>
      prev.includes(stop) ? prev.filter((s) => s !== stop) : [...prev, stop]
    );
  };

  const toggleAirline = (airline: string) => {
    setSelectedAirlines((prev) =>
      prev.includes(airline)
        ? prev.filter((a) => a !== airline)
        : [...prev, airline]
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Price Range</h3>
        <div className="space-y-3">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={500}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
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
                checked={selectedStops.includes(stop)}
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
          {airlines.map((airline) => (
            <div key={airline} className="flex items-center space-x-2">
              <Checkbox
                id={`airline-${airline}`}
                checked={selectedAirlines.includes(airline)}
                onCheckedChange={() => toggleAirline(airline)}
              />
              <Label
                htmlFor={`airline-${airline}`}
                className="text-sm font-normal cursor-pointer"
              >
                {airline}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FiltersPanel() {
  return (
    <>
      <div className="hidden md:block">
        <Card className="p-6">
          <FilterContent />
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
          <SheetContent side="left" className="w-[300px] overflow-y-auto">
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
