import React, { useState } from "react";

// Icons
import {
  XMarkIcon,
  SunIcon,
  MoonIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

// Styles
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const [isColorPicking, setIsColorPicking] = useState(false);

  return (
    <aside
      className={styles.wrapper}
      // style
    >
      {isColorPicking ? (
        <>
          <button>a</button>
          <input type="range" />
        </>
      ) : (
        <div className={styles.btns}>
          <button className="btn">
            <MoonIcon />
          </button>
          <button className="btn">
            <SwatchIcon />
          </button>
        </div>
      )
      }
    </aside>
  );
};

export default ThemeSwitcher;
