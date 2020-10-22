import React from "react";

interface ColumnsProps {
  size: number;
  data: Month[];
}

interface Month {
  month: string;
  expenses: number;
  income: number;
}

const ChartCollumn: React.FC<ColumnsProps> = ({ size, data }) => {
  const maxMonth = data.reduce(
    (a, b): Month => {
      return {
        month: "accumulator",
        expenses: Math.max(a.expenses, b.expenses),
        income: Math.max(a.income, b.income),
      };
    }
  );
  const max:number=Math.max(maxMonth.income,maxMonth.expenses)
  
  return <div className="grid">
      
  </div>;
};

export default ChartCollumn;
