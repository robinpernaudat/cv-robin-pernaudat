export default function ExperienceCard({ period, title, company, context, highlights }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{period}</p>
      <h3 className="mt-1 text-base font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-700">{company}</p>
      {context ? <p className="mt-2 text-sm text-slate-700">{context}</p> : null}
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}
