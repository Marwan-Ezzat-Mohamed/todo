interface Todo {
  title: string;
  completed: boolean;
}

const TodoItem = ({ title, completed }: Todo) => {
  return (
    <li className="flex justify-between items-center">
      <label
        className={`${
          completed ? "line-through text-gray-400" : ""
        } cursor-pointer`}
      >
        {title}
      </label>
    </li>
  );
};
export default TodoItem;
