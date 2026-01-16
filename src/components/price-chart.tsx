"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { priceTrendData } from "@/lib/mock-data";

export function PriceChart() {
  return (
    <Card className="p-6 bg-gradient-to-br from-card via-primary/5 to-secondary/5 border-border/50 shadow-lg shadow-primary/5">
      <div className="mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          📊 Price Trends
        </h2>
        <p className="text-sm text-muted-foreground">
          Historical prices for your route
        </p>
      </div>
      <div className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart
            data={priceTrendData}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity={0.2} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--primary))" opacity={0.1} />
            <XAxis
              dataKey="date"
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={{ stroke: "hsl(var(--primary))" }}
              axisLine={{ stroke: "#8B5CF6", strokeWidth: 1 }}
            />
            <YAxis
              className="text-xs"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={{ stroke: "hsl(var(--primary))" }}
              axisLine={{ stroke: "#8B5CF6", strokeWidth: 1 }}
              label={{
                value: "Price ($)",
                angle: -90,
                position: "insideLeft",
                style: { fill: "hsl(var(--primary))", fontSize: 12, fontWeight: 600 },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "2px solid hsl(var(--primary))",
                borderRadius: "var(--radius)",
                boxShadow: "0 10px 15px -3px hsl(var(--primary) / 0.2)",
              }}
              formatter={(value: number) => [`$${value}`, "Price"]}
              labelStyle={{ color: "hsl(var(--primary))", fontWeight: 700 }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8B5CF6"
              strokeWidth={3}
              dot={{ 
                fill: "#8B5CF6", 
                r: 5, 
                strokeWidth: 3, 
                stroke: "hsl(var(--primary))" 
              }}
              activeDot={{ 
                r: 8, 
                strokeWidth: 3, 
                stroke: "hsl(var(--secondary))",
                fill: "hsl(var(--card))",
                filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.6))"
              }}
              fill="#8B5CF6"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
