import React from "react";
import { Todo } from "../models/Todo";
import { TodoLaneItem } from "./TodoLaneItem";

export const TodoLane = ({ items }: { items: Array<Todo> }) => (
  <div className="list-group">
    {items.map(item => (
      <TodoLaneItem item={item} />
    ))}
  </div>
);
