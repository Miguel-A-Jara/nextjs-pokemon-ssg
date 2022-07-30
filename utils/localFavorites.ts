const toggleFavorite = (id: number) => {

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  if(favorites.includes(id)) {
    favorites = favorites.filter(p => p !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorite = (id: number): boolean => {
  
  if(typeof window === 'undefined') return false; //If the server is running not in the browser, then return false

  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export {
  toggleFavorite,
  existInFavorite,
  pokemons
}