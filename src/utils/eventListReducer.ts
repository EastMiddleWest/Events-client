import { type MyEvent } from "@/types";
import { type Reducer } from "react";

export type EventListState = {
  data: MyEvent[],
  currentPage: number;
  totalPages: number;
  status: 'idle' | 'loading' | 'error';
  sort: 'title' | 'date';
  order: 'asc' | 'desc'
}

export const initialState: EventListState = {
  data: [],
  currentPage: 0,
  totalPages: 0,
  status: 'idle',
  sort: 'date',
  order: 'asc'
}

type SetDataAction = {
  type: 'set data';
  payload: MyEvent[];
}

type AddDataAction = {
  type: 'add data';
  payload: MyEvent[];
}

type ToggleStatusAction = {
  type: 'toggle status';
  payload: EventListState['status'];
}

type SetCurrentPageAction = {
  type: 'set page';
  payload: number;
}

type SetTotalPagesAction = {
  type: 'set total';
  payload: number;
}

type SetSortType = {
  type: 'set sort';
  payload: EventListState['sort'];
}

type SetSortOrderType = {
  type: 'set sort order';
  payload: EventListState['order'];
}

type Action =
| SetDataAction
| AddDataAction
| ToggleStatusAction
| SetCurrentPageAction
| SetTotalPagesAction
| SetSortType
| SetSortOrderType

export const reducer: Reducer<EventListState, Action> =
(state, action) => {
  switch (action.type) {
    case 'set data':
      return {...state, data: action.payload}
    case 'add data':
      return {...state, data: [...state.data, ...action.payload]}
    case 'toggle status':
      return {...state, status: action.payload}
    case 'set page':
      return {...state, currentPage: action.payload}
    case 'set total':
      return {...state, totalPages: action.payload}
    case 'set sort':
      return {...state, sort: action.payload}
    case 'set sort order':
      return {...state, order: action.payload}
    default: return state
  }
}