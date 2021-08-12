import React, { ComponentProps } from "react";

import styles from "./Label.module.scss";

export interface LabelProps extends ComponentProps<"label"> {
  /**
   * Adds required asterisk to the label
   * @default false
   */
  required?: boolean;
}

export const Label = ({ children, required, id, ...props }: LabelProps) => {
  const classList: string[] = ["label", required ? "required" : ""];
  const classNames = classList.map((x) => styles[x]).join(" ");
  return (
    <label className={classNames} id={id} {...props}>
      {children}
    </label>
  );
};
