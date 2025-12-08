import type { Hero } from "./hero.interface";

export interface GetSummary {
  totalHeroes: number;
  strongestHero: Hero;
  smartestHero: Hero;
  heroCount: number;
  villainCount: number;
}
