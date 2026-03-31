import { Todo } from "./TodoList";
type Props = {
  todo: Todo;
};
export default function TodoItem({ todo }: Props) {
  return <li key={todo.id}>{todo.title}</li>;
}
