import axios from 'axios';

import { API_KEY, API_URL } from '@/../config';
import type {EventResponseType } from '@/types/event';

const getEventsQuery = async (query: string) => {
  return await axios
    .get<EventResponseType>(`${API_URL}/events.json?keyword=${query}&apikey=${API_KEY}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const EventService = {
  getEventsQuery,
};
