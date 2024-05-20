import styles from './AsyncButton.module.scss';
import classNames from 'classnames';

type Props = {
  status: 'idle' | 'loading' | 'succes'| 'error';
  disabled: boolean
}

const Loading = () => {
  return(
    <div className={styles.loading}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

const AsyncButton = ({status, disabled}: Props) => {

  const buttonClName = classNames(styles.btn,{
    [styles['btn-loading']]: status === 'loading',
    [styles['btn-succes']]: status === 'succes',
    [styles['btn-error']]: status === 'error'
  })

  return (
    <div className={styles['btn-wrapper']}>
      <button type='submit' disabled={disabled} className={buttonClName}>
        {
          status === 'succes' ?
          'Succes' :
          status === 'loading' ?
          <Loading/> :
          status === 'error' ?
          'Error' :
          'Register'
        }
      </button>
    </div>
  )
}

export default AsyncButton