import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

const initialState: PokemonsState = {
  favorites: {},
};

const pokenomsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<PokemonsState["favorites"]>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;

      if (!!state.favorites[pokemon.id]) {
        delete state.favorites[pokemon.id];
      } else {
        state.favorites[pokemon.id] = { ...pokemon };
      }
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokenomsSlice.actions;

export default pokenomsSlice.reducer;
