import { useRouter } from 'next/router';
import styles from './../homeContainers.module.scss';

type HomePlansProps = {
  pricesRef: React.RefObject<HTMLDivElement>;
};

export const HomePlans = ({ pricesRef }: HomePlansProps) => {

  const router = useRouter();

  return (
    <section id="plans" ref={pricesRef} className={`${styles.pricingSection} flexRow`}>
      <div className={`${styles.pricingColumn} flexColumn`}>
        <h2 className={styles.freePricing}>Free - $0 / month</h2>
        <p>
          <br /> <br /> <br />
          - Basic features for managing projects and employees <br />
          <br />
          - Limited access to advanced functionalities <br />
          <br />
          - Suitable for small businesses or individuals on a tight budget <br />
          <br />
        </p>
        <button 
          onClick={() => router.push('/register')}
          className={`${styles.pricingButton} ${styles.freeButton} button`}>Get Started</button>
      </div>
      <div className={`${styles.pricingColumn} flexColumn`}>
        <h2 className={styles.premiumPricing}>Premium - $9.99 / month</h2>
        <p>
          <br /> <br /> <br />
          - Full access to all project management and employee management features <br />
          <br />
          - Enhanced collaboration and communication tools <br />
          <br />
          - Advanced reporting and analytics capabilities <br />
          <br />
          - Ideal for growing businesses or teams with more requirements <br />
          <br />
        </p>
        <button 
          onClick={() => router.push('/register')}
          className={`${styles.pricingButton} ${styles.premiumButton} button`}>Get Started</button>
      </div>
      <div className={`${styles.pricingColumn} flexColumn`}>
        <h2 className={styles.enterprisePricing}>Enterprise - $19.99 / month</h2>
        <p>
          <br /> <br /> <br />
          - Unlimited access to all features and functionalities <br />
          <br />
          - Dedicated support and priority assistance <br />
          <br />
          - Customizable options to align with specific business needs <br />
          <br />
          - Recommended for large organizations or businesses with complex requirements <br />
          <br />
        </p>
        <button 
          onClick={() => router.push('/register')}
          className={`${styles.pricingButton} ${styles.enterpriseButton} button`}>Get Started</button>
      </div>
    </section>
  );
};
