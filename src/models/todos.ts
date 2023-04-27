import { createModel } from "@rematch/core";
import { RootModel } from "./model";

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  isLoading: boolean;
  todos: Todos[];
}

export const todos = createModel<RootModel>()({
  state: {
    isLoading: false,
    todos: [],
  } as TodoState,
  reducers: {
    setLoading(state: TodoState, isLoading: boolean) {
      return {
        ...state,
        isLoading,
      };
    },
    setTodos(state: TodoState, todos: Todos[]) {
      return {
        ...state,
        todos,
      };
    },
  },
  effects: (dispatch) => ({
    async fetchTodos() {
      dispatch.todos.setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const todos = await response.json();
      dispatch.todos.setTodos(todos);
      dispatch.todos.setLoading(false);
    },
  }),
});
