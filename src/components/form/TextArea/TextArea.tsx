import { Label } from "../Label/Label";
import React, { forwardRef, TextareaHTMLAttributes } from "react";
import { InputWrapper } from "../InputWrapper/InputWrapper";

import styles from "./TextArea.module.scss";

export type TextAreaSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Label text for the text input
   */
  label: string;

  /**
   * Set the height of the textarea
   */
  size?: TextAreaSize;
  error?: string;
  hint?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      required,
      label,
      size = "medium",
      className,
      name,
      error,
      hint,
      ...props
    },
    ref
  ) => {
    const classList: string[] = ["input", size];
    const classNames = classList.map((x) => styles[x]).join(" ");
    return (
      <InputWrapper className={className} withBorder error={error} hint={hint}>
        <textarea
          {...props}
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
