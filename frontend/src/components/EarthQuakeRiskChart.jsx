import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { region: "California", riskLevel: 9 },
  { region: "Japan", riskLevel: 8.5 },
  { region: "Indonesia", riskLevel: 8 },
  { region: "Turkey", riskLevel: 7.5 },
  { region: "Chile", riskLevel: 7 },
  { region: "Nepal", riskLevel: 6.5 },
  { region: "Philippines", riskLevel: 6 },
];

const EarthquakeRiskChart = () => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-300 mb-4">🌍 Earthquake Vulnerability by Region</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="region" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip wrapperStyle={{ backgroundColor: "#333", borderRadius: "5px", color: "#fff" }} />
          <Legend />
          <Bar dataKey="riskLevel" fill="#f87171" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarthquakeRiskChart;
