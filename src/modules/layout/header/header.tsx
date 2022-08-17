import styles from './header.module.scss';
import menuIconImg from '../../../../public/images/header/menu.png';
import locationImg from '../../../../public/images/header/location.png';
import filterImg from '../../../../public/images/header/filter.png';
import closeImg from '../../../../public/images/header/close.png';
import searchImg from '../../../../public/images/header/search.png';
import roadShowImg from '../../../../public/images/header/roadShow.png';
import trendingImg from '../../../../public/images/header/trending.png';
import cartImg from '../../../../public/images/header/cart.png';
import userAvatarImg from '../../../../public/images/header/user-avatar.png';

function Header() {
  const renderLeftMenu = () => {
    const menuItems = [
      { title: 'Menu', image: menuIconImg.src },
      { title: 'Location', image: locationImg.src },
    ];
    return (
      <div className={styles.leftMenu}>
        {menuItems.map(({ title, image }) => (
          <div className={styles.menuItem} key={title}>
            <img src={image} className={styles.menuIcon} alt={title} />
            <span className={styles.menuTitle}>{title}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderInput = () => (
    <div className={styles.searchContainer}>
      <button type="button" className={styles.filterContainer}>
        <img src={filterImg.src} alt="filter icon" />
      </button>
      <button type="button" className={styles.searchIconContainer}>
        <img src={searchImg.src} alt="search icon" />
      </button>
      <input />
      <button type="button" className={styles.closeIconContainer}>
        <img src={closeImg.src} alt="close icon" />
      </button>
    </div>
  );

  const renderRightMenu = () => {
    const menuItems = [
      { alt: 'Road Show', title: 'Road Show', image: roadShowImg.src },
      { alt: 'Trending', title: '', image: trendingImg.src },
      { alt: 'Cart', title: '', image: cartImg.src },
    ];
    return (
      <div className={styles.rightMenu}>
        {menuItems.map(({ title, image, alt }) => (
          <div className={styles.menuItem} key={alt} data-alt={alt}>
            <img src={image} className={styles.menuIcon} alt={alt} />
            {title && <span className={styles.menuTitle}>{title}</span>}
          </div>
        ))}
      </div>
    );
  };

  const renderUserDetails = () => {
    const userName = 'Martha';
    return (
      <div className={styles.userAvatarContainer}>
      <img src={userAvatarImg.src} alt="user avatar" />
        <div className={styles.userName}>
          Hi
          {' '}
          {userName}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.thin}>LO</span>
        <span className={styles.fat}>go</span>
      </div>
      <div className={styles.centerPart}>
        {renderLeftMenu()}
        {renderInput()}
        {renderRightMenu()}
      </div>
      {renderUserDetails()}
    </div>
  );
}

export default Header;
