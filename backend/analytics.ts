import { Transaction } from "../src/models/transaction";

enum DefaultPrivacyLevel {
  public = "public",
  private = "private",
  contacts = "contacts",
}

enum TransactionStatus {
  pending = "pending",
  incomplete = "incomplete",
  complete = "complete",
}

export enum Reasons {
  food = "Food",
  sport = "Sport",
  sex = "Sex",
  other = "Other",
}

interface PieData {
  label: string;
  amount: number;
}
interface ColumnsData {
  expenses: number;
  income: number;
  date: number;
}


export function Pies(transactions: Transaction[]): PieData[] {
  let solution: any = { other: 0 };
  let newTransaction: Transaction[]=[...transactions];
  newTransaction.forEach((trans) => {
    // trans.amount = trans.amount <= 0 ? trans.amount : 0;
    if (trans.reasonOfPayment) {
      if (!solution[trans.reasonOfPayment]) {
        solution[trans.reasonOfPayment] = trans.amount;
      } else {
        solution[trans.reasonOfPayment] += trans.amount;
      }
    } else {
      solution.other += trans.amount;
    }
  });

  let temp = Object.entries(solution);
  let resultPieData: PieData[] = [];
  for (let [key, val] of temp) {
    let newOBJ: any = { label: key, amount: val };
    resultPieData.push(newOBJ);
  }

  resultPieData.forEach(dat => (dat.amount * -1))

  return resultPieData;
}

export function Coloumns(transactions: Transaction[]): ColumnsData[] {
  let resultColumnData: ColumnsData[] = [
    { expenses: 0, income: 0, date: 0 },
    { expenses: 0, income: 0, date: 1 },
    { expenses: 0, income: 0, date: 2 },
    { expenses: 0, income: 0, date: 3 },
    { expenses: 0, income: 0, date: 4 },
    { expenses: 0, income: 0, date: 5 },
    { expenses: 0, income: 0, date: 6 },
    { expenses: 0, income: 0, date: 7 },
    { expenses: 0, income: 0, date: 8 },
    { expenses: 0, income: 0, date: 9 },
    { expenses: 0, income: 0, date: 10 },
    { expenses: 0, income: 0, date: 11 },
  ];

  let newTransaction: Transaction[]=[...transactions];
  newTransaction.forEach((trans) => {
      let monthNumber = new Date(trans.createdAt).getMonth();
    if (trans.amount >= 0) {
        resultColumnData[monthNumber].income += trans.amount
    } else{
        resultColumnData[monthNumber].expenses += trans.amount
    } 
  });

//   resultColumnData.forEach(dat => dat.expenses * (-1))

  return resultColumnData;
}

