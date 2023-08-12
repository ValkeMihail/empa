import { useState, useRef } from "react";
import styles from "@/styles/company/project.module.scss";
import { ArrowDropUp, Search, ArrowDropDownSharp, Square } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Cell, Pie, PieChart } from "recharts";
import { CircularProgressWithLabel } from "@/components/circularProgress/CircularProgressWithLabel";
import { GroupAvatars } from "@/components/groupAvatars/GroupAvatars";
import { DepartmentData, EmployeeData, ProjectData } from "../../../../../types";
import { TaskCard } from "@/components/taskCard/TaskCard";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { ObjectId } from "mongodb";


export const getServerSideProps: GetServerSideProps = async (context) => {

  const { projectId } = context.query;

  try {
    const response = await fetch(`http://localhost:3000/api/project/${projectId}/`);
    if (response.ok) {
      const data = await response.json()
      return {
        props: {
          project: data.project,
          employees: data.employees,
          departments : data.departments
        },
      };
    } else {
      console.error('Error fetching company data:', response.status, response.statusText);
      return {
        props: {
          project: null,
          employees: null,
          departments : null
        },
      };
    }
  }
  catch (error) {
    console.error('Error fetching company data:', error);
    return {
      props: {
        project: null,
        employees: null,
        departments : null
      },
    };
  }
}


  type ProjectProps = {
    project: ProjectData;
    employees: EmployeeData[];
    departments : DepartmentData[];
  };
  


const Project = ( {project, employees, departments} : ProjectProps ) => {

  const overviewRef = useRef<HTMLDivElement>(null);
  const myTasksRef = useRef<HTMLDivElement>(null);
  const allTasksRef = useRef<HTMLDivElement>(null);

  const [currentTab, setCurrentTab] = useState(overviewRef);

  const completedTasks = project.tasks.filter(task => task.extendedProps.status === "completed");
  const notStartedTasks = project.tasks.filter(task => task.extendedProps.status === "notStarted");
  const inProgressTasks = project.tasks.filter(task => task.extendedProps.status === "inProgress");
  const forReviewTasks = project.tasks.filter(task => task.extendedProps.status === "forReview");


  const getDepartmentName = (taskEmployeeId : ObjectId) => {

    const employee = employees.find(employee => employee._id === taskEmployeeId);
    const department = departments.find(department => department._id === employee?.employeeDepartmentId);

    return department?.departmentName as string;
    
  }
  

  const colors = ["lightgreen" , "aqua" , "#FFD700" , "#FF6347" , "#FF00FF" , "#FF4500" , "#FF1493" , "#FF0000" , "#F0E68C" , "#E6E6FA" , "#E0FFFF" , "#DEB887" , "#DCDCDC" , "#DAA520" , "#DA70D6" , "#D2691E" , "#D3D3D3" , "#C71585" , "#C0C0C0" , "#BDB76B" , "#BC8F8F" , "#BA55D3" , "#B22222" , "#B0C4DE" , "#AFEEEE" , "#ADFF2F" , "#ADD8E6" , "#A9A9A9" , "#A52A2A" , "#A0522D" , "#9ACD32" , "#9932CC" , "#98FB98" , "#9400D3" , "#9370DB" , "#90EE90" , "#8FBC8F" , "#8B4513" , "#8B008B" , "#8B0000" , "#8A2BE2" , "#87CEFA" , "#87CEEB" , "#808080" , "#800080" , "#800000" , "#7FFFD4" , "#7FFF00" , "#7CFC00" , "#7B68EE" , "#778899" , "#708090" , "#6B8E23" , "#6A5ACD" , "#696969" , "#66CDAA" , "#6495ED" , "#5F9EA0" , "#556B2F" , "#4B0082" , "#48D1CC" , "#483D8B" , "#4682B4" , "#4169E1" , "#40E0D0" , "#3CB371" , "#32CD32" , "#2F4F4F" , "#2E8B57" , "#228B22" , "#20B2AA" , "#1E90FF" , "#191970" , "#00FFFF" , "#00FF7F" , "#00FF00" , "#00FA9A" , "#00CED1" , "#00BFFF" , "#008B8B" , "#008080" , "#006400" , "#0000FF" , "#0000CD" , "#00008B" , "#000080" , "#000000" , "#000000"];
  
  const departmentsPieData = departments.map(department => {
    return {
      name: department.departmentName,
      value : departments.filter(dep => dep._id === department._id).length  / departments.length * 100,
    }
  })

  

  return (


    <div className={`${styles.projectContainer} flexColumn`}>
      <header className={`${styles.projectHeader} flexRow`}>
        <div className={`${styles.leftHeader} flexColumn`}>
          <div className={`${styles.progressWrap} flexRow`}>
            <Image 
              width={200}
              height={200}
              src="https://picsum.photos/id/320/200/200" 
              alt="project photo" 
            />
            <CircularProgressWithLabel value={100} />
          </div>
          <h1>{project.projectName}</h1>
        </div>
        <div className={`${styles.rightHeader} flexColumn`}>
          <GroupAvatars employeeList={employees} />
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
                  {project.projectDescription}
                </p>
              </div>
              <div className={`${styles.stats} flexColumn`}>
                <h2>Stats</h2>
                <p>Tasks {completedTasks.length} / {project.tasks.length}</p>
                <p>Team Members : {project.assigned.length}</p>
                <p>Departments : {departments.length}</p>
                <p>Due Date : {project.projectEndDate}</p>
              </div>
            </div>
            <div className={`${styles.departmentsPie} flexColumn`}>
              <PieChart width={500} height={250}>
                <Pie
                  dataKey="value"
                  isAnimationActive={true}
                  data={departmentsPieData}
                  cx={250}
                  cy={100}
                  outerRadius={75}
                  label
                >
                  { departmentsPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))
                  }
                </Pie>
              </PieChart>
              <div className={`${styles.pieChartStats} flexRow`}>
                { departments.map((department, index) => {
                  return(
                    <div key={department._id.toString()} className={`${styles.pieChartStatsItem} flexRow`}>
                      <Square sx={{
                        color: colors[index],
                      }}/>
                      <p>{department.departmentName}</p>
                    </div>
                  )}) 
                } 
              </div>
            </div>
          </section>
        ) : (
          <section className={`${styles.myTasks} flexRow`}>
            <section className={`${styles.tasksContainer} ${styles.notStarted}`}>
              <div className={`${styles.tasksHeader} flexRow`}>
                <h3>Not Started</h3>
                <p>{notStartedTasks.length}</p>
              </div>
              
                {notStartedTasks.map((task) => (
                  <TaskCard 
                    employeeList={employees}
                    key={task.id.toString()} 
                    task={task} 
                    departmentName={getDepartmentName(task.extendedProps.assigned[0])}
                  />
                ))}
              
            </section>
            <section className={`${styles.tasksContainer} ${styles.inProgress}`}>
              <div className={`${styles.tasksHeader} flexRow`}>
                <h3>In Progress</h3>
                <p>{inProgressTasks.length}</p>
              </div>
              {inProgressTasks.map((task) => (
                  <TaskCard 
                    employeeList={employees}
                    key={task.id.toString()} 
                    task={task} 
                    departmentName={getDepartmentName(task.extendedProps.assigned[0])}
                  />
                ))}
            </section>
            <section className={`${styles.tasksContainer} ${styles.review}`}>
              <div className={`${styles.tasksHeader} flexRow`}>
                <h3>Review</h3>
                <p>{forReviewTasks.length}</p>
              </div>
              {forReviewTasks.map((task) => (
                  <TaskCard 
                    employeeList={employees}
                    key={task.id.toString()} 
                    task={task} 
                    departmentName={getDepartmentName(task.extendedProps.assigned[0])}
                  />
                ))}
            </section>
            <section className={`${styles.tasksContainer} ${styles.completed}`}>
              <div className={`${styles.tasksHeader} flexRow`}>
                <h3>Completed</h3>
                <p>{completedTasks.length}</p>
              </div>
              {completedTasks.map((task) => (
                  <TaskCard 
                    employeeList={employees}
                    key={task.id.toString()} 
                    task={task} 
                    departmentName={getDepartmentName(task.extendedProps.assigned[0])}
                  />
                ))}
            </section>
          </section>
        )}
      </main>
    </div>
  );
};

export default Project;
