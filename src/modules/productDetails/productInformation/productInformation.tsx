import styles from './productInformation.module.scss';
import mobile from '../../../../Images/preview/mobilePreview1.png';
import mobile2 from '../../../../Images/preview/mobilePreview2.png';
import mobile3 from '../../../../Images/preview/mobilePreview3.png';
import mobile4 from '../../../../Images/preview/mobilePreview4.png';
import mobile5 from '../../../../Images/preview/mobilePreview5.1.png';
import mobile6 from '../../../../Images/preview/mobilePreview5.png';
import share from '../../../../Images/preview/share.png';
import heart from '../../../../Images/preview/heart.png';
import statistics from '../../../../Images/preview/statistics.png';
import watchlist from '../../../../Images/preview/watchlist.png';
import comments from '../../../../Images/preview/comments.png';
import star from '../../../../Images/preview/starFull.svg';
import starEmpty from '../../../../Images/preview/starEmpty.svg';

export default function ProductInformation() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imagePreview}>
          <div className={styles.images}>
            <img src={mobile.src} alt="" />
          </div>
          <div className={styles.images}>
            <img src={mobile2.src} alt="" />
          </div>
          <div className={styles.images}>
            <img src={mobile5.src} alt="" />
          </div>
          <div className={styles.images}>
            <img src={mobile3.src} alt="" />
          </div>
          <div className={styles.images}>
            <img src={mobile4.src} alt="" />
          </div>
          <div className={styles.images}>
            <img src={mobile6.src} alt="" />
          </div>
        </div>
        <div className={styles.mainImage}>
          <img src={mobile.src} className={styles.centerImage} alt="mainProductDetails" />
        </div>
        <div className={styles.socialIcon}>
          <div className={styles.roundIcon}>
            <img src={share.src} className={styles.roundImage} alt="share" />
          </div>
          <div className={styles.textDetails}>13.5k</div>
          <div className={styles.roundIcon}>
            <img src={watchlist.src} className={styles.roundImage} alt="share" />
          </div>
          <div className={styles.textDetails}>13.5k</div>
          <div className={styles.roundIcon}>
            <img src={heart.src} className={styles.roundImage} alt="share" />
          </div>
          <div className={styles.textDetails}>13.5k</div>
          <div className={styles.roundIcon}>
            <img src={comments.src} className={styles.roundImage} alt="share" />
          </div>
          <div className={styles.textDetails}>13.5k</div>
          <div className={styles.roundIcon}>
            <img src={statistics.src} className={styles.roundImage} alt="share" />
          </div>
          <div className={styles.textDetails}>13.5k</div>
        </div>
      </div>
      <div className={styles.productHeading}>SAMSUNG Galaxy S20 FE 5G</div>

      <div className={styles.starRating}>
        <img src={star.src} className={styles.star} alt="star" />
        <img src={star.src} className={styles.star} alt="star" />
        <img src={star.src} className={styles.star} alt="star" />
        <img src={star.src} className={styles.star} alt="star" />
        <img src={starEmpty.src} className={styles.star} alt="star" />
        <p>(7,114 rating)</p>
      </div>
      <div className={styles.desc}>
        {/* eslint-disable-next-line max-len */}
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </>
  );
}
