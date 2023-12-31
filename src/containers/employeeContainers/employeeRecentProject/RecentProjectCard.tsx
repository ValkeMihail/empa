import { useEffect , useState} from 'react';
import { ProjectData } from '../../../../types';
import { GroupAvatars } from '../../../components/groupAvatars/GroupAvatars';
import { EmployeeData } from '../../../../types';
import employees from '../../../../employees.json';


const containerStyle: React.CSSProperties = {
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
  height: '100%'
};
const headerInContainerStyle: React.CSSProperties = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
};
const projectImageStyle: React.CSSProperties = {
  width: '2em',
  height: '2em',
  borderRadius: '10px',
  
};

const headerTopContainerStyle: React.CSSProperties = {
  justifyContent: 'flex-start',
  gap: '0.5em',
  width: '100%',
  alignItems: 'center',

 
};
const zeroMargin: React.CSSProperties = {
  margin: '0px',
};


export const EmployeeRecentProjectCard = ({project} : {project: ProjectData}) => {

  const [recentProject, setRecentProject] = useState<ProjectData>(project);
  const [employee, setEmployee] = useState<EmployeeData[]>(employees as EmployeeData[]);
  useEffect (() => {
    setRecentProject (project);
  }, []);


  return(

    <div className="flexColumn recentProject" style={containerStyle}>
      <div className="flexColumn" style={headerInContainerStyle}>
        <div className="flexRow" style={headerTopContainerStyle} >
          <img style={projectImageStyle} src={recentProject.projectPhoto} alt="project photo" />
          <h3 style={zeroMargin}>
            {recentProject.projectName}
          </h3>
        </div>
          <p style={zeroMargin}>
            {recentProject.assigned.length} members
          </p>
      </div>  
      <GroupAvatars
        employeeList={employees}
        style={{
          alignSelf: 'flex-end'
        }}
        />
    </div>
  );
};