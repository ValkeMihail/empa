
import { Radar, RadarChart, PolarGrid, PolarAngleAxis,  ResponsiveContainer } from 'recharts';

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
        <PolarAngleAxis dataKey="employeeAttributes" />
        <Radar name="Attributes" dataKey="value" stroke="#1fd6ff" fill="#1fd6ff" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};
