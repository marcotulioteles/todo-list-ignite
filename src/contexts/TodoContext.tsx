import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { TodoItemProps } from "../App";

interface TodosProviderProps {
  children: ReactNode;
}

interface TodoContextProps {
  todoList: TodoItemProps[];
  setTodoList: Dispatch<SetStateAction<TodoItemProps[]>>;
}

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todoList, setTodoList] = useState<TodoItemProps[]>([]);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
};
