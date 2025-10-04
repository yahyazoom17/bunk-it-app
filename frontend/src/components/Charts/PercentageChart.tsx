import { Cell, Label, Pie, PieChart } from "recharts";

const COLORS = ["#a855f7", "#e5e7eb"];

const PercentageChart = () => {
  const percentage = 85;
  const data = [
    { name: "Attended", value: 6 },
    { name: "Remaining", value: 20 - 6 },
  ];
  return (
    <div className="w-20 h-20">
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
            value={`${percentage}%`}
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
