import Navbar from "@/components/layout/navbar";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <div className={cn("overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]")}>
        <Navbar />
      </div>
      <ButtonGradient />
    </main>
  );
}
