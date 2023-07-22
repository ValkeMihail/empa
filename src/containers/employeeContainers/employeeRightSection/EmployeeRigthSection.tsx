import { Check, ShowChart } from "@mui/icons-material";
import { Calendar } from "./../../../components/calendar/Calendar";
import { ProjectData, TaskData } from "../../../../types";
import { LinearProgress } from "@mui/material";
import { styled } from "@mui/system";
import styles from "./employeeright.module.scss";
import { EmployeeRecentProjectCard } from "../employeeRecentProject/RecentProjectCard";

type EmployeeProjectProps = {
  recentProject: ProjectData;
  tasks: TaskData[];
};

const StyledLinearProgress = styled(LinearProgress)(() => ({
  '& .MuiLinearProgress-barColorPrimary': {
    backgroundColor: '#1fd6ff',
  },
}));

export const EmployeeRightSection = ({ recentProject, tasks }: EmployeeProjectProps) => {

  return (
    <section className={`${styles.rightSideSection} flexColumn`}>
      <div className={`${styles.topCards} flexRow`}>
        <div className={`${styles.card} flexColumn`}>
          <div className={`${styles.projectsInProgressHeader} flexRow`}>
            <div className={`${styles.iconWrap} flexColumn`}>
              <ShowChart />
            </div>
            <h3>Projects in Progress</h3>
          </div>
          <div className={`${styles.projectsInProgress} flexColumn`}>
            <div className={`${styles.projectsCount} flexRow`}>
              3
            </div>
          </div>
        </div>
        <div className={`${styles.card} flexColumn`}>
          <div className={`${styles.projectsInProgressHeader} flexRow`}>
            <div className={`${styles.iconWrap} flexColumn`}>
              <Check />
            </div>
            <h3>Completion Rate</h3>
          </div>
          <div className={`${styles.projectsInProgress} flexColumn`}>
            <div className={`${styles.projectsCount} flexRow`}>
              97%
            </div>
            <StyledLinearProgress
              className={`${styles.progressBar} flexRow`}
              variant="determinate"
              value={97}
            />
          </div>
        </div>
        <div className={`${styles.card} flexColumn`}>
          {Object.keys(recentProject).length !== 0 ? <EmployeeRecentProjectCard project={recentProject} /> : <></>}
        </div>
      </div>
      <div className={`${styles.bottomCard} flexColumn`}>
        <Calendar worktasks={tasks} />
      </div>
    </section>
  );
}
