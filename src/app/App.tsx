import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { TechStack } from "@/app/components/TechStack";
import { Projects } from "@/app/components/Projects";
import { Transmission } from "@/app/components/Transmission";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-white overflow-x-hidden">
      {/* Animated background stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <div className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Transmission />
      </div>
    </div>
  );
}
