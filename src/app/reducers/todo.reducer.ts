import { Todo } from './../shared/models/todo';
import { ActionParent } from './../actions/todo.actions';
import { TodoActionTypes } from './../shared/enum/todo-actions-types.enum';

export const initialState: Todo[] = [
    { title: "todo 1" },
    { title: "todo 2" },
    { title: "todo 3" }
]

export function TodoReducer(state = initialState, action: ActionParent) {
    switch (action.type) {
        default: return state
    }

}