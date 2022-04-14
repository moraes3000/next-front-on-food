import Image from "next/image";
import { DisheDetails } from "..";
import styles from "./dishe.module.css";

export function Dishe() {
  return (
    <div className={styles.dishe}>
      <div className={styles.wrapper}>
        <Image
          src="https://storage.googleapis.com/onfood/peperoni.jpg"
          alt="Prato"
          width={592}
          height={312}
          layout="responsive"
        />
      </div>
      <div>
        <div className={styles.header}>
          <h2>Nome do Produto</h2>
        </div>
        <div className={styles.details}>
          <DisheDetails type="reviews" title="(201)" subtitle="4.5" />
          <DisheDetails type="category" title="Categoria" />
          <DisheDetails type="delivery" title="30 - 40 min" />
        </div>
      </div>
    </div>
  );
}
