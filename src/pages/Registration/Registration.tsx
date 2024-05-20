import RegistrationForm from '@/components/RegistrationForm/RegistrationForm'
import styles from './Registration.module.scss';

const Registration = () => {
  return (
    <section className={styles.section}>
      <RegistrationForm/>
    </section>
  )
}

export default Registration