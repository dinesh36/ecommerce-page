import React from 'react';
import styles from './home.module.scss';
import Container from '../shared/components/container/container';
import ProductCard from '../shared/components/product-card/product-card';

import cs from '../../../Images/products/cs@2x.png';

export default function Home() {
  const productData = [
    {
      id: 1,
      title: 'SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell',
      minPrice: '$18299',
      maxPrice: '$28399',
      flashSale: 'Jan 08, Fri, 00:00 PM',
      flashSaleItems: '+2',
      images: cs.src,
    },
    {
      id: 2,
      title: 'SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell',
      minPrice: '$18299',
      maxPrice: '$28399',
      flashSale: 'Jan 08, Fri, 00:00 PM',
      flashSaleItems: '+2',
      images: cs.src,
    },
  ];
  return (
    <div className={styles.home}>
      <Container className={styles.trendingProductSection}>
        <div className={`row ${styles.header}`}>
          <div className="col-2">
            <span>What&apos;s</span>
            <h1>Trending</h1>
          </div>
          <div className={styles.rightSection}>
            <select name="category">
              <option value="none" selected disabled hidden>Select Category</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <a href="#">View all</a>
          </div>
        </div>
        <div className={`row ${styles.cardContainer}`}>
          {productData.map((item) => (
            <ProductCard
              title={item.title}
              minPrice={item.minPrice}
              maxPrice={item.maxPrice}
              flashSale={item.flashSale}
              flashSaleItems={item.flashSaleItems}
              images={item.images}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
