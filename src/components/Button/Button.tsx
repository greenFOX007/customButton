import React, { createContext } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";
import Counter from "../Counter/Counter";

type TButton = {
  colorStyle: "primary" | "secondary";
  size?: 28 | 36 | 56 | "default";
  counter?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
  focused?: boolean;
  isLoading?: boolean;
  label?: string;
  type?: "submit" | "button" | "reset" | undefined;
  tabIndex?: number;
};

export default function Button({
  counter,
  size = "default",
  colorStyle = "primary",
  children,
  onClick,
  isDisabled,
  focused,
  isLoading,
  label,
  type,
  tabIndex,
}: TButton) {
  const classes = classNames({
    [styles.button]: true,
    [styles.size_56]: size === 56,
    [styles.size_36]: size === 36,
    [styles.size_28]: size === 28,
    [styles.primary]: colorStyle === "primary",
    [styles.secondary]: colorStyle === "secondary",
    [styles.focused]: focused,
    [styles.isLoading]: isLoading,
  });

  return (
    <button
      aria-disabled={isDisabled || isLoading}
      tabIndex={tabIndex}
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={classes}
    >
      <div className={`${styles.label} ${isLoading && styles.opacity_0}`}>
        {label}
      </div>
      <div className={`${isLoading && styles.opacity_0}`}>
        {counter && children}
      </div>
      {isLoading && <div className={styles.loader}></div>}
    </button>
  );
}

Button.Counter = Counter;
