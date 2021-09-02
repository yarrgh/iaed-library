import classNames from "classnames";
import { InlineSpinner } from "components/InlineSpinner/InlineSpinner";
import React, { ButtonHTMLAttributes, ComponentType, forwardRef } from "react";
import styles from "./button.module.scss";

/**
 * Button style name
 */
export type ButtonVariant = "primary" | "accent" | "danger" | "dangerInverse";

/**
 * Button type
 */
export type ButtonType = "submit" | "reset" | "button";

/**
 * Button size
 */
export type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Sets the button variant type
   * @default primary
   */
  variant?: ButtonVariant;

  /**
   * Sets the button type.
   * @default submit
   */
  type?: ButtonType;

  /**
   * Sets the button size
   * @default medium
   */
  size?: ButtonSize;

  isLoading?: boolean;
  icon?: ComponentType;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant: buttonStyle = "primary",
      size = "medium",
      disabled,
      isLoading,
      children,
      icon,
      ...rest
    },
    ref
  ) => {
    const ButtonIcon = isLoading ? InlineSpinner : icon;

    return (
      <button
        {...rest}
        disabled={disabled || isLoading}
        className={classNames(
          styles.button,
          [styles[buttonStyle]],
          [styles[size]],
          {
            [styles.disabled]: disabled,
          }
        )}
        ref={ref}
      >
        <div className={styles.btnContent}>
          {ButtonIcon && <ButtonIcon />}
          <div>{children}</div>
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";
