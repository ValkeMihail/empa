import { ArrowDownwardRounded } from "@mui/icons-material"
import CircleParticles from "../../../components/circleParticles/CircleParticles"
import heroPng from '../../../assets/hero.png';
import { animateScroll as scroll } from 'react-scroll';
import styles from './homeHeader.module.scss';
import Image from "next/image";

type HomeHeaderProps = {
  pricesRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  headerRef : React.RefObject<HTMLDivElement>;
}
export const HomeHeader = ( { headerRef, pricesRef, projectsRef } : HomeHeaderProps ) => {


  const scrollToPrices = () => {
    // scroll to the prices section without animation (smooth: false)
    scroll.scrollTo(pricesRef.current!.offsetTop, {
      duration: 0,
    });    
  }
  const scrollToMain = () => {
    scroll.scrollTo(projectsRef.current!.offsetTop, {
      smooth: true,
      duration: 500,
    });
  }
  return (

    <header 
      ref={headerRef}
      className={`${styles.homeHeader} flexRow`}>
      <div className={styles.heroImgWrap}>
        <Image className={styles.heroImg} alt="hero image" src={heroPng} />
        <CircleParticles/>
      </div>
      <div className={styles.heroFrontground}>
        <h1>
          <strong className={`${styles.strongHeader} ${styles.titleHeader}`}>Empa</strong><br/><br/>
          <strong className={styles.strongHeader}>
            Simplify,
          </strong>
          <strong className={styles.strongHeader}>
            Streamline 
          </strong>
          your bussines.
          <strong className={styles.strongHeader}>
            Succeed.
          </strong>
        </h1>
        <div className={styles.buttonGroup}>
          <button 
            onClick={scrollToPrices}
            className={`${styles.getStarted} ${styles.button}`}>Get Started</button>
          <button 
            onClick={scrollToMain}
            className={`${styles.learnMore} ${styles.button}`}>Learn More</button>
        </div>
        <ArrowDownwardRounded
          onClick={scrollToMain}
          className={styles.arrowDown}/>
      </div>
    </header>


  )
}