import classNames from 'classnames';
import React, { ReactNode } from 'react';

import classes from './Hint.module.scss';

interface HintProps {
  isError?: boolean;
  children?: ReactNode;
}

export const Hint = ({ isError, children }: HintProps) => {
  return (
    <p
      className={classNames(classes.hint, {
        [classes.error]: !!isError,
      })}
    >
      {children}
    </p>
  );
};
