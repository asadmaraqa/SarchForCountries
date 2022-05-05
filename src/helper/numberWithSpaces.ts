export function numberWithSpaces(population: string): string {
  return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
