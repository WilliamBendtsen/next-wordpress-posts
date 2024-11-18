import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function PostCard({ title, image, link }) {
  return (
    <div className={styles.card}>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className={styles.image}
        />
        <h2 className={styles.title}>{title}</h2>
      </Link>
    </div>
  );
}
