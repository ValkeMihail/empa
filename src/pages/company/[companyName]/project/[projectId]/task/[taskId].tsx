import styles from "@/styles/company/task.module.scss";
import {
  MoreHoriz,
  People,
  CalendarMonth,
  Circle,
  StackedBarChartSharp,
  LabelOutlined,
} from "@mui/icons-material";

export const Task = () => {
  return (
    <main className={`${styles.taskContainer} flexRow`}>
      <section className={`${styles.taskInfo} flexColumn`}>
        <div className={`${styles.taskInfoHeader} flexRow`}>
          <div className={`${styles.navTitle} flexRow`}>
            <h3>{" ProjectName "}</h3>
            <h3>{" / "}</h3>
            <h3 className={styles.emphasisHeader}>{" TaskName "}</h3>
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
            <h4>In progress</h4>
          </div>
          <div className={`${styles.taskInfoWrap} flexRow`}>
            <div className={`${styles.taskIconWrap} flexRow`}>
              <CalendarMonth />
              <h4>Due Date</h4>
            </div>
            <h4>Due 12/12/2021</h4>
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
                <img
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
          {
            `This task is to create a new page for the website. The page will be a
            blog page that will display all of the blog posts that have been
            created. The page will have a header, a footer, and a sidebar. The
            sidebar will contain links to the blog posts. The header will contain
            a logo, a search bar, and a navigation bar. The footer will contain
            links to the blog posts, a link to the blog's RSS feed, and a link to
            the blog's Twitter account. It will be a blog page that will display
            all of the blog posts that have been created. The page will have a
            header, a footer, and a sidebar. The sidebar will contain links to the
            blog posts. The header will contain a logo, a search bar, and a
            navigation bar. The footer will contain links to the blog posts, a
            link to the blog's RSS feed, and a link to the blog's Twitter account.`
          }
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
