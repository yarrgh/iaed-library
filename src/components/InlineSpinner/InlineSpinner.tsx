import classNames from "classnames";
import React from "react";

import styles from "./InlineSpinner.module.scss";

interface InlineSpinnerProps {
  className?: string;
}

export const InlineSpinner = ({ className }: InlineSpinnerProps) => {
  return (
    <svg
      className={styles.inlineSpinner}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="21" />
    </svg>
  );
};
