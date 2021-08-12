import { Label } from "../Label/Label";
import React, { ReactNode } from "react";
import styles from "./InputWrapper.module.scss";

export interface InputWrapperProps {
  label?: string;
  children: ReactNode;
  className?: string;
  required?: boolean;
  withBorder?: boolean;
  withPadding?: boolean;
}

/**
 * Wrap custom input elements to add a label and optional padding and border
 */
export const InputWrapper = ({
  label,
  className,
  required,
  children,
  withBorder,
  withPadding,
}: InputWrapperProps) => {
  const classList: string[] = [
    "wrapper",
    withBorder ? "withBorder" : "",
    withPadding ? "withPadding" : "",
  ];
  const classNames = classList
    .filter((x) => !!x)
    .map((x) => styles[x])
    .join(" ");
  return (
    <div className={`${classNames} ${className}`}>
      {children}
      {label && <Label required={required}>{label}</Label>}
    </div>
  );
};
