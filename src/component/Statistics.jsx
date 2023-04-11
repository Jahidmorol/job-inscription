import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const assignments = [
  { name: "a-1", id: 1, mark: 60 },
  { name: "a-2", id: 2, mark: 60 },
  { name: "a-3", id: 3, mark: 60 },
  { name: "a-4", id: 4, mark: 60 },
  { name: "a-5", id: 5, mark: 60 },
  { name: "a-6", id: 6, mark: 60 },
  { name: "a-7", id: 7, mark: 60 },
];

const PieCompostChart = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="mark"
          data={assignments}
          fill="#8884d8"
          label
        >
          {assignments.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieCompostChart;
