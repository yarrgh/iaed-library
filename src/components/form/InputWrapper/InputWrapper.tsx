import { Label } from "../Label/Label";
import React, { ReactNode } from "react";
import styles from "./InputWrapper.module.scss";
import classNames from "classnames";
import { Hint } from "../Hint/Hint";

export interface InputWrapperProps {
  label?: string;
  children: ReactNode;
  required?: boolean;
  withBorder?: boolean;
  withPadding?: boolean;
  className?: string;
  error?: string;
  hint?: string;
}

/**
 * Wrap custom input elements to add a label and optional padding and border
 */
export const InputWrapper = ({
  label,
  required,
  children,
  withBorder,
  withPadding,
  className,
  error,
  hint,
}: InputWrapperProps) => {
  return (
    <div className={className}>
      <div
        className={classNames(styles.wrapper, {
          [styles.withBorder]: withBorder,
          [styles.withPadding]: withPadding,
          [styles.error]: error,
        })}
      >
        {children}
        {label && <Label required={required}>{label}</Label>}
      </div>
      {!error && hint && <Hint>{hint}</Hint>}
      {error && <Hint isError>{error}</Hint>}
    </div>
  );
};
