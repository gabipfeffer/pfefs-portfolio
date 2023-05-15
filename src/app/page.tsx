import Header from "src/components/Header";
import Hero from "src/components/Hero";

export default function Home() {
  return (
    <main className="bg-[rgb(var(--background))] text-[rgb(var(--text))] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id={"hero"} className={"snap-center"}>
        <Hero />
      </section>
      {/*  About */}
      {/*  Experience */}
      {/*  Skills */}
      {/*  Project */}
      {/*  Contact */}
    </main>
  );
}
