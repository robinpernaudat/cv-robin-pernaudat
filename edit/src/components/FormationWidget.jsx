import { useState } from "react";

const formations = [
  {
    title: "IMERIM (Institut Méditerranéen d'Enseignement et de Recherche en informatique robotique)",
    title_us: "IMERIM (Mediterranean Institute of Education and Research in Robotics)",
    school: "École d'ingénieur à Perpignan",
    school_us: "Engineering school in Perpignan",
    year: "2007-2010",
    details: "Formation d'ingénieur en informatique et robotique.",
    details_us: "Engineering degree in computer science and robotics.",
  },
  {
    title: "IUT B (Lyon 1) - GEII",
    title_us: "IUT B (Lyon 1) - GEII",
    school: "Génie Électrique et Informatique Industrielle, option réseaux locaux industriels",
    school_us: "Electrical and Industrial Computer Science Engineering, industrial local networks option",
    year: "2005-2007",
    details: "Toujours classé dans le premier tiers.",
    details_us: "Always ranked in the first third.",
  },
  {
    title: "Bac STI électronique",
    title_us: "Technology in Electronic Systems",
    school: "Baccalauréat technologique",
    school_us: "Technological Baccalauréat",
    year: "2005",
    details: "Obtenu avec mention.",
    details_us: "Obtained with honors.",
  },
];

export default function FormationWidget({ lang = "fr" }) {
  const [isOpen, setIsOpen] = useState(false);
  const isEnglish = lang === "en";

  const formationsContent = isEnglish
    ? formations.map((formation) => ({
        ...formation,
        title: formation.title_us ?? formation.title,
        school: formation.school_us ?? formation.school,
        details: formation.details_us ?? formation.details,
      }))
    : formations;

  const heading = isEnglish ? "Education" : "Formation";
  const toggleLabel = isOpen ? (isEnglish ? "Close" : "Replier") : isEnglish ? "Expand" : "Déplier";

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">{heading}</h2>
        <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
          {toggleLabel}
        </span>
      </button>

      {isOpen ? (
        <ul className="mt-4 space-y-3">
          {formationsContent.map((formation) => (
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