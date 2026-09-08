/**
 * Gestaffelte Einblend-Verzögerung für Listen/Grids. Deckelt bei 140 ms, damit
 * lange Listen (zwölf Werte, zehn Spielregeln) nicht endlos weiter verzögern.
 */
export function staggerDelay(index: number, step = 40, max = 140): number {
  return Math.min(index * step, max);
}
