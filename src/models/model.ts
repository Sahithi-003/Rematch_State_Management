import { Models } from "@rematch/core";
import { counter } from "./counter";
import { todos } from "./todos";

export interface RootModel extends Models<RootModel> {
  counter: typeof counter;
  todos: typeof todos;
}

export const models: RootModel = {
  counter,
  todos,
};
