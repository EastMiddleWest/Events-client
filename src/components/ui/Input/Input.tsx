import classNames from 'classnames';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import styles from './Input.module.scss';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, ...rest }, ref) => {

    const inputClassName = classNames(styles.input, {
      [styles['input-error']]: errorMessage,
    });


    return (
      <div className={styles['input-group']}>
        <input
          {...rest}
          //type='text'
          ref={ref}
          className={inputClassName}
        />
        {!!errorMessage && <span className={styles.error}>{errorMessage}</span>}
      </div>
    );
  }
);

export default Input;