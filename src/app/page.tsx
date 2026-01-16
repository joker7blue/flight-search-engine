import { SearchForm } from "@/components/search-form";
import { PriceChart } from "@/components/price-chart";
import { FiltersPanel } from "@/components/filters-panel";
import { ResultsList } from "@/components/results-list";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
           ✈️ Flight Search
          </h1>
          <p className="text-lg text-muted-foreground">
            Find and compare flights to your destination
          </p>
        </div>

        <SearchForm />

        <PriceChart />

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          <aside>
            <FiltersPanel />
          </aside>

          <main>
            <ResultsList />
          </main>
        </div>
      </div>
      
      <BackToTop />
    </div>
  );
}
