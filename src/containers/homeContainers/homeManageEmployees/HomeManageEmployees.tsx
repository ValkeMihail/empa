

import Image from 'next/image';
import heroEmployee from '../../../assets/hero-employee.png';
import styles from "./../homeContainers.module.scss"


type HomeManageEmployeesProps = {
  employeesRef : React.RefObject<HTMLDivElement>;
}
export const HomeManageEmployees = ({ employeesRef }: HomeManageEmployeesProps) => {
  return (
    <section
      ref={employeesRef}
      className={`${styles.manageCointainer} ${styles.manageEmployees} flexRow`}
    >
      <div className={`${styles.employeesHero} ${styles.mainHero}`}>
        <Image className={styles.heroImg} src={heroEmployee} alt=' employee management hero section' />
      </div>
      <div className={`sectionContent flexColumn ${styles.sectionContent}`}>
        <h2>Manage your employees</h2>
        <p>
          <br /> <br /> <br />
          - Streamline project planning and execution <br /> <br />
          - Track project progress and milestones <br /> <br />
          - Assign tasks and responsibilities to team members <br /> <br />
          - Collaborate and communicate effectively with project stakeholders <br /> <br />
          - Manage project timelines and deadlines <br /> <br />
          - Monitor project budget and expenses <br /> <br />
          - Generate reports and analytics for project performance evaluation <br /> <br />
          - Integrate with other tools and systems for seamless project management <br /> <br />
          - Ensure transparency and accountability throughout the project lifecycle <br /> <br />
        </p>
      </div>
    </section>
  );
};