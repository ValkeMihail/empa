
import { Radar, RadarChart, PolarGrid, PolarAngleAxis,  ResponsiveContainer } from 'recharts';
import styles from  './charts.module.scss';


type RadarChartExampleProps = {
    employeeAttributes: {
        attribute: string;
        value: number;
    }[];
};

export const RadarChartExample = ({
    employeeAttributes,
}:RadarChartExampleProps) => {

  return (
    <ResponsiveContainer width="100%" height={150}>
      <RadarChart data={employeeAttributes}>
        <PolarGrid />
        <PolarAngleAxis dataKey="attribute" />
        <Radar name="Attributes" dataKey="value" stroke="#1fd6ff" fill="#1fd6ff" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

