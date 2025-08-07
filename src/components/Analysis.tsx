import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import '../styles/Analysis.css';


const profitData = [
  { month: "Jan", profit: 4000, units: 240 },
  { month: "Feb", profit: 3000, units: 221 },
  { month: "Mar", profit: 5000, units: 229 },
  { month: "Apr", profit: 4780, units: 200 },
  { month: "May", profit: 5890, units: 218 },
  { month: "Jun", profit: 4390, units: 250 },
  { month: "Jul", profit: 6490, units: 270 },
];

const Analysis: React.FC = () => {
  return (
    <div className="analysis-container">
      <div className="analysis-header">
        <select className="date-range">
          <option>Today</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
          <option>Last 6 months</option>
          <option>Month to date</option>
          <option>Year to date</option>
          <option>Last 12 months</option>
          <option>Last 24 months</option>
          <option>Custom range</option>
        </select>
        <h1 className="analytics-title">Analytics Statistics</h1>
      </div>

      <div className="metrics-cards">
        <div className="metric-card">
          <div className="icon">💰</div>
          <div className="value">$25,000</div>
          <div className="label">Total Profit</div>
        </div>
        <div className="metric-card">
          <div className="icon">📦</div>
          <div className="value">1,200</div>
          <div className="label">Units Sold</div>
        </div>
        <div className="metric-card">
          <div className="icon">🛒</div>
          <div className="value">980</div>
          <div className="label">Orders Placed</div>
        </div>
      </div>

      <div className="graph-card">
        <h3>Profit Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={profitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="profit" stroke="#4B13B0" />
            <Line type="monotone" dataKey="units" stroke="#13B04B" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="graph-card">
        <h3>Performance Details Over Time</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={profitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="units" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="split-graph-row">
        <div className="graph-card">
          <h3>Most Purchased Products</h3>
          <div className="icon-popup">⚡</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={profitData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="units" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="graph-card">
          <h3>Most Purchased Categories</h3>
          <div className="icon-popup">⚡</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={profitData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="graph-card">
        <h3>Sales by Day of Week & Time of Day</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={profitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="profit" stroke="#4B13B0" />
            <Line type="monotone" dataKey="units" stroke="#13B04B" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analysis;
