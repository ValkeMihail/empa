import { Facebook, Instagram, LinkedIn ,Twitter} from '@mui/icons-material';
import styles from './footer.module.scss';
import parIcon1 from '../../../assets/parIcon1.png';
import parIcon2 from '../../../assets/parIcon2.png';
import parIcon3 from '../../../assets/parIcon3.png';
import parIcon4 from '../../../assets/parIcon4.png';
import parIcon5 from '../../../assets/parIcon5.png';
import parIcon6 from '../../../assets/parIcon6.png';
import Image from 'next/image';

const partners = [
  {
    name: 'Glogga',
    icon: parIcon1
  },
  {
    name: 'Trello',
    icon: parIcon2
  },
  {
    name: 'Slack',
    icon: parIcon3
  },
  {
    name: 'Asana',
    icon: parIcon4
  },
  {
    name: 'Jira',
    icon: parIcon5
  },
  {
    name: 'Monday',
    icon: parIcon6
  },
  
]
type FooterProps = {
  footerRef: React.RefObject<HTMLDivElement>;
};

export const Footer = ({ footerRef }: FooterProps) => {
  return (
    <footer ref={footerRef} className={`${styles.footerContainer} flexColumn`}>
      <h2 className={`${styles.partnersTitle}`}>PARTNERS</h2>
      <section className={`${styles.partnersSection} flexRow`}>
        {partners.map((partner) => {
          return (
            <div className={`${styles.partnerIcon} flexColumn`} key={partner.name}>
              <Image src={partner.icon} alt="partner icon" />
              <h3>{partner.name}</h3>
            </div>
          );
        })}
      </section>
      <section className={`${styles.footerSection} flexRow`}>
        <div className={`${styles.footerColumn} flexColumn`}>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className={`${styles.footerColumn} flexColumn`}>
          <h3>Product</h3>
          <ul>
            <li>Features</li>
            <li>Integrations</li>
            <li>Security</li>
            <li>Trust</li>
            <li>Customer Stories</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className={`${styles.footerColumn} flexColumn`}>
          <h3>Resources</h3>
          <ul>
            <li>Help Center</li>
            <li>Guides</li>
            <li>Research</li>
            <li>Experts</li>
            <li>Events</li>
            <li>App Directory</li>
            <li>API</li>
          </ul>
        </div>
        <div className={`${styles.footerColumn} flexColumn`}>
          <h3>Social</h3>
          <ul>
            <li>
              <Facebook/>
            </li>
            <li>
              <Twitter/>
            </li>
            <li>
              <Instagram/>
            </li>
            <li>
              <LinkedIn/>
            </li>
          </ul>
        </div>
      </section>
    </footer>

  )
}