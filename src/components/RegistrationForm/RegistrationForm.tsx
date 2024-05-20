import React from 'react';
import styles from './RegistrationForm.module.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RegisterValues, registerSchema, VariantsEnum} from '@/utils/validationSchema';
import API from '@/services/api';
import { useParams, useNavigate} from 'react-router-dom';

import Input from '../ui/Input/Input';
import RadioButton from '../ui/RadioButton/RadioButton';
import AsyncButton from '../ui/AsyncButton/AsyncButton';

const RegistrationForm = () => {

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<RegisterValues>({
    defaultValues: {
      fullName: '',
      email: '',
      dateOfBirth: '',
      source: undefined
    },
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const {eventId} = useParams()
  const navigate = useNavigate()

  const [status, setStatus] = React.useState<'idle' | 'loading' | 'succes'| 'error'>('idle')
  const controllerRef = React.useRef<AbortController | null>(null)

  const onSubmit = async (formData: RegisterValues) => {
    if(!eventId || controllerRef.current) return
    controllerRef.current = new AbortController()
    setStatus('loading')
    const res = await API.addParticipantToEvent(eventId,formData, controllerRef.current.signal)
    if(res) {
      setStatus('succes')
      setTimeout(() => {
        navigate('/')
      },1000)
    } else setStatus('error')
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Event registration</h2>
      <Input
        {...register('fullName')}
        placeholder='Full name'
        errorMessage={errors.fullName?.message}
        />
      <Input
        {...register('email')}
        placeholder='Email'
        errorMessage={errors.email?.message}
        />
      <Input
        {...register('dateOfBirth')}
        type='date'
        placeholder='Date of Birth'
        errorMessage={errors.dateOfBirth?.message}
        />
      <h4>Where did you hear about this event?</h4>
      <div className={styles.radio}>
        {Object.values(VariantsEnum.Values).map(variant =>
          <RadioButton
            {...register('source')}
            key={variant}
            value={variant}
            label={variant}
          />
          )}
      </div>
      <AsyncButton status={status} disabled={!isValid} />
    </form>
  )
}

export default RegistrationForm