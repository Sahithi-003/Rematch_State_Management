import { useSelector } from "react-redux";
import { RootModel } from "./models/model";
import { TodoState } from "./models/todos";

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const TodosList = () => {
  const { isLoading, todos } = useSelector(
    (state: { todos: TodoState } & RootModel) => state.todos
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {todos.map((todo: Todos) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
export default TodosList;
