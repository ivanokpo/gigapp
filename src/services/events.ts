import axios from "axios";
import type { EventType } from "../types/EventType";
import { API_KEY, API_URL } from "../../config";


const getEventsQuery = async (query: string) => {
    await new Promise(r => setTimeout(r, 1000));
    return await axios.get<EventType>(`${API_URL}/events.json?keyword=${query}&apikey=${API_KEY}`)
              .then(res => res.data)
              .catch(error => console.log(error));
};



export const EventService = {
    getEventsQuery
}