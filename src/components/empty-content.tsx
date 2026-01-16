import { Button } from "@/components/ui/button";
import { Plane, Search, MapPin } from "lucide-react";

interface EmptyContentProps {
  message?: string;
  description?: string;
  showSearchButton?: boolean;
  onSearch?: () => void;
}

export function EmptyContent({
  message = "No flights found",
  description = "Try adjusting your search criteria or filters to find more options",
  showSearchButton = false,
  onSearch,
}: EmptyContentProps) {
  return (
    <div className="p-12 flex flex-col items-center justify-center min-h-[400px]">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl rounded-full" />
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
          <Plane className="w-12 h-12 text-primary rotate-45" />
        </div>
      </div>

      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
        {message}
      </h3>

      <p className="text-muted-foreground text-center max-w-md mb-6">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 items-center">
        {showSearchButton && onSearch && (
          <Button
            onClick={onSearch}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg shadow-primary/30"
          >
            <Search className="mr-2 h-4 w-4" />
            Search Again
          </Button>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <MapPin className="mr-2 h-4 w-4" />
          Try different destinations
        </Button>
      </div>
    </div>
  );
}
