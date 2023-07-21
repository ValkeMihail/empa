import { Check, ShowChart } from "@mui/icons-material";
import { Calendar } from "./../../../components/calendar/Calendar";
import { ProjectData, WorkTask } from "../../../../types";
import { LinearProgress } from "@mui/material";
import { styled } from "@mui/system";
import "./employeeright.css";
import { EmployeeRecentProjectCard } from "../employeeRecentProject/RecentProjectCard";

type EmployeeProjectProps = {
  recentProject: ProjectData;
  tasks: WorkTask[];
};

const StyledLinearProgress = styled(LinearProgress)(() => ({
  '& .MuiLinearProgress-barColorPrimary': {
    backgroundColor: '#1fd6ff',
  },
}));

export const EmployeeRigthSection = ({ recentProject , tasks }:EmployeeProjectProps) => {

  return (
    <section className="flexColumn rightSideSection">
      <div className="flexRow topCards">  
          <div className="flexColumn card">
              <div className='flexRow projectsInProgressHeader'>
                  <div className='flexColumn iconWrap'>
                      <ShowChart/>
                  </div>
                  <h3>Projects in Progress</h3>
              </div>
              <div className='projectsInProgress'>
                  <div className='projectsCount'>
                      3
                  </div>
                  
              </div>
          </div>
            <div className="flexColumn card">
              <div className='flexRow projectsInProgressHeader'>
                <div className='flexColumn iconWrap'>
                    <Check/>
                </div>
                  <h3>Completion Rate</h3>
              </div>
              <div className='projectsInProgress'>
                <div className='projectsCount'>
                  97%
                </div>
                <StyledLinearProgress 
                  className='progressBar'
                  variant="determinate"
                  value={97}
                  
                />
              </div>
            </div>
            <div className="flexColumn card">
              
              { 
                Object.keys(recentProject).length !== 0 ? <EmployeeRecentProjectCard project={recentProject} /> : <></>
              }
    
            </div>
        </div>
        <div className="flexColumn bottomCard">
          <Calendar worktasks={tasks} />
        </div>
    </section>

  );
}