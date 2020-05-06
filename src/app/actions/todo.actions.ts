import { TodoActionTypes } from './../shared/enum/todo-actions-types.enum';
import { Action } from '@ngrx/store';

export class ActionParent implements Action {
    type: any;
    payload: any;
}

export class TodoAdd implements ActionParent {
    type: TodoActionTypes.Add
    constructor(public payload: any) { }

}
