import { ItemModal } from '@/components/ItemModal';
import type { EmbeddedAttractionsObjectType, EmbeddedVenuesObjectType, EventObjectType } from '@/types/event';

type EventItemModal = {
  isOpen: boolean;
  event: EventObjectType;
  onClose: () => void;
  imageUrl: string;
  venues?: EmbeddedVenuesObjectType[];
  attractions?: EmbeddedAttractionsObjectType[];
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
      ticketUrl={event.url ?? undefined}
      imageUrl={imageUrl}
      venueDetails={venues}
      attractionDetails={attractions}
      type={event.type}
      key={event.id}
      accessibilityDetails={event.accessibility}
    />
  );
};
