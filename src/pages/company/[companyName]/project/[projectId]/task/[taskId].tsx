import styles from "@/styles/company/task.module.scss";
import {
  MoreHoriz,
  People,
  CalendarMonth,
  Circle,
  StackedBarChartSharp,
  LabelOutlined,
} from "@mui/icons-material";
import { ProjectData, TaskData } from "@types";
import { GetServerSideProps } from "next";
import Image from "next/image";

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { projectId, taskId } = context.query;
  
  try {
    const response = await fetch(`http://localhost:3000/api/project/${projectId}/task/${taskId}`);
    if (response.ok) {
      const data = await response.json()
      return {
        props: {
          task: data.task,
          project: data.project,
        },
      };
    } else {
      console.error('Error fetching company data:', response.status, response.statusText);
      return {
        props: {
          task: null,
          project: null,
        },
      };
    }
  }
  catch (error) {
    console.error('Error fetching company data:', error);
    return {
      props: {
        task: null,
        project: null,
      },
    };
  }
}

type TaskProps = {
  task: TaskData
  project : ProjectData
}


export const Task = ({task,project} : TaskProps) => {

  return (
    <main className={`${styles.taskContainer} flexRow`}>
      <section className={`${styles.taskInfo} flexColumn`}>
        <div className={`${styles.taskInfoHeader} flexRow`}>
          <div className={`${styles.navTitle} flexRow`}>
            <h3>{project.projectName}</h3>
            <h3>{" / "}</h3>
            <h3 className={styles.emphasisHeader}>{task.title}</h3>
          </div>
          <button className={styles.moreButton}>
            <MoreHoriz />
          </button>
        </div>
        <div className={`${styles.taskBody} flexColumn`}>
          <div className={`${styles.taskInfoWrap} flexRow`}>
            <div className={`${styles.taskIconWrap} flexRow`}>
              <StackedBarChartSharp />
              <h4>Status</h4>
            </div>
            <h4>{task.extendedProps?.status}</h4>
          </div>
          <div className={`${styles.taskInfoWrap} flexRow`}>
            <div className={`${styles.taskIconWrap} flexRow`}>
              <CalendarMonth />
              <h4>Due Date</h4>
            </div>
            <h4>Due {task.end}</h4>
          </div>
          <div className={`${styles.taskInfoWrap} flexRow`}>
            <div className={`${styles.taskIconWrap} flexRow`}>
              <People />
              <h4>Assigned</h4>
            </div>
            <Circle />
            <Circle />
            <Circle />
          </div>
          <div className={`${styles.taskInfoWrap} flexRow`}>
            <div className={`${styles.taskIconWrap} flexRow`}>
              <LabelOutlined />
              <h4>Labels</h4>
            </div>
            <div className={`${styles.labelsWrap} flexRow`}>
              <div className={styles.label}>
                <h4>Label</h4>
              </div>
              <div className={styles.label}>
                <h4>Label</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.commentsSection} flexColumn`}>
          <h3>Comments</h3>
          <div className={`${styles.commentCard} flexColumn`}>
            <div className={`${styles.commentHeader} flexRow`}>
              <div className={`${styles.commenterWrap} flexRow`}>
                <Image
                  width={50}
                  height={50}
                  src="https://w3schools.com/howto/img_avatar.png"
                  alt="avatar"
                />
                <h4>{"Commenter Name"}</h4>
                <Circle />
                <h5>1 day ago</h5>
              </div>
              <button className={styles.moreButton}>
                <MoreHoriz />
              </button>
            </div>
            <div className={`${styles.commentBody} flexColumn`}>
              <p>
                {
                  "Nice work on this task! I think we're almost done with this project. I'll be in touch soon to discuss the next steps."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.taskStats} flexColumn`}>
        <h3>Description</h3>
        <p>
          {task.extendedProps.description}
        </p>
        <div className={`${styles.nextMeet} flexColumn`}>
          <h3>Next Meeting</h3>
          <div className={`${styles.nextMeetCard} flexRow`}>
            <CalendarMonth />
            <h4>12.12.2021</h4>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Task;
