import { ArrowUpwardTwoTone, Square } from "@mui/icons-material";
import { ChartComponent } from "../../../components/charts/LineChart";
import { Cell, Pie, PieChart } from "recharts";
import styles from "./companyHeader.module.scss";

type CompanyHeaderProps = {
  nrOfEmployees: number;
  nrOfProjects: number;
  nrOfDepartments: number;
};



const data = [
  { name: "completed", value: 60 },
  { name: "inProgress", value: 15 },
  { name: "onHold", value: 15 },
  { name: "rejected", value: 10 },
];

const colors = ["yellowgreen","#1fd6ff",  "gold" , "orangered"];

const CustomPieChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data}
        cx={175}
        cy={250}
        outerRadius={100}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};






export const CompanyHeader = ({
  nrOfEmployees,
  nrOfProjects,
  nrOfDepartments,
}: CompanyHeaderProps) => {
  return (
    <header className={`${styles.companyHeader} flexRow`}>
      <section className={`${styles.leftHeader} flexColumn`}>
        <div className={`${styles.headerStats} flexRow`}>
          <div className={`${styles.stat} flexRow`}>
            <div className={`${styles.arrowStatWrap} flexRow`}>
              <ArrowUpwardTwoTone sx={{ color : "lightgreen"}}  />
            </div>
            <div className={`${styles.statInfo} flexColumn`}>
              <h3>Employees</h3>
              <p>{nrOfEmployees}</p>
            </div>
          </div>
          <div className={`${styles.stat} flexRow`}>
            <div className={`${styles.arrowStatWrap} flexRow`}>
              <ArrowUpwardTwoTone sx={{ color : "lightgreen"}}  />
            </div>
            <div className={`${styles.statInfo} flexColumn`}>
              <h3>Total Projects</h3>
              <p>{nrOfProjects}</p>
            </div>
          </div>
          <div className={`${styles.stat} flexRow`}>
            <div className={`${styles.arrowStatWrap} flexRow`}>
              <ArrowUpwardTwoTone sx={{ color : "lightgreen"}}  />
            </div>
            <div className={`${styles.statInfo} flexColumn`}>
              <h3>Departments</h3>
              <p>{nrOfDepartments}</p>
            </div>
          </div>
        </div>

        <div className={`${styles.headerChart}`}>
          <div className={`${styles.headerChartTitleWrap} flexRow`}>
            <h3>Performance Overview</h3>
            <div className={`${styles.yearsWrap} flexRow`}>
              <div className={`${styles.yearWrap} flexRow`}>
                <Square sx = {{ color : "lightgreen" }} />
                <p>This year</p>
              </div>
              <div className={`${styles.yearWrap} flexRow`}>
                <Square sx={ { color : "#1fd6ff" }} />
                <p>Last year</p>
              </div>
            </div>
          </div>
          <div className={`${styles.headerChartContainer} flexRow`}>
            <ChartComponent
              employeePerformance={[
                { month: "Jan", performance: 65 },
                { month: "Feb", performance: 59 },
                { month: "Mar", performance: 80 },
                { month: "Apr", performance: 81 },
                { month: "May", performance: 56 },
                { month: "Jun", performance: 55 },
                { month: "Jul", performance: 40 },
                { month: "Aug", performance: 79 },
                { month: "Sep", performance: 81 },
                { month: "Oct", performance: 56 },
                { month: "Nov", performance: 55 },
                { month: "Dec", performance: 40 },
              ]}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.rightHeader} flexColumn`}>
        <div className={`${styles.flexRow}`}>
          <CustomPieChart/>
        </div>

        <div className={`${styles.headerStatsGraph} flexRow`}>
          <div className={`${styles.chartStats} flexRow`}>
            <div className={`${styles.statsWrap} flexColumn`}>
              <div className={`${styles.statWrap} flexRow`}>
                <Square sx={{ width: 20, height: 20, bgcolor: colors[0], color  : colors[0] }} />
                <p>{`Completed ${data[0].value}%`}</p>
              </div>
              <div className={`${styles.statWrap} flexRow`}>
                <Square sx={{ width: 20, height: 20, bgcolor: colors[1], color  : colors[1] }} />
                <p>{`In Progress ${data[1].value}%`}</p>
              </div>
            </div>

            <div className={`${styles.statsWrap} flexColumn`}>
              <div className={`${styles.statWrap} flexRow`}>
                <Square sx={{ width: 20, height: 20, bgcolor: colors[2], color  : colors[2] }} />
                <p>{`On Hold ${data[2].value}%`}</p>
              </div>
              <div className={`${styles.statWrap} flexRow`}>
                <Square sx={{ width: 20, height: 20, bgcolor: colors[3], color  : colors[3] }}/>
                <p>{`Rejected ${data[3].value}%`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
