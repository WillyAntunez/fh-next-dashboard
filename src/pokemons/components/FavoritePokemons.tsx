"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemons.favorites);

  if (Object.values(favoritePokemons).length === 0) {
    return <NoFavorites />;
  }

  return <PokemonGrid pokemons={Object.values(favoritePokemons)} />;
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
