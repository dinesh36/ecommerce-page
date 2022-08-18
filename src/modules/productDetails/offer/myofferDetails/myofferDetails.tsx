import styles from './myofferDetails.module.scss';
import information from '../../../../../Images/offer/information.png';
import deleteIcon from '../../../../../Images/offer/deleteIcon.png';

export default function MyOfferDetails() {
  return (
    <div className={styles.mainPart}>
      <div className={styles.container}>
        <div className={styles.offerHeading}>
          <div className={styles.equalWidth}>
            <hr className={styles.hr} />
          </div>
          <div className={styles.myOfferDetailsHeading}>My offer Details</div>
          <div className={styles.equalWidth}><hr className={styles.hr} /></div>
        </div>
        <div className={styles.responseHeader}>
          <div className={styles.label}>
            <div className={styles.specifyLabel}>
              <div className={styles.specifyLabelSize}>Specify</div>
              <div className={styles.specifyLabelIcon}>
                <img src={information.src} alt="icon" className={styles.iconSize} />
              </div>
            </div>
            <div className={styles.responseHeaderSize}>Response</div>
            <div className={styles.timeLineHeadingSize}>Timeline</div>
          </div>
          <div className={styles.selectBox}>
            <select className={styles.selectOption}>
              <option>Select</option>
            </select>
          </div>
          <div className={styles.selectBox}>
            <select className={styles.selectOption}>
              <option>Select</option>
            </select>
          </div>
        </div>
        <div className={styles.responseHeader}>
          <div className={styles.label}>
            <div className={styles.specifyLabel}>
              <div className={styles.specifyLabelSize}>Request</div>
              <div className={styles.specifyLabelIcon}>
                <img src={information.src} alt="icon" className={styles.iconSize} />
              </div>
            </div>
            <div className={styles.responseHeaderSize}>Quantity</div>
          </div>
          <div className={styles.selectBoxForQuantity}>
            <select className={styles.selectOptionForQuantity}>
              <option>Select</option>
            </select>
          </div>
          <div className={styles.deleteQuantity}>
            <img src={deleteIcon.src} alt="delete" />
          </div>
        </div>
      </div>
    </div>
  );
}
