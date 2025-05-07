
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { ParallaxBackground } from "./components/ui/ParallaxBackground";

const queryClient = new QueryClient();

// Helper function for adding mouse ripple effect
const addRippleEffect = (e: MouseEvent) => {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 1500);
};

const App = () => {
  useEffect(() => {
    // Add mouse ripple effect on click
    document.addEventListener("click", addRippleEffect);
    
    return () => {
      document.removeEventListener("click", addRippleEffect);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="fixed inset-0 z-[-1]">
          <ParallaxBackground 
            backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=60" 
            opacity={0.05} 
          />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout hideFooter={true}><Index /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
