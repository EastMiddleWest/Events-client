import React from 'react';
import styles from './Participants.module.scss';
import { useParams, Link} from 'react-router-dom';
import API from '@/services/api';
import { MyEvent } from '@/types';
import Chart from '../Chart/Chart';


const Participants = () => {
  const {eventId} = useParams()
  const [eventData, setEventData] = React.useState<MyEvent | undefined>(undefined)
  const [loading, setLoading] = React.useState(false)

  React.useLayoutEffect(() => {

    const fetcheventData = async (eventId: string) => {
      setLoading(true)
      const data = await API.getSingleEvent(eventId)
      setEventData(data)
      setLoading(false)
    }

    if(eventId){
      fetcheventData(eventId)
    }
  },[eventId])


  return (
    <section className={styles.section}>
      {eventData && eventData.participants.length > 0 && !loading ?
        <>
          <h1>
            <span className={styles.title}>{eventData?.title+' '}</span>
            participants:
          </h1>
          <div className={styles.grid}>
            <Chart data={eventData.participants}/>
            {eventData?.participants.map(person =>
              <div key={person._id} className={styles.person}>
                <h4>{person.fullName}</h4>
                <p>{person.email}</p>
              </div>
              )}
          </div>
        </>
        :
        loading ?
        <span>please wait...</span>
        :
        <h2>
          No one has registered for this event yet,
          <Link to={`/${eventData?._id}/registration`}>
            be the first!
          </Link>
        </h2>
      }
    </section>
  )
}

export default Participants