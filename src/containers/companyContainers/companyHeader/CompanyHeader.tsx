import { ArrowUpwardTwoTone, Square } from "@mui/icons-material"
import { ChartComponent } from "../../../components/charts/LineChart"
import { Pie, PieChart } from "recharts"
import "./companyHeader.css"


type CompanyHeaderProps = {
  nrOfEmployees: number;
  nrOfProjects: number;
  nrOfDepartments: number;
}

export const CompanyHeader = ({
  nrOfEmployees,
  nrOfProjects,
  nrOfDepartments
}: CompanyHeaderProps ) => {

  return (

    <header className="companyHeader flexRow">

        <section className="leftHeader flexColumn">
          
          <div className="headerStats flexRow">
            <div className="stat flexRow">
              <div className="arrowStatWrap flexRow">
                <ArrowUpwardTwoTone/>
              </div>
              <div className="statInfo flexColumn">
                <h3>
                  Employees
                </h3>
                <p>{nrOfEmployees}</p>
              </div>
            </div>
            <div className="stat flexRow">
              <div className="arrowStatWrap flexRow">
                <ArrowUpwardTwoTone/>
              </div>
              <div className="statInfo flexColumn">
                <h3>
                  Total Projects
                </h3>
                <p>{nrOfProjects}</p>
              </div>
            </div>
            <div className="stat flexRow">
              <div className="arrowStatWrap flexRow">
                <ArrowUpwardTwoTone/>
              </div>
              <div className="statInfo flexColumn">
                <h3>
                  Departments
                </h3>
                <p>{nrOfDepartments}</p>
              </div>
            </div>
          </div>



          <div className="headerChart">
            <div className="headerChartTitleWrap flexRow">
              <h3>
                Performance Overview
              </h3>
              <div className="yearsWrap flexRow"> 
                <div className="yearWrap flexRow">
                  {/*  // TODO:  make square different color for each year */}
                  <Square/>  
                  <p>
                    This year
                  </p>
                </div>
                <div className="yearWrap flexRow">
                <Square/>
                  <p>
                    Last year
                  </p>
                </div>
              </div>
            </div>
            <div className="headerChartContainer flexRow">
              {/* // TODO:  chart component here */}
              <ChartComponent employeePerformance={[
                 { "month": "Jan", "performance": 65 },
                 { "month": "Feb", "performance": 59 },
                 { "month": "Mar", "performance": 80 },
                 { "month": "Apr", "performance": 81 },
                 { "month": "May", "performance": 56 },
                 { "month": "Jun", "performance": 55 },
                 { "month": "Jul", "performance": 40 }
              ]}/>
            </div>
            
           
          </div>

        </section>

        <section className="rightHeader flexColumn">



            <div className=" flexRow">
              <PieChart width={400} height={400}>
                <Pie dataKey="value" isAnimationActive={false} data={
                  [
                    { name: 'Group A', value: 400 },
                    { name: 'Group B', value: 300 },
                    { name: 'Group C', value: 300 },
                    { name: 'Group D', value: 200 },
                    { name: 'Group E', value: 278 },
                    { name: 'Group F', value: 189 },
                  ]
                } cx={200} cy={200} outerRadius={80} fill="orangered" label />
              </PieChart>
            </div>

          <div className="headerStatsGraph flexRow">


            


            <div className="chartStats flexRow">
              <div className="statsWrap flexColumn">
                <div className="statWrap flexRow">
                  {/* // TODO: make square different color for each stat */}
                  <Square/>  
                  <p>
                    Completed {10}%
                  </p>
                </div>
                <div className="statWrap flexRow">
                  {/* // TODO: make square different color for each stat */}
                  <Square/>  
                  <p>
                    In Progress {20}%
                  </p>
                </div>
              </div>


              <div className="statsWrap flexColumn">
                <div className="statWrap flexRow">
                  {/* // TODO: make square different color for each stat */}
                  <Square/>  
                  <p>
                    On Hold {60}%
                  </p>
                </div>
                <div className="statWrap flexRow">
                  {/* // TODO: make square different color for each stat */}
                  <Square/>  
                  <p>
                    Rejected {10}%
                  </p>
                </div>
              </div>



            </div>
          </div>
             
        </section>

      </header>
  )
}