export default function AutoApprentissage() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">Apprentissage autodidacte</h2>
      <div className="mt-4 space-y-3">
        <article className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Expérimentation personnelle</p>
          <p className="mt-2 text-sm text-slate-700">
            J'ai expérimenté le déploiement d'IA on-premise ainsi que l'automatisation de tâches et de processus.
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Cette démarche personnelle me permet de confronter des scénarios de déploiement d'IA et des solutions
            d'automatisation à des environnements concrets, en dehors de mes missions professionnelles.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Expérimentation du déploiement d'IA on-premise.</li>
            <li>Automatisation de tâches et de workflows.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
