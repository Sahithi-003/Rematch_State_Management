import { createModel } from "@rematch/core";
import type { RootModel } from "./model";

export interface CounterState {
  count: number;
}

export const counter = createModel<RootModel>()({
  state: { count: 0 },
  reducers: {
    increment: (state: CounterState, payload: number) => {
      state.count += payload;
      return state;
    },
    decrement: (state: CounterState, payload: number) => {
      state.count -= payload;
      return state;
    },
  },
});
