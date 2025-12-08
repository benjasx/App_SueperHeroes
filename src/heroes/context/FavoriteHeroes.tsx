import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Hero } from "../types/hero.interface";

interface FavoritesHeroesContext {
  //State
  favorietes: Hero[];
  favoriteCount: number;

  //Methods
  isFavorite: (hero: Hero) => boolean;
  toggleFavorites: (hero: Hero) => void;
}

export const FavoritesHeroesContext = createContext(
  {} as FavoritesHeroesContext
);

const getFavoritesFromLocalStorage = (): Hero[] => {
  //llama al localStorage con la propiedad favoritos
  const favorites = localStorage.getItem("favorites");
  // si no hay nada regresa un arreglo vacio
  return favorites ? JSON.parse(favorites) : [];
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage
  );

  const toggleFavorite = (hero: Hero) => {
    // Valida si el Hero que está recibiendo existe en el estado actual del state
    const heroExist = favorites.find((h) => h.id === hero.id);

    if (heroExist) {
      //Devuelve un nuevo arreglo con todos los heros que tengan el id Diferente
      setFavorites(favorites.filter((h) => h.id !== hero.id));
      return;
    }

    // Si no existe lo agregamos al estado
    setFavorites([...favorites, hero]);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesHeroesContext
      value={{
        //State
        favoriteCount: favorites.length,
        favorietes: favorites,

        //Methods
        isFavorite: (hero: Hero) => favorites.some((h) => h.id === hero.id),
        toggleFavorites: toggleFavorite,
      }}
    >
      {children}
    </FavoritesHeroesContext>
  );
};
