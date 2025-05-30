import { useEffect, useState } from "react";
import { useAppSelector } from "../features/Slices/hooks";

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

const generateWeeks = (transactions: any[]) => {
  const now = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(now.getDate() - 29); // 30 days including today

  const weeks = [];

  let currentStart = new Date(thirtyDaysAgo);

  while (currentStart <= now) {
    const currentEnd = new Date(currentStart);
    currentEnd.setDate(currentEnd.getDate() + 6);
    if (currentEnd > now) currentEnd.setTime(now.getTime());

    const startDateStr = currentStart.toISOString().slice(0, 10);
    const endDateStr = currentEnd.toISOString().slice(0, 10);

    // Filter transactions in the current week
    const weeklyTransactions = transactions.filter((t) => {
      return t.transactionDate >= startDateStr && t.transactionDate <= endDateStr;
    });

    // Sum amounts by type
    let withdrawals = 0;
    let deposits = 0;
    let transfers = 0;

    for (const tx of weeklyTransactions) {
      if (tx.type === "Withdraw") withdrawals += tx.amount;
      else if (tx.type === "Deposit") deposits += tx.amount;
      else if (tx.type === "Transfer") transfers += tx.amount;
    }

    weeks.push({
      day: `${currentStart.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${currentEnd.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`,
      Withdrawals: withdrawals,
      Deposits: deposits,
      Transfers: transfers,
    });

    // Move to next week
    currentStart.setDate(currentStart.getDate() + 7);
  }

  return weeks;
};

export default function MonthlyTransactionChart() {
 /* const [isDark, setIsDark] = useState(false);
  const transactions = useAppSelector(state => state.EPages.DGetRecentTransactions?.transactionsHistory || []);
  const [weeksData, setWeeksData] = useState<any[]>([]);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    setIsDark(theme === "dark");

    const observer = new MutationObserver(() => {
      const updatedTheme = localStorage.getItem("theme") || "light";
      setIsDark(updatedTheme === "dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      setWeeksData(generateWeeks(transactions));
    }
  }, [transactions]);

  const axisColor = isDark ? "#ffffff" : "#374151";
  const gridColor = isDark ? "#4b5563" : "#e5e7eb";
  const tooltipBg = isDark ? "#1f2937" : "#ffffff";
  const tooltipText = isDark ? "#f9fafb" : "#1f2937";
  const tooltipBorder = isDark ? "#4b5563" : "#e2e8f0";

  return (
    <div className="w-full mx-auto rounded-2xl p-4 bg-white dark:bg-gray-800 shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
        Transactions in the Last 30 Days
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={weeksData}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="day"
            tick={{ fill: axisColor }}
            axisLine={{ stroke: axisColor }}
            tickLine={{ stroke: axisColor }}
          />
          <YAxis
            tick={{ fill: axisColor }}
            axisLine={{ stroke: axisColor }}
            tickLine={{ stroke: axisColor }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              borderColor: tooltipBorder,
              color: tooltipText,
            }}
            labelStyle={{ color: tooltipText }}
            itemStyle={{ color: tooltipText }}
          />
          <Legend wrapperStyle={{ color: axisColor }} />
          <Bar
            dataKey="Withdrawals"
            fill="rgba(255, 99, 132, 0.4)"
            stroke="rgba(255, 99, 132, 1)"
            strokeWidth={1}
          />
          <Bar
            dataKey="Deposits"
            fill="rgba(100, 181, 246, 0.4)"
            stroke="rgba(100, 181, 246, 1)"
            strokeWidth={1}
          />
          <Bar
            dataKey="Transfers"
            fill="rgba(153, 102, 255, 0.4)"
            stroke="rgba(153, 102, 255, 1)"
            strokeWidth={1}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );*/
}
