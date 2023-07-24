import Image from 'next/image';
import heroProject from '../../../assets/hero-project.png';
import styles from './../homeContainers.module.scss';

type HomeManageProjectsProps = {
  projectsRef: React.RefObject<HTMLDivElement>;
};

export const HomeManageProjects = ({ projectsRef }: HomeManageProjectsProps) => {
  return (
    <section ref={projectsRef} className={`${styles.manageCointainer} ${styles.manageProjects} flexRow`}>
      <div className={`flexColumn ${styles.sectionContent}`}>
        <h2>Manage your projects</h2>
        <p>
          <br /> <br /> <br />
          - Streamline project planning and execution <br /> <br />
          - Track project progress and milestones <br />
          <br />
          - Assign tasks and responsibilities to team members <br />
          <br />
          - Collaborate and communicate effectively with project stakeholders <br />
          <br />
          - Manage project timelines and deadlines <br />
          <br />
          - Monitor project budget and expenses <br />
          <br />
          - Generate reports and analytics for project performance evaluation <br />
          <br />
          - Integrate with other tools and systems for seamless project management <br />
          <br />
          - Ensure transparency and accountability throughout the project lifecycle <br />
          <br />
        </p>
      </div>
      <div className={`${styles.projectsHero} ${styles.mainHero}`}>
        <Image className={styles.heroImg} src={heroProject} alt='hero project management section' />
      </div>
    </section>
  );
};
