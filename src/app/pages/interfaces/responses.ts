export interface ResponseContainer<T> {
  count: number,
  next: string,
  previous: string,
  results: T[],
}

export interface Planet {
  climate: PlanetClimate,
  name: string,
  orbital_period: string,
  population: string,
  surface_water: string,
  terrain: string,
  url: string,
  films: string[],
  residents: string[],
  created: string,
  edited: string,
}

export enum PlanetClimate{
  arid = 'arid',
  frozen = 'frozen',
  temperate = 'temperate',
}
