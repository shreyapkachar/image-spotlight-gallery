import Gallery from "@/components/gallery/Gallery";
import { Camera } from "lucide-react";

/**
 * Index Page
 * Main landing page displaying the image gallery
 * Features a hero header with title and the filterable gallery
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="pt-12 pb-8 sm:pt-20 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo/Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-primary/10 text-primary animate-fade-in">
            <Camera className="w-8 h-8" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-4 animate-fade-in">
            Visual <span className="text-accent-gradient">Gallery</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            Explore stunning photography across nature, wildlife, technology, and
            architecture. Click any image to view in full screen.
          </p>
        </div>
      </header>

      {/* Main Gallery Section */}
      <main className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Gallery />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            Use keyboard arrows to navigate • Press Escape to close
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
