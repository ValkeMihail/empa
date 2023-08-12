import Image from 'next/image';
import { EmployeeData } from '../../../../types';
import { ChartComponent } from '../../../components/charts/LineChart';
import { RadarChartExample } from '../../../components/charts/RadarChart';
import styles from  './employeeLeftSection.module.scss';

type EmployeeInfoProps = {
  employeeData: EmployeeData;
};


export const EmployeeLeftSection = ({employeeData} : EmployeeInfoProps ) => {

  return (
    <section className={`${styles.leftSideSection} flexColumn`}>
      <div className={`${styles.employeeCard} flexRow`}>
        <div className={`${styles.employeeCardLeft} flexColumn`}>
          <h3 className={styles.headerEmployeeCard}>
            {employeeData.employeeName}
          </h3>
          <span className={styles.emailSpan}>
            {employeeData.employeeEmail}
          </span>
          <span className={styles.roleSpan}>
            {employeeData.employeeRole}
          </span>
          <span className={styles.startDateSpan}>
            {employeeData.employeeStartDate}
          </span>
        </div>
          <div className={`${styles.employeeCardRight} flexColumn`}>
            <Image 
              width={100}
              height={100}
              src={employeeData.employeePhoto ?  employeeData.employeePhoto : "https://www.w3schools.com/howto/img_avatar.png"}
              alt="employee photo" 
            />
          </div>
      </div>
        <div className={`${styles.lineChart} flexRow`}>
          {/* <ChartComponent employeePerformance={employeeData.employeePerformance  ? employeeData.employeePerformance : 
            [{
              month: 'January',
              performance: 4,
            } ,
              {
              month: 'February',
              performance: 2,
              }]
            } /> */}
        </div>
        <div className={styles.radarChart}>
          <RadarChartExample employeeAttributes={employeeData.employeeAttributes as { attribute: string; value: number; }[]} />                    
        </div>
    </section>

  );
}