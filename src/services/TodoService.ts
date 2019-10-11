import { Todo } from "../models/Todo";
import { Subject } from 'rxjs';

class TodoService {
    private _todos: Array<Todo> = [];
    todos: Subject<Array<Todo>> = new Subject();

    add(title: string) {
        const todo: Todo = {
            isComplete: false,
            isInProgress: false,
            title
        };

        this._todos.push(todo);
        this.todos.next(this._todos);
    }

    remove(item: Todo) {
        const idx = this._todos.findIndex(x => x === item);
        this._todos.splice(idx, 1);
        this.todos.next(this._todos);
    }

    markComplete(item: Todo) {
        item.isComplete = true;
        item.isInProgress = false;
        this.todos.next(this._todos);
    }

    markInProgress(item: Todo) {
        item.isInProgress = true;
        item.isComplete = false;
        this.todos.next(this._todos);
    }

    markNew(item: Todo) {
        item.isInProgress = false;
        item.isComplete = false;
        this.todos.next(this._todos);
    }
}

export default new TodoService();