import Header from "./components/Header";
import FormationWidget from "./components/FormationWidget";
import Experiences from "./components/Experiences";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-stone-100 to-stone-200 px-6 py-12 text-slate-900">
      <section className="mx-auto w-full max-w-6xl rounded-3xl border border-slate-300/70 bg-white/85 p-8 shadow-xl backdrop-blur-sm sm:p-12">
        <Header />

        <div className="space-y-6 text-base leading-relaxed text-slate-700 sm:text-lg">
          <FormationWidget />
          <Experiences />
        </div>
      </section>
    </main>
  );
}
