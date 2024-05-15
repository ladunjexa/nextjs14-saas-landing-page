import Header from "@/components/layout/header";
import ButtonGradient from "@/components/svg/button-gradient";

export default function Home() {
  return (
    <main>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
      </div>
      <ButtonGradient />
    </main>
  );
}
