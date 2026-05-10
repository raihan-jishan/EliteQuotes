"use client";

import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { QuotesAPI } from "@/lib/api";

export function WeaklyChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadChartData = async () => {
      try {
        // 🔥 fetch all quotes
        const quotes = await QuotesAPI.getAll();

        // 🔥 default weekly structure
        const weeklyData = [
          { day: "Mon", quotes: 0 },
          { day: "Tue", quotes: 0 },
          { day: "Wed", quotes: 0 },
          { day: "Thu", quotes: 0 },
          { day: "Fri", quotes: 0 },
          { day: "Sat", quotes: 0 },
          { day: "Sun", quotes: 0 },
        ];

        // JS getDay() order
        const days = [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
        ];

        // 🔥 count quotes by createdAt day
        quotes.forEach((quote) => {
          if (!quote.createdAt) return;

          const date = new Date(quote.createdAt);

          const dayName = days[date.getDay()];

          const foundDay = weeklyData.find(
            (d) => d.day === dayName
          );

          if (foundDay) {
            foundDay.quotes += 1;
          }
        });

        setChartData(weeklyData);
      } catch (err) {
        console.error(err);
      }
    };

    loadChartData();
  }, []);

  return (
    <div className="bg-background p-4 rounded-2xl shadow-sm w-full h-105">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-[1.4rem] font-semibold tracking-wide text-white font-comfortaa">
            Writing Activity
          </h3>

          <p className="text-sm text-slate-500">
            Quotes added over the last 7 days
          </p>
        </div>
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={chartData}>
          
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#8888"
          />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748b", fontSize: 12 }}
            dy={10}
          />

          <YAxis hide />

          <Tooltip
            cursor={{ fill: "#34d3992a" }}
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              background: "#020617",
              color: 'white',
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
            labelStyle={{
              color: 'white'
            }}
            itemStyle={{
              color: 'white'
            }}
          />

          <Bar
            dataKey="quotes"
            radius={[8, 8, 0, 0]}
            barSize={32}  
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.quotes >= 5
                    ? "#10b981"
                    : "#34d399"
                }
                className="transition-all duration-300 hover:opacity-80"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}