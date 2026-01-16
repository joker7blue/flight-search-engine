# ✈️ Flight Search Engine

A modern flight search application built with Next.js, featuring real-time filtering, dynamic price trends, and a clean, responsive interface.

## What's Inside

This is a full-featured flight search engine that pulls real flight data from the Amadeus API. The interface focuses on usability - you can search flights, filter by price/stops/airline, and see price trends all updating in real-time.

### Key Features

- **Live Search**: Search flights by origin, destination, dates, and number of passengers
- **Real-time Filtering**: Filter by price range, number of stops, and airlines - everything updates instantly
- **Dynamic Price Chart**: Visual price trends that update based on your current filters
- **Responsive Design**: Works smoothly on mobile and desktop
- **Modern UI**: Clean gradients, smooth animations, purple/pink theme

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **shadcn/ui** for components
- **Recharts** for data visualization
- **Amadeus Flight Offers Search API**

## Getting Started

1. Clone the repo
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Add your Amadeus API credentials to `.env.local`:
   ```
   NEXT_PUBLIC_AMADEUS_API_KEY=your_key_here
   NEXT_PUBLIC_AMADEUS_API_SECRET=your_secret_here
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Test Routes

Try these origin/destination pairs (IATA city codes):

- **JFK → LAX**: New York to Los Angeles (high-frequency domestic)
- **JFK → LHR**: New York to London (popular transatlantic)
- **LAX → NRT**: Los Angeles to Tokyo (long-haul Pacific)
- **ORD → MIA**: Chicago to Miami (domestic)
- **SFO → SEA**: San Francisco to Seattle (short-haul)
- **BOS → ATL**: Boston to Atlanta (East Coast)
- **LHR → CDG**: London to Paris (European shuttle)
- **MIA → CUN**: Miami to Cancun (vacation route)

Use 3-letter IATA airport/city codes. Find more at [IATA Airport Codes](https://www.iata.org/en/publications/directories/code-search/).

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/            # UI components (search form, filters, charts, etc.)
├── context/              # React context (airline data)
├── hooks/                # Custom hooks (filtering, price trends)
├── models/               # TypeScript interfaces
├── services/             # API integration
└── lib/                  # Utilities and mock data
```

## How It Works

1. **Search**: Enter your travel details and hit search
2. **Browse**: See all available flights with departure times, prices, and stops
3. **Filter**: Use the sidebar to filter by price, stops, or specific airlines
4. **Analyze**: Check the price chart to see how prices vary by departure time
5. **Select**: Pick your preferred flight

The filtering is instant - no page reloads, everything updates on the fly. The price chart groups flights by departure hour, showing you the average price and which airlines operate at each time.

## Design Decisions

- **Time-based pricing trends**: Since searches are date-specific, the chart shows price variation by departure time rather than by date
- **Context for airline data**: Airline information is shared across components via React Context to avoid prop drilling
- **Custom hooks**: Filtering and price trend logic is extracted into reusable hooks with `useMemo` for performance
- **TypeScript throughout**: Full type safety with interfaces matching the Amadeus API response structure

## What Could Be Better

Given more time, I'd add:
- Multi-city and round-trip search
- Flight details modal with full itinerary breakdown
- Price alerts and saved searches
- Sorting options (price, duration, departure time)
- Better error states and loading skeletons

---

Built for the Spotter coding challenge. The goal was to demonstrate clean code, good UX decisions, and solid React/TypeScript fundamentals in a real-world application.
