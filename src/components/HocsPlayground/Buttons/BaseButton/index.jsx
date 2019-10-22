import React from "react";

import cn from "classnames";
import styles from "./styles.module.css";

const getButtonClassName = (size, color, position, margin) =>
  cn(styles.button, {
    [styles.buttonSizeSmall]: size === "small",
    [styles.buttonSizeMedium]: size === "medium",
    [styles.buttonSizeLarge]: size === "large",
    [styles.buttonThemePrimary]: color === "primary",
    [styles.buttonThemeDefault]: color === "default"
  });

const BaseButton = ({
  size = "small",
  color = "default",
  onClick,
  onMouseOn,
  children,
  position,
  margin,
  degree
}) => {
  return (
    <button
      onMouseUp={onMouseOn}
      onClick={onClick}
      className={getButtonClassName(size, color)}
      style={{
        position: `${position ? position : "initial"}`,
        "marginTop": `${margin ? margin : "initial"}`,
        transform: `rotate(-${degree}deg)`
      }}
    >
      {children}
    </button>
  );
};

export default BaseButton;
