export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-serif text-sm text-accent">{number}</span>
      <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">{title}</h2>
      <div className="ml-2 h-px flex-1 bg-line" aria-hidden />
    </div>
  );
}
