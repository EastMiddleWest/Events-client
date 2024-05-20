
import styles from './EventCard.module.scss';
import { Link } from 'react-router-dom';
import { type MyEvent } from '@/types';


const EventCard = ({_id ,title, description, date}: Omit<MyEvent, 'participants' | 'organizer'>) => {

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <span>{new Date(date).toLocaleDateString()}</span>
      <p>{description}</p>
      <div className={styles.control}>
        <Link to={`/${_id}/registration`} >Register</Link>
        <Link to={`/${_id}`} >View</Link>
      </div>
    </div>
  )
}

export default EventCard