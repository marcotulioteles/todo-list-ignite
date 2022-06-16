import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useRef,
} from "react";

export interface TodoProps {
  description: string;
  done?: boolean;
}

interface TodosProviderProps {
  children: ReactNode;
}

interface TodoContextProps {
  todoList: TodoProps[];
  setTodoList: Dispatch<SetStateAction<TodoProps[]>>;
  todosDoneNumber: number;
  setTodosDoneNumber: Dispatch<SetStateAction<number>>;
}

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const [todosDoneNumber, setTodosDoneNumber] = useState(0);

  return (
    <TodoContext.Provider
      value={{ todoList, setTodoList, todosDoneNumber, setTodosDoneNumber }}
    >
      {children}
    </TodoContext.Provider>
  );
};
