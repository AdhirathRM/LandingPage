import { useEffect } from "react"; // 1. Import useEffect
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { CustomCursor } from "./components/CustomCursor";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // 2. Add Scroll to Top Logic
  useEffect(() => {
    // Force the browser to reset scroll position to the top
    window.scrollTo(0, 0);
    
    // Disable automatic scroll restoration to prevent the browser from jumping 
    // back to the Carousel section on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          {/* Global Visual Effects */}
          <div className="animated-bg" />
          <div className="noise-overlay" />
          <CustomCursor />
          
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;