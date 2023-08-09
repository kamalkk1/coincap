import { configureStore } from "@reduxjs/toolkit";
import { currenciesReducer } from "../slices";

const store = configureStore({
  reducer: { currencies: currenciesReducer },
});

export { store };
