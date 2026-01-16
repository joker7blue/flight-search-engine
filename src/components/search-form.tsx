"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

export interface SearchFormData {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  passengers: string;
}

interface SearchFormProps {
  formInput: SearchFormData;
  setFormInput: (data: SearchFormData) => void;
  onSearch?: (data: SearchFormData) => void;
}

export function SearchForm({
  formInput,
  setFormInput,
  onSearch,
}: SearchFormProps) {
  const today = new Date().toISOString().split("T")[0];

  const handleInputChange = (field: keyof SearchFormData, value: string) => {
    setFormInput({
      ...formInput,
      [field]: value,
    });
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(formInput);
      
      // Scroll to results section
      setTimeout(() => {
        const resultsElement = document.getElementById("flight-results");
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="space-y-2">
          <Label htmlFor="origin">Origin (City Code)</Label>
          <Input
            id="origin"
            placeholder="JFK"
            value={formInput.origin}
            onChange={(e) => handleInputChange("origin", e.target.value.toUpperCase())}
            maxLength={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination">Destination (City Code)</Label>
          <Input
            id="destination"
            placeholder="LAX"
            value={formInput.destination}
            onChange={(e) => handleInputChange("destination", e.target.value.toUpperCase())}
            maxLength={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="departure">Departure</Label>
          <Input
            id="departure"
            type="date"
            min={today}
            value={formInput.departureDate}
            onChange={(e) => handleInputChange("departureDate", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="return">Return (Optional)</Label>
          <Input
            id="return"
            type="date"
            min={formInput.departureDate || today}
            value={formInput.returnDate || ""}
            onChange={(e) => handleInputChange("returnDate", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="passengers">Passengers</Label>
          <Select
            value={formInput.passengers}
            onValueChange={(value) => handleInputChange("passengers", value)}
          >
            <SelectTrigger id="passengers">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Passenger</SelectItem>
              <SelectItem value="2">2 Passengers</SelectItem>
              <SelectItem value="3">3 Passengers</SelectItem>
              <SelectItem value="4">4 Passengers</SelectItem>
              <SelectItem value="5">5+ Passengers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button className="w-full" size="lg" onClick={handleSearch}>
            <Search className="mr-2 h-4 w-4" />
            Search Flights
          </Button>
        </div>
      </div>
    </Card>
  );
}
