"use client";

import { useState } from "react";
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

export function SearchForm() {
  const [returnDate, setReturnDate] = useState("");

  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="space-y-2">
          <Label htmlFor="origin">Origin</Label>
          <Input id="origin" placeholder="JFK" defaultValue="JFK" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Input id="destination" placeholder="LAX" defaultValue="LAX" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="departure">Departure</Label>
          <Input
            id="departure"
            type="date"
            defaultValue="2026-01-25"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="return">Return (Optional)</Label>
          <Input
            id="return"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="passengers">Passengers</Label>
          <Select defaultValue="1">
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
          <Button className="w-full" size="lg">
            <Search className="mr-2 h-4 w-4" />
            Search Flights
          </Button>
        </div>
      </div>
    </Card>
  );
}
