import { LineChart, Line, XAxis, YAxis,  Tooltip } from 'recharts';

type ChartComponentProps = {
    employeePerformance: {
        month: string;
        performance: number;
    }[];
};


export const ChartComponent = ( { employeePerformance } : ChartComponentProps ) => {
  
  
  const chartId = 'chart-component-id';
  

  return (
    <LineChart id={chartId} width={550} height={400} data={employeePerformance}>
      <XAxis dataKey="month"/>
      <YAxis />
      <Tooltip />
      <Line 
        type="monotone"
        dataKey="performance" 
        stroke="#1fd6ff"/>
        <Line 
        type="basis"
        dataKey="performance" 
        stroke="lightgreen"/>
    </LineChart>
  );
};


