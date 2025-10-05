import { Cell, Label, Pie, PieChart } from "recharts";

const COLORS = ["#a855f7", "#e5e7eb"];

interface Props {
  attended: number;
  totalClasses: number;
}

const PercentageChart = ({ attended, totalClasses }: Props) => {
  const percentage = parseFloat(((attended / totalClasses) * 100).toFixed(2));
  const data = [
    { name: "Attended", value: attended || 0 },
    { name: "Remaining", value: totalClasses - attended || 1 },
  ];
  return (
    <div className="w-full h-20">
      <PieChart width={100} height={80}>
        <Pie
          data={data}
          innerRadius={28}
          outerRadius={38}
          startAngle={90}
          endAngle={-270}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
          <Label
            value={`${percentage || 0}%`}
            position="center"
            fill="#1f2937"
            style={{
              fontSize: "14px",
              fontWeight: "bolder",
              fontFamily: "Manrope, sans-serif",
            }}
          />
        </Pie>
      </PieChart>
    </div>
  );
};

export default PercentageChart;
