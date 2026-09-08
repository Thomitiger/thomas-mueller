/** Trennlinie. Trennung über Linien und Flächenwechsel, keine Schatten. */
export function Rule({ className = '' }: { className?: string }) {
  return <hr className={`border-0 border-t border-line ${className}`} />;
}
