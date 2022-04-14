import Image from "next/image";
import styles from "./character.module.css";

export function Character() {
  return (
    <div className={styles.container}>
      <div className={styles.device}>
        <Image
          src="/images/home/device.png"
          width={145}
          height={283}
          alt="Telefone"
        />
      </div>
      <div className={styles.bubble}>
        <Image
          src="/images/home/speech-bubble.png"
          width={64}
          height={71}
          alt="Balão"
        />
      </div>
      <div className={styles.character}>
        <Image
          src="/images/home/character.png"
          width={183}
          height={246}
          alt="Personagem"
        />
      </div>
      <div className={styles.background}>
        <Image
          src="/images/home/background.png"
          width={328}
          height={318}
          alt="Fundo"
        />
      </div>
      <hr />
    </div>
  );
}
