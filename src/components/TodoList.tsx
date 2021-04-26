// src/components/TodoList.tsx
import React, { useState } from "react";
import TodoItem from "./TodoItem";

import { Item } from "../model"; // we need to import the type

export default function TodoList() {
  // note the <Item[]> syntax!
  const [list, setList] = useState<Item[]>([
    {
      id: 0,
      text: "Make this app",
      tags: ["react", "typescript"],
      isDone: false,
    },
    {
      id: 1,
      text: "Fall in love with TypeScript",
      tags: ["romantic", "typescript"],
      isDone: false,
    },
  ]);

  const toggle = (id: number) => {
    // TODO implement. Tip: use map
  };

  return <div></div>;
}

//  <p>
//         {list.map((item) => {
//           return <TodoItem />;
//         })}
//       </p>
//       <TodoItem key={item.id} item={item} toggleDone={() => toggle(id)} />
