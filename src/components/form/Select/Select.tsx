import React, { forwardRef, SelectHTMLAttributes } from "react";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { Label } from "../Label/Label";

import styles from "./Select.module.scss";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, children, name, className, required, error, hint, ...props },
    ref
  ) => {
    return (
      <InputWrapper className={className} withBorder error={error} hint={hint}>
        <select
          id={name}
          name={name}
          className={styles.input}
          {...props}
          ref={ref}
        >
          {children}
        </select>
        <Label htmlFor={name} required={required}>
          {label}
        </Label>
      </InputWrapper>
    );
  }
);

Select.displayName = "Select";
