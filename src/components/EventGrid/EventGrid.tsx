
import styles from './EventGrid.module.scss';
import EventCard from '../EventCard/EventCard';
import { MyEvent } from '@/types';


const EventGrid = ({events}: {events: MyEvent[]}) => {

  return (
    <div className={styles.wrapper}>
      {events.map(event =>
        <EventCard
        key={event._id}
        _id={event._id}
        title={event.title}
        description={event.description}
        date={event.date}
        />
        )}
    </div>
  )
}

export default EventGrid