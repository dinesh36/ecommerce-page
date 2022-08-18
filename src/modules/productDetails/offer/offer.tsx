import styles from './offer.module.scss';
import Condition from './condition/condtion';
import MyOfferDetails from './myofferDetails/myofferDetails';

export default function Offer() {
  return (
    <div className={styles.container}>
      <div><Condition /></div>
      <div><MyOfferDetails /></div>
    </div>
  );
}
