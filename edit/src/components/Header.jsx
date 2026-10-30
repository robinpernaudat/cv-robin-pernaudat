export default function Header({ lang = "fr", onToggleLanguage }) {
  return (
    <header className="mb-8 border-b border-slate-200 pb-6">
      <button
        type="button"
        onClick={onToggleLanguage}
        className="mb-4 inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 transition hover:bg-slate-100"
        aria-label={lang === "fr" ? "Passer en anglais" : "Switch to French"}
      >
        {lang === "fr" ? "switch to english language" : "voir en français"}
      </button>
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">mon book</p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Robin Pernaudat</h1>
    </header>
  );
}