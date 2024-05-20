import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';

import styles from './RadioButton.module.scss';

interface RadioButtonProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, ...rest }, ref) => {
    const id = useId();

    return (
      <div className={styles['radiobtn-container']}>
        <input
          {...rest}
          id={id}
          type="radio"
          ref={ref}
          className={styles.input}
        />
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      </div>
    );
  }
);

export default RadioButton;