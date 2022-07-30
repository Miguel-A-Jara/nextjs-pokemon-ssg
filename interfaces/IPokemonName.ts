export interface IPokemonName {
  count:    number;
  next:     string;
  previous: null;
  results:  PokemonNameResult[];
}

export interface PokemonNameResult {
  name: string;
  url:  string;
}
