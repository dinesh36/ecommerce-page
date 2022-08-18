import styles from './productDetails.module.scss';
import ProductInformation from './productInformation/productInformation';
import Offer from './offer/offer';

export default function ProductDetails() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.productDetail}>
        <ProductInformation />
      </div>
      <div className={styles.offerDetails}>
        <Offer />
      </div>
    </div>
  );
}
