import { useState } from "react";

const formations = [
  {
    title: "IMERIR (Institut Méditerranéen d'Enseignement et de Recherche en informatique robotique)",
    school: "École d'ingénieur à Perpignan",
    year: "2007-2010",
    details: "Formation d'ingénieur en informatique et robotique.",
  },
  {
    title: "IUT B (Lyon 1) - GEII",
    school: "Génie Électrique et Informatique Industrielle, option réseaux locaux industriels",
    year: "2005-2007",
    details: "Toujours classé dans le premier tiers.",
  },
  {
    title: "Bac STI électronique",
    school: "Baccalauréat technologique",
    year: "2005",
    details: "Obtenu avec mention.",
  },
];

export default function FormationWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">Formation</h2>
        <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
          {isOpen ? "Replier" : "Déplier"}
        </span>
      </button>

      {isOpen ? (
        <ul className="mt-4 space-y-3">
          {formations.map((formation) => (
            <li key={`${formation.title}-${formation.year}`} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{formation.year}</p>
              <p className="mt-1 text-base font-semibold text-slate-900">{formation.title}</p>
              <p className="text-sm text-slate-700">{formation.school}</p>
              <p className="mt-1 text-sm text-slate-600">{formation.details}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
