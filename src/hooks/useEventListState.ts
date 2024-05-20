import React from 'react';
import { initialState, reducer } from '@/utils/eventListReducer';
import API from '@/services/api';

export const useEventListState = () => {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  const fetchData = React.useCallback(async (loadType: 'initial' | 'additional',page: number, sort: string, order: string) => {
    dispatch({type: 'toggle status', payload: 'loading'})
    try {
      const response = await API.getEvents(page, sort, order)
      if(response){
        const actionType = loadType === 'initial' ? 'set data' : 'add data'
        dispatch({type: actionType, payload: response.data})
        dispatch({type: 'set total', payload: response.totalPages})
      }
        dispatch({type: 'toggle status', payload: 'idle'})
    } catch (error) {
      dispatch({type: 'toggle status', payload: 'error'})
    }
  },[])

  React.useEffect(() => {
    fetchData('initial',0, state.sort, state.order)
  },[fetchData, state.sort, state.order])

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const {scrollHeight, scrollTop, offsetHeight} = e.target as HTMLElement
    if(scrollHeight - (scrollTop + offsetHeight) < 100){
      if(state.status === 'idle' && state.currentPage < state.totalPages){
        fetchData('additional', state.currentPage + 1, state.sort, state.order)
        dispatch({type: 'set page', payload: state.currentPage + 1})
      }
    }
  }

  const toggleSortType = () => {
    const newSortType = state.sort === 'date' ? 'title' : 'date'
    dispatch({type: 'set sort', payload: newSortType})
    dispatch({type: 'set page', payload: 0})
  }

  const toggleOrderType = () => {
    const newOrderType = state.order === 'asc' ? 'desc' : 'asc'
    dispatch({type: 'set sort order', payload: newOrderType})
    dispatch({type: 'set page', payload: 0})
  }

  return {
    state,
    handleScroll,
    toggleSortType,
    toggleOrderType
  }
}
