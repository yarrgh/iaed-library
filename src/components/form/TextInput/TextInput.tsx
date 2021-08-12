import { Label } from "../Label/Label";
import React, { ComponentProps, forwardRef } from "react";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import styles from "./TextInput.module.scss";

export type TextType =
  | "text"
  | "number"
  | "email"
  | "tel"
  | "email"
  | "url"
  | "search"
  | "password";

export interface TextInputProps extends ComponentProps<"input"> {
  /**
   * Add the 'Required' asterisk to the input label
   * @default false
   */
  required?: boolean;

  /**
   * Set the input type
   * @default 'text'
   */
  type?: TextType;

  /**
   * Mark the text input as disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Label text for the text input
   */
  label: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type = "text",
      required,
      disabled,
      label,
      className,
      name,
      ...props
    }: TextInputProps,
    ref
  ) => {
    return (
      <InputWrapper className={`${styles.wrapper} ${className}`} withBorder>
        <input
          {...props}
          id={name}
          name={name}
          type={type}
          disabled={disabled}
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
