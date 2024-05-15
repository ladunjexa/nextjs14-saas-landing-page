import Navbar from "@/components/layout/navbar";
import Benefits from "@/components/sections/benefits";
import Hero from "@/components/sections/hero";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <div className={cn("overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]")}>
        <Navbar />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
    </main>
  );
}
