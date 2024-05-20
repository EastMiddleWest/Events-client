import styles from './Home.module.scss';
import EventGrid from '@/components/EventGrid/EventGrid';
import Switch from '@/components/ui/Switch/Switch';

import { useEventListState } from '@/hooks/useEventListState';

const Home = () => {

  const {state, handleScroll, toggleOrderType, toggleSortType} = useEventListState()

  return (
    <section className={styles.section} onScroll={handleScroll}>
      <div className={styles.control}>
        <div className={styles.sort}>
          <strong>Sort by:</strong>
          <span className={styles['sort_value']}>Date</span>
          <Switch
            key='sort'
            checked={state.sort === 'title'}
            onChange={toggleSortType}
          />
          <span className={styles['sort_value']}>Title</span>
        </div>
        <div className={styles.sort}>
          <strong>Order:</strong>
          <div className={styles['sort_options']}>
            <span className={styles['sort_value']}>Asc</span>
            <Switch
              key='order'
              checked={state.order === 'desc'}
              onChange={toggleOrderType}
              />
            <span className={styles['sort_value']}>Desc</span>
          </div>
        </div>
      </div>
      <EventGrid events={state.data}/>
      {state.status === 'loading' &&
        <p className={styles.loading}>please wait...</p>
      }
    </section>
  )
}

export default Home
