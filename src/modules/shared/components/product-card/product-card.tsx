import React from 'react';
import styles from './product-card.module.scss';
import statistics from '../../../../../Images/product-card/statistics@2x.png';
import heart from '../../../../../Images/product-card/heart@2x.png';
import bag from '../../../../../Images/product-card/bag (3).png';

type Props = {
  images: string,
  className?: string,
  title: string,
  minPrice: string,
  maxPrice: string,
  flashSale: string,
  flashSaleItems: string,
};

function ProductCard({
  className, title, minPrice, maxPrice, flashSale, flashSaleItems, images,
}: Props) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.flashSale}>
        <div className={styles.flashSaleContent}>
          <div className={styles.shoppingIcon}>
            <img src={bag.src} alt="bag" />
            <span>{flashSaleItems}</span>
          </div>
          <h6>
            <b>Ends : </b>
            {flashSale}
          </h6>
        </div>
      </div>
      <div className={styles.action}>
        <button type="button">
          <img src={statistics.src} alt="statistics" />
        </button>
        <button type="button">
          <img src={heart.src} alt="heart" />
        </button>
      </div>
      <div className={styles.imgContainer}>
        <img src={images} alt={title} />
      </div>
      <div className={styles.content}>
        <h1>{title}</h1>
        <span>Online Price Range</span>
        <h2>
          {`${minPrice} - ${minPrice}`}
        </h2>
      </div>
    </div>
  );
}

ProductCard.defaultProps = {
  className: '',
};

export default ProductCard;
