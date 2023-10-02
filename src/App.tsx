import { useEffect, useState } from "react";

import TodoList from "./TodoList";

export default function App() {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-5">
      <div className="flex justify-center">
        <h1 className="mr-2 font-bold text-2xl">search</h1>
        <input
          type="text"
          className="border border-gray-400 rounded-md p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search todo..."
        />
      </div>
      <TodoList searchQuery={search} />
    </div>
  );
}
