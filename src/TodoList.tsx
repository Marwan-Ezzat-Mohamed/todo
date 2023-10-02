import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem";
import { useMemo } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

interface TodoListProps {
  searchQuery: string;
}

const TodoList = ({ searchQuery }: TodoListProps) => {
  const {
    isLoading,
    isError,
    data = null,
  } = useQuery(["todos"], () => {
    return fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => res.json())
      .then((data) => data as Todo[]);
  });

  const filteredData = useMemo(() => {
    return data?.filter((item) => {
      return item.title
        .toLocaleLowerCase()
        .includes(searchQuery.trim().toLocaleLowerCase());
    });
  }, [data, searchQuery]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>error...</div>;
  }

  if (!filteredData?.length) {
    return <div>no data</div>;
  }

  return (
    <div className="space-y-2">
      {filteredData.map((item) => {
        return (
          <TodoItem
            key={item.id}
            title={item.title}
            completed={item.completed}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
