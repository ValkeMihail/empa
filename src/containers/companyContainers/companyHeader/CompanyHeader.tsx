import { ArrowUpwardTwoTone, Square } from "@mui/icons-material";
import { ChartComponent } from "../../../components/charts/LineChart";
import { Pie, PieChart } from "recharts";
import styles from "./companyHeader.module.scss";

type CompanyHeaderProps = {
  nrOfEmployees: number;
  nrOfProjects: number;
  nrOfDepartments: number;
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
              <ArrowUpwardTwoTone />
            </div>
            <div className={`${styles.statInfo} flexColumn`}>
              <h3>Employees</h3>
              <p>{nrOfEmployees}</p>
            </div>
          </div>
          <div className={`${styles.stat} flexRow`}>
            <div className={`${styles.arrowStatWrap} flexRow`}>
              <ArrowUpwardTwoTone />
            </div>
            <div className={`${styles.statInfo} flexColumn`}>
              <h3>Total Projects</h3>
              <p>{nrOfProjects}</p>
            </div>
          </div>
          <div className={`${styles.stat} flexRow`}>
            <div className={`${styles.arrowStatWrap} flexRow`}>
              <ArrowUpwardTwoTone />
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
                <Square />
                <p>This year</p>
              </div>
              <div className={`${styles.yearWrap} flexRow`}>
                <Square />
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
              ]}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.rightHeader} flexColumn`}>
        <div className={`${styles.flexRow}`}>
          <PieChart width={400} height={400}>
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
              cx={200}
              cy={200}
              outerRadius={80}
              fill="orangered"
              label
            />
          </PieChart>
        </div>

        <div className={`${styles.headerStatsGraph} flexRow`}>
          <div className={`${styles.chartStats} flexRow`}>
            <div className={`${styles.statsWrap} flexColumn`}>
              <div className={`${styles.statWrap} flexRow`}>
                <Square />
                <p>Completed 10%</p>
              </div>
              <div className={`${styles.statWrap} flexRow`}>
                <Square />
                <p>In Progress 20%</p>
              </div>
            </div>

            <div className={`${styles.statsWrap} flexColumn`}>
              <div className={`${styles.statWrap} flexRow`}>
                <Square />
                <p>On Hold 60%</p>
              </div>
              <div className={`${styles.statWrap} flexRow`}>
                <Square />
                <p>Rejected 10%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
