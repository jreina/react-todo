import React from "react";
import { Todo } from "../models/Todo";
import TodoService from "../services/TodoService";

export const TodoLaneItem = ({ item }: { item: Todo }) => (
  <div className="card">
      <div className="card-body">
        {item.title}
      </div>
      <div className="card-footer">
          {!item.isInProgress && !item.isComplete ? null : <div className="btn btn-success" onClick={() => TodoService.markNew(item)}>Mark New</div>}
          {item.isComplete ? null : <div className="btn btn-success" onClick={() => TodoService.markComplete(item)}>Mark Done</div>}
          {item.isInProgress ? null : <div className="btn btn-success" onClick={() => TodoService.markInProgress(item)}>Mark In-Progress</div>}
      </div>
  </div>
);
