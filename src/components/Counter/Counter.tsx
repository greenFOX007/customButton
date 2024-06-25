import classNames from "classnames";
import styles from "./Counter.module.css";

type TCounter = {
  colorStyle: "primary" | "secondary";
  size?: 8 | 12 | 16 | 20 | 24 | "default";
  stroke?: boolean;
  children?: React.ReactNode;
  pulse?: boolean;
};

export default function Counter({
  children,
  colorStyle = "primary",
  pulse = true,
  size = 12,
  stroke = false,
}: TCounter) {
  const classes = classNames({
    [styles.live_indicator]: true,
    [styles.size_8]: size === 8,
    [styles.size_12]: size === 12,
    [styles.size_16]: size === 16,
    [styles.size_20]: size === 20,
    [styles.size_24]: size === 24,
    [styles.primary]: colorStyle === "primary",
    [styles.secondary]: colorStyle === "secondary",
    [styles.stroke]: stroke,
  });

  const changeChildrenValue = (item: React.ReactNode) => {
    if (!isNaN(Number(item)) && Number(item) > 99) {
      return "99+";
    }
    if (String(children).length > 3) {
      return String(item).slice(0, 3);
    }
  };

  return (
    <div className={classes}>
      <div className={`${styles.dot} `}>
        {size !== 8 && size !== 12 && children && changeChildrenValue(children)}
      </div>
      <div className={`${pulse && styles.pulse}`}></div>
      <div className={`${pulse && styles.pulse} ${styles.two}`}></div>
    </div>
  );
}
