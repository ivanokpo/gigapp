import { ItemModal } from '../../../components/ItemModal';
import type { EventSearchResultItemType } from './EventSearchResultItem';
import type { EmbeddedVenue } from '../../../types/EmbeddedVenue';
import type { EmbeddedAttraction } from '../../../types/EmbeddedAttraction';

type EventItemModal = {
  isOpen: boolean;
  event: EventSearchResultItemType;
  onClose: () => void;
  imageUrl: string;
  venues?: EmbeddedVenue[];
  attractions?: EmbeddedAttraction[];
  type: string;
};
export const EventItemModal = (props: EventItemModal) => {
  const { isOpen, event, onClose, imageUrl, venues, attractions } = props;

  return (
    <ItemModal
      isOpen={isOpen}
      title={event.name}
      date={event.dates?.start.localDate ?? 'TBC'}
      onClose={onClose}
      ticketUrl={event.url ?? 'TBC'}
      imageUrl={imageUrl}
      venueDetails={venues}
      attractionDetails={attractions}
      type={event.type}
    />
  );
};
