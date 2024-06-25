// components/Infobox.tsx
import styles from './infobox.module.css';

interface InfoboxProps {
  imageSrc: string;
  fullName: string;
  age: string;
  description: string;
}

export default function Infobox({ imageSrc, fullName, age, description }: InfoboxProps) {
  return (
    <div className={styles.infobox}>
      <img src={imageSrc} alt={`${fullName} image`} className={styles.infoboxImage} />
      <p><strong>Full Name:</strong> {fullName}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
}
