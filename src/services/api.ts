import axios, { type AxiosResponse } from "axios";
import {type MyEvent, Participant } from '@/types';

const instanceAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

type ParticipantFormData = Omit<Participant, '_id' | 'registartionDate'>

export default class API {
  static readonly path = {
    getEvents: '/events'

  }

  static getEvents = async (page: number, sort: string, order: string) => {
    const url = new URL(this.path.getEvents, import.meta.env.VITE_API_URL)
    url.searchParams.append('page', String(page))
    url.searchParams.append('sort', sort)
    url.searchParams.append('order', order)
    try {
      const { data, headers } = await instanceAxios.get<MyEvent[]>(url.pathname + url.search)
      const totalPages = Number(headers['x-total-count']) -1
      return { data, totalPages }
    } catch (error) {
      console.log(error)
      return undefined
    }
  }

  static getSingleEvent = async (id: string) => {
    const url = new URL(`${this.path.getEvents}/${id}`, import.meta.env.VITE_API_URL)
    try {
      const { data } = await instanceAxios.get<MyEvent | null>(url.pathname)
      return data || undefined
    } catch (error) {
      console.log(error)
      return undefined
    }
  }

  static addParticipantToEvent = async (id: string, data: ParticipantFormData, signal?: AbortSignal) => {
    const url = new URL(`${this.path.getEvents}/${id}`, import.meta.env.VITE_API_URL)
    try {
      await instanceAxios.put<AxiosResponse, AxiosResponse,ParticipantFormData>(url.pathname, data,{signal})
      return 'Ok'
    } catch (error) {
      console.log(error)
      return undefined
    }
  }
}