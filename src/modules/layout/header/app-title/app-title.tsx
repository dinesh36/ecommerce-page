import styles from './app-title.module.scss';

function AppTitle() {
  return (
    <div className={styles.appTitle}>
      <span className={styles.primaryColor}>
        LOGO
      </span>
    </div>
  );
}

export default AppTitle;
