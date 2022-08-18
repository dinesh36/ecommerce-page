import styles from './condition.module.scss';

export default function Condition() {
  return (
    <>
      <div>Conditions</div>
      <div className={styles.container}>
        <div className={styles.conditionBox}>New</div>
        <div className={styles.conditionBox}>New-Open Box</div>
        <div className={styles.conditionBox}>Used-Like New</div>
        <div className={styles.conditionBox}>Used-Good</div>
        <div className={styles.conditionBox}>Used-Acceptable</div>
        <div className={styles.conditionBox}>Refurbished</div>
      </div>
      <div className={styles.colorHeading}>Color</div>
      <div className={styles.colorBoxContainer}>
        <div className={styles.colorBox}>
          <div className={styles.color1} />
          <div className={styles.colorName}>Blue</div>
        </div>
        <div className={styles.colorBox}>
          <div className={styles.color2} />
          <div className={styles.colorName}>Green</div>
        </div>
        <div className={styles.colorBox}>
          <div className={styles.color3} />
          <div className={styles.colorName}>Black</div>
        </div>
        <div className={styles.colorBox}>
          <div className={styles.color4} />
          <div className={styles.colorName}>Orange</div>
        </div>
      </div>
    </>
  );
}
