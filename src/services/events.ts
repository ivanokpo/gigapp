import axios from "axios";
import type { EventType } from "../types/EventType";

const getEventsQuery = (query: string) => {
    
    return axios.get<EventType>(`http://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&apikey=SWRgDWY1NqVLaOZESheIHjNOGAEA8JvA`)
              .then(res => res.data);
};

export const EventService = {
    getEventsQuery
}