
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const assignments = [
  { name: "assignment-1", id: 1, mark: 25 },
  { name: "assignment-2", id: 2, mark: 35 },
  { name: "assignment-3", id: 3, mark: 55 },
  { name: "assignment-4", id: 4, mark: 40 },
  { name: "assignment-5", id: 5, mark: 60 },
  { name: "assignment-6", id: 6, mark: 50 },
  { name: "assignment-7", id: 7, mark: 55 },
];

const CompostChart = () => (
  <ResponsiveContainer
    width="100%"
    height={400}
    margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }}
  >
    <BarChart data={assignments}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="mark" fill="#ca97ca" />
    </BarChart>
  </ResponsiveContainer>
);

export default CompostChart;
