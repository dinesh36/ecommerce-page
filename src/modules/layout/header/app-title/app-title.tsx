import { Input } from 'antd';
import styles from './app-title.module.scss';
import menuIconImg from '../../../../../Images/header/menu.png';
import locationImg from '../../../../../Images/header/location.png';
import filterImg from '../../../../../Images/header/Filter.png';

function AppTitle() {
  const selectBefore = (
    <img src={filterImg.src} className={styles.filterImage} alt="hemburg" />
  );

}

export default AppTitle;
