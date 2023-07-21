import { EmployeeData } from '../../../../types';
import { ChartComponent } from '../../../components/charts/LineChart';
import { RadarChartExample } from '../../../components/charts/RadarChart';
import './employeeleftsection.css';

type EmployeeInfoProps = {
  employeeData: EmployeeData;
};


export const EmployeeLeftSection = ({employeeData} : EmployeeInfoProps ) => {

  return (
    <section className="leftSideSection flexColumn">
      <div className="flexRow employeeCard">
        <div className="flexColumn employeeCardLeft">
          <h3 className="headerEmployeeCard">
            {employeeData.name}
          </h3>
          <span className="emailSpan">
            {employeeData.email}
          </span>
          <span className="roleSpan">
            {employeeData.role}
          </span>
          <span className="startDateSpan">
            {employeeData.startDate}
          </span>
        </div>
          <div className="flexColumn employeeCardRight">
            <img 
              src={employeeData.photo}
              alt="employee photo" 
            />
          </div>
      </div>
        <div className='lineChart flexRow'>
          <ChartComponent employeePerformance={employeeData.performance} />
        </div>
        <div className='radarChart'>
          <RadarChartExample employeeAttributes={employeeData.attributes} />                    
        </div>
    </section>

  );
}