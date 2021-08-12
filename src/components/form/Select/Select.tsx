import React, { ComponentProps, forwardRef, ReactNode } from "react";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { Label } from "../Label/Label";

import styles from "./Select.module.scss";

export interface SelectProps extends ComponentProps<"select"> {
  children: ReactNode;
  label: string;
  required?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, children, name, className, required, ...props }, ref) => {
    const classList: string[] = ["input"];
    const classNames = classList.map((x) => styles[x]).join(" ");

    return (
      <InputWrapper className={className} withBorder>
        <select
          id={name}
          name={name}
          className={classNames}
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
