import axios from "axios";
import type { EventType } from "../types/EventType";
import { API_KEY, API_URL } from "../../config";


const getEventsQuery = (query: string) => {
    console.log('vars',import.meta.env)
    return axios.get<EventType>(`${API_URL}/events.json?keyword=${query}&apikey=${API_KEY}`)
              .then(res => res.data);
};

export const EventService = {
    getEventsQuery
}