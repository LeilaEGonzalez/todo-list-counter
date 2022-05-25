import { FetchTodosActions, DeleteTodoAction } from './todos';

export enum ActionTypes {
	fetchTodos,
	deleteTodo,
}
export type Action = FetchTodosActions | DeleteTodoAction;
