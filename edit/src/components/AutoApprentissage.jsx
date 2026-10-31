const autoApprentissage = {
  title: "Expertises récentes et divers",
  title_us: "New areas of Expertise and Miscellaneous",
  experiment: {
    label: "Apprentissage autodidacte et expérimentations",
    label_us: "Autodidactic learning",
    description: "J'ai expérimenté le déploiement d'IA on-premise ainsi que l'automatisation de tâches et de processus.",
    description_us: "I have experimented with the deployment of on-premise AI as well as the automation of tasks and processes.",
    details: "Cette démarche personnelle me permet de confronter des scénarios de déploiement d'IA et des solutions d'automatisation à des environnements concrets, en dehors de mes missions professionnelles.",
    details_us: "This personal approach allows me to test AI deployment scenarios and automation solutions in concrete environments, outside of my professional missions.",
    points: [
      "Expérimentation du déploiement d'IA on-premise.",
      "Automatisation de tâches et de workflows.",
      "IA physique (robotique)",
    ],
    points_us: [
      "Experimented with the deployment of on-premise AI.",
      "Automation of tasks and workflows.",
      "Physical AI (Robotics)",
    ],
  },
};

const getContent = (lang) => {
  if (lang !== "en") {
    return autoApprentissage;
  }

  return {
    ...autoApprentissage,
    title: autoApprentissage.title_us,
    experiment: {
      ...autoApprentissage.experiment,
      label: autoApprentissage.experiment.label_us,
      description: autoApprentissage.experiment.description_us,
      details: autoApprentissage.experiment.details_us,
      points: autoApprentissage.experiment.points_us,
    },
  };
};

export default function AutoApprentissage({ lang = "fr" }) {
  const content = getContent(lang);

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">{content.title}</h2>
      <div className="mt-4 space-y-3">
        <article className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{content.experiment.label}</p>
          <p className="mt-2 text-sm text-slate-700">{content.experiment.description}</p>
          <p className="mt-2 text-sm text-slate-700">{content.experiment.details}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {content.experiment.points.map((point) => (   //
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
