import React, { FC, MouseEvent, MouseEventHandler, SFC } from "react";
import { Link } from "react-router-dom";
import classes from "./button.module.scss";

/**
 * Button style name
 */
export type ButtonVariant = "primary" | "accent";

/**
 * Button type
 */
export type ButtonType = "submit" | "reset" | "button";

/**
 * Button size
 */
export type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export interface ButtonProps {

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

  /**
   * Disables changing the width of the button to 100% on mobile screens
   * @default false
   */
  disableMobileFullWidth?: boolean;

  /**
   * Configures the button to behave as a link with the provided href
   * @default undefined
   */
  href?: string;

  /**
   * Sets the button's disabled attribute
   * @default false
   */
  disabled?: boolean;

  /**
   * Sets the button's click handler
   */
  onClick?: (e: MouseEvent) => void;
}

export interface StyledButtonProps {
  block?: boolean;
  buttonStyle?: ButtonVariant;
  size?: ButtonSize;
  disableModuleFullWidth?: boolean;
}

function isRelativeLink(href: string) {
  var r = new RegExp(/^(?:[a-z]+:)?\/\//, "i");
  console.log({ testResult: !r.test(href), href });
  return !r.test(href);
}

export const Button: FC<ButtonProps> = ({
  variant: buttonStyle = "primary",
  size = "medium",
  children,
  href,
  disabled,
  ...rest
}) => {
  const classList: string[] = [
    "button",
    buttonStyle,
    size,
    disabled ? "disabled" : "",
  ];
  const classNames = classList
    .filter((x) => !!x)
    .map((x) => classes[x])
    .join(" ");

  const clickHandler = (e: MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (rest.onClick) {
      rest.onClick(e);
    }
  };

  if (href) {
    if (isRelativeLink(href)) {
      return (
        <Link to={href} {...rest} onClick={clickHandler} className={classNames}>
          <div>{children}</div>
        </Link>
      );
    }
    return (
      <a
        href={href}
        {...rest}
        onClick={clickHandler}
        target="_blank"
        rel="noreferrer noopener"
        className={classNames}
      >
        <div>{children}</div>
      </a>
    );
  }

  return (
    <button
      {...rest}
      onClick={clickHandler}
      disabled={disabled}
      className={classNames}
    >
      <div>{children}</div>
    </button>
  );
};

Button.displayName = "Button";
