import { useState } from 'react';
import { SearchResultItem } from '@/components/SearchResultItem';
import { EventItemModal } from '@/pages/events/_components/EventItemModal';
import type { EventObjectType } from '@/types/event';


type EventSearchResultItemProps = {
  data: EventObjectType;
};

export const EventSearchResultItem = (props: EventSearchResultItemProps) => {
  const { data: event } = props;
  const [openModal, setOpenModal] = useState(false);

  const openModalSetter = () => {
    setOpenModal(!openModal);
  };
  const imageUrl = `${
    event?.images?.filter((x) => x.url.includes('ARTIST')) &&
    event?.images?.filter((x) => x.url.includes('ARTIST')).length > 0
      ? event?.images?.filter((x) => x.url.includes('ARTIST'))[0].url
      : 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg'
  }`;

  return (
    <>
      <SearchResultItem
        title={event.name}
        date={event.dates?.start.localDate ?? 'TBC'}
        url={imageUrl}
        onClick={openModalSetter}
        ticketUrl={event.url}
      />
      {event && (
        <EventItemModal
          isOpen={openModal}
          event={event}
          onClose={openModalSetter}
          imageUrl={imageUrl}
          venues={event._embedded?.venues}
          attractions={event._embedded?.attractions}
          type={event.type}
        />
      )}
    </>
  );
};
