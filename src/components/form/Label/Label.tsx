import classNames from "classnames";
import React, { ComponentProps } from "react";

import styles from "./Label.module.scss";

export interface LabelProps extends Partial<ComponentProps<"label">> {
  /**
   * Adds required asterisk to the label
   * @default false
   */
  required?: boolean;
}

export const Label = ({ children, required, id, ...props }: LabelProps) => {
  return (
    <label
      className={classNames(styles.label, { [styles.required]: required })}
      id={id}
      {...props}
    >
      {children}
    </label>
  );
};
