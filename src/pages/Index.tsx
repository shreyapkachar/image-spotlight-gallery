import Gallery from "@/components/gallery/Gallery";
import { ChevronLeft, Plus } from "lucide-react";

/**
 * Index Page
 * Clean, minimal gallery layout inspired by mobile photo apps
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="p-2 -ml-2 text-foreground hover:bg-muted rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-semibold text-foreground">Gallery</h1>
          <button className="p-2 -mr-2 text-foreground hover:bg-muted rounded-lg transition-colors">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Gallery */}
      <main>
        <Gallery />
      </main>
    </div>
  );
};

export default Index;
