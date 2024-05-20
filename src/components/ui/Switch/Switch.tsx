import React from 'react'
import styles from './Switch.module.scss';

type SwitchProps = {
  checked: boolean;
  onChange: (value?: boolean) => void
}

const Switch = ({checked, onChange}: SwitchProps) => {

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked
    onChange(value)
  }


  return (
    <label className={styles.container}>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleToggle}
      />
      <span className={styles.indicator} ></span>
    </label>
  )
}

export default Switch