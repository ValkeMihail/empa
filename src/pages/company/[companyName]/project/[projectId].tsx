import { useState, useRef } from "react";
import styles from "@/styles/company/project.module.scss";
import { ArrowDropUp, Search, ArrowDropDownSharp, Square } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Pie, PieChart } from "recharts";
import employees from "../../../../../employees.json";
import { CircularProgressWithLabel } from "@/components/circularProgress/CircularProgressWithLabel";
import { GroupAvatars } from "@/components/groupAvatars/GroupAvatars";
import { EmployeeData } from "../../../../../types";
import { TaskCard } from "@/components/taskCard/TaskCard";

const Project = () => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const myTasksRef = useRef<HTMLDivElement>(null);
  const allTasksRef = useRef<HTMLDivElement>(null);

  const [currentTab, setCurrentTab] = useState(overviewRef);
  const [employeeData, setEmployeeData] = useState(employees as EmployeeData[]);

  return (
    <div className={`${styles.projectContainer} flexColumn`}>
      <header className={`${styles.projectHeader} flexRow`}>
        <div className={`${styles.leftHeader} flexColumn`}>
          <div className={`${styles.progressWrap} flexRow`}>
            <img src="https://picsum.photos/id/320/200/200" alt="project photo" />
            <CircularProgressWithLabel value={100} />
          </div>
          <h1>Finance Mobile App</h1>
        </div>
        <div className={`${styles.rightHeader} flexColumn`}>
          <GroupAvatars employeeList={employeeData} />
          <button className={styles.inviteButton}>+ Invite</button>
        </div>
        <div className={`${styles.tabHeader} flexRow`}>
          <ul className={`${styles.tabs} flexRow`}>
            <li
              onClick={() => setCurrentTab(overviewRef)}
              className={currentTab === overviewRef ? styles.activeTab : ""}
            >
              Overview
            </li>
            <li
              onClick={() => setCurrentTab(myTasksRef)}
              className={currentTab === myTasksRef ? styles.activeTab : ""}
            >
              My Tasks
            </li>
            <li
              onClick={() => setCurrentTab(allTasksRef)}
              className={currentTab === allTasksRef ? styles.activeTab : ""}
            >
              All Tasks
            </li>
          </ul>
          <div className={`${styles.filters} flexRow`}>
            <div className={`${styles.filterWrap} flexRow`}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Filter</InputLabel>
                <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" label="show" defaultValue="noFilters">
                  <MenuItem value="noFilters">No Filters</MenuItem>
                  <MenuItem value="highPriority">High Priority</MenuItem>
                  <MenuItem value="lowPriority">Low Priority</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                  <MenuItem value="inProgress">In Progress</MenuItem>
                  <MenuItem value="notStarted">Not Started</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={`${styles.sortWrap} flexRow`}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
                <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" label="show" defaultValue="alphabetical">
                  <MenuItem value="alphabetical">No Sort</MenuItem>
                  <MenuItem value="priority">Priority</MenuItem>
                  <MenuItem value="dueDate">Due Date</MenuItem>
                  <MenuItem value="status">Status</MenuItem>
                </Select>
              </FormControl>
              <div className={`${styles.arrowSortWrap} flexColumn`}>
                <ArrowDropUp />
                <ArrowDropDownSharp />
              </div>
            </div>
            <div className={`${styles.searchWrap} flexRow`}>
              <Search />
            </div>
          </div>
        </div>
      </header>
      <main className={`${styles.projectMain}`}>
        {currentTab === overviewRef ? (
          <section className={`${styles.overview} flexRow`} ref={overviewRef}>
            <div className={`${styles.projectInfoWrap} flexColumn`}>
              <div className={`${styles.description} flexColumn`}>
                <h2>Description</h2>
                <p>
                  This app is a mobile app for finance management. It allows you to track your expenses and income, and also to set a budget for
                  yourself. It is a very useful app for people who want to keep track of their finances. It will help you to save money and to be more
                  organized.
                </p>
              </div>
              <div className={`${styles.stats} flexColumn`}>
                <h2>Stats</h2>
                <p>Tasks 15 / 15</p>
                <p>Team Members : 5</p>
                <p>Departments : 3</p>
                <p>Due Date : 15/10/2021</p>
              </div>
            </div>
            <div className={`${styles.departmentsPie} flexColumn`}>
              <PieChart width={500} height={250}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={[
                    { name: "Group A", value: 400 },
                    { name: "Group B", value: 300 },
                    { name: "Group C", value: 300 },
                    { name: "Group D", value: 200 },
                    { name: "Group E", value: 278 },
                    { name: "Group F", value: 189 },
                  ]}
                  cx={250}
                  cy={100}
                  outerRadius={75}
                  fill="orangered"
                  label
                />
              </PieChart>
              <div className={`${styles.pieChartStats} flexRow`}>
                <div className={`${styles.pieChartStatsItem} flexRow`}>
                  <Square />
                  <p>Design</p>
                </div>
                <div className={`${styles.pieChartStatsItem} flexRow`}>
                  <Square />
                  <p>Development</p>
                </div>
                <div className={`${styles.pieChartStatsItem} flexRow`}>
                  <Square />
                  <p>Marketing</p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className={`${styles.myTasks} flexRow`}>
            <section className={`${styles.tasksContainer} ${styles.notStarted}`}>
              <div className={`${styles.tasksHeader} flexRow`}>
                <h3>Not Started</h3>
                <p>5</p>
              </div>
              <div>
                <TaskCard employeeList={employeeData} />
              </div>
            </section>
            <section className={`${styles.tasksContainer} ${styles.inProgress}`}>
              <div className={`${styles.tasksHeader} flexRow`}>
                <h3>In Progress</h3>
                <p>5</p>
              </div>
            </section>
            <section className={`${styles.tasksContainer} ${styles.review}`}>
              <div className={`${styles.tasksHeader} flexRow`}>
                <h3>Review</h3>
                <p>5</p>
              </div>
            </section>
            <section className={`${styles.tasksContainer} ${styles.completed}`}>
              <div className={`${styles.tasksHeader} flexRow`}>
                <h3>Completed</h3>
                <p>5</p>
              </div>
            </section>
          </section>
        )}
      </main>
    </div>
  );
};

export default Project;
