import { LineChart, Line, XAxis, YAxis,  Tooltip } from 'recharts';
import './charts.css';

type ChartComponentProps = {
    employeePerformance: {
        month: string;
        performance: number;
    }[];
};


export const ChartComponent = ({employeePerformance}:ChartComponentProps) => {
  const chartId = 'chart-component-id';
  return (
    <LineChart id={chartId} width={300} height={170} data={employeePerformance}>
      <XAxis dataKey="month"/>
      <YAxis />
      <Tooltip />
      <Line 
        type="monotone"
        dataKey="performance" 
        stroke="#1fd6ff"/>
    </LineChart>
  );
};


