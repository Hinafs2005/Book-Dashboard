import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function Charts({ books }) {
  const yearData = [
    {
      range: "Before 1950",
      books: books.filter((book) => (book.first_publish_year || 0) < 1950).length,
    },
    {
      range: "1950-1999",
      books: books.filter(
        (book) =>
          (book.first_publish_year || 0) >= 1950 &&
          (book.first_publish_year || 0) <= 1999
      ).length,
    },
    {
      range: "2000+",
      books: books.filter((book) => (book.first_publish_year || 0) >= 2000).length,
    },
  ];

  const pieData = [
    { name: "Before 1950", value: yearData[0].books },
    { name: "1950-1999", value: yearData[1].books },
    { name: "2000+", value: yearData[2].books },
  ];

  const COLORS = ["#8E7DBE", "#C9ADA7", "#4A4E69"];

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        margin: "40px 0",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {/* Bar Chart */}
      <div className="chart-card">
        <h2>📊 Books by Publication Era</h2>

        <ResponsiveContainer width={420} height={300}>
          <BarChart
            data={yearData}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.15} />

            <XAxis
              dataKey="range"
              stroke="#F8E8D0"
            />

            <YAxis
              stroke="#F8E8D0"
            />

            <Tooltip
                contentStyle={{
                    background:"#4A3223",
                    border:"none",
                    borderRadius:"10px",
                    color:"#fff"
                }}
            />

            <Bar
              dataKey="books"
              fill="#C9ADA7"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="chart-card">
        <h2>🥧 Publication Distribution</h2>

        <ResponsiveContainer width={420} height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#4A3223",
                border: "none",
                borderRadius: "10px",
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;