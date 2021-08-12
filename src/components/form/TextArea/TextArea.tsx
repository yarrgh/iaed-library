import { Label } from "../Label/Label";
import React, { ComponentProps, forwardRef } from "react";
import { InputWrapper } from "../InputWrapper/InputWrapper";

import styles from "./TextArea.module.scss";

export type TextAreaSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export interface TextAreaProps extends ComponentProps<"textarea"> {
  /**
   * Add the 'Required' asterisk to the input label
   * @default false
   */
  required?: boolean;

  /**
   * Mark the text input as disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Label text for the text input
   */
  label: string;

  /**
   * Set the height of the textarea
   */
  size?: TextAreaSize;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { required, disabled, label, size = "medium", className, name, ...props },
    ref
  ) => {
    const classList: string[] = ["input", size];
    const classNames = classList.map((x) => styles[x]).join(" ");
    return (
      <InputWrapper className={className} withBorder>
        <textarea
          {...props}
          disabled={disabled}
          required={required}
          className={classNames}
          id={name}
          name={name}
          ref={ref}
        />
        <Label htmlFor={name} required={required}>
          {label}
        </Label>
      </InputWrapper>
    );
  }
);

TextArea.displayName = "TextArea";
