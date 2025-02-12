import React from "react";
import styles from "./IconButton.module.scss";
import Image from "next/image";

type IconButtonProps = {
  color?: "orange" | "gray" | "white";
  url: string;
};

// export const IconButton: React.FC<IconButtonProps> = ({
//     color = "gray",
//     url,
// }) => {
//     return (
//         <button className={`${styles.button} ${styles[`button-${color}`]}`}>
//             <Image src={url} alt="icon" width={24} height={24} />
//         </button>
//     );
// };

import { easeOut, motion } from "framer-motion";
import { useState } from "react";

const circleBaseStyle = {
  width: 10,
  height: 10,
  borderRadius: "50%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: -1,
};

const colors = ["#41BCFF", "#2ADA6E", "#FFC80B", "#FF9F40", "#E54671"];

export const IconButton: React.FC<IconButtonProps> = ({
  url,
  color = "gray",
}) => {
  const [isTapped, setIsTapped] = useState(false);

  const RandomCircle = (function () {
    const list = [];
    for (let i = 0; i < 10; i++) {
      const randomX = Math.floor(Math.random() * 301 - 150);
      const randomY = Math.floor(Math.random() * 301 - 150);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      list.push(
        <motion.div
          key={i}
          initial={{
            scale: 1.8,
            opacity: 1,
            position: "absolute",
            zIndex: 0,
          }}
          animate={{
            x: randomX,
            y: randomY,
            opacity: 0,
            scale: 0.8,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          style={{ ...circleBaseStyle, backgroundColor: randomColor }}
          onAnimationComplete={() => setIsTapped(false)}
        />
      );
    }
    return <div>{list}</div>;
  })();

  return (
    <div style={{ position: "relative", height: "fit-content" }}>
      <motion.button
        initial={{ scale: 1, position: "relative", zIndex: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onMouseDown={() => setIsTapped(true)}
        transition={{
          duration: 0.1,
          ease: easeOut,
        }}
        className={`${styles.button} ${styles[`button-${color}`]}`}
      >
        <Image src={url} alt="icon" width={24} height={24} />
      </motion.button>
      {isTapped && RandomCircle}
    </div>
  );
};
