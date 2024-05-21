import { useEffect, useState } from 'react';
import styles from './AnnouncementBanner.module.css';

const AnnouncementBanner = () => {
  const [visibleMessage, setVisibleMessage] = useState(0);
  const nextMessage = () => {
    if (visibleMessage === 2) {
      setVisibleMessage(0);
    } else {
      setVisibleMessage(visibleMessage + 1);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      nextMessage();
    }, "5000")

  }, [visibleMessage])
  
  return (
    <div className={styles.announcement}>
      {
        visibleMessage === 0 &&
        <div className={styles.message}>
          Free AU Shipping for orders over $85.
        </div>
      }
      {
        visibleMessage === 1 &&
        <div className={styles.message}>
          Winter 24&apos; dropping soon!
        </div>
      }{
        visibleMessage === 2 &&
        <div className={styles.message}>
          International shipping coming soon!
        </div>
      }
    </div>
  )
}

export default AnnouncementBanner
