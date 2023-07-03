import React from "react";

import Typography from "@src/components/typography";

import styles from "../style.module.css";

type Props = {
  title: string;
  image: string;
  price: string;
};

const Card: React.FC<Props> = ({ title, image, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <Typography variant="title">{title}</Typography>
        <Typography variant="text" className={styles.price}>
          {price}
        </Typography>
      </div>
    </div>
  );
};

export default Card;
