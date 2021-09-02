import { Label } from "../Label/Label";
import React, { forwardRef, InputHTMLAttributes } from "react";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import styles from "./TextInput.module.scss";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label text for the text input
   */
  label?: string;
  error?: string;
  hint?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type = "text",
      required,
      label,
      className,
      name,
      error,
      hint,
      ...props
    }: TextInputProps,
    ref
  ) => {
    return (
      <InputWrapper className={className} withBorder error={error} hint={hint}>
        <input
          {...props}
          id={name}
          name={name}
          type={type}
          className={styles.input}
          ref={ref}
        />
        <Label htmlFor={name} required={required}>
          {label}
        </Label>
      </InputWrapper>
    );
  }
);

TextInput.displayName = "TextInput";
