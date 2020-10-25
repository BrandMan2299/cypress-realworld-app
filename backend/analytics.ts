// import {Transaction} from "../src/models/transaction"

// interface Balance{
//     income:number,
//     outcome:number
// }

// interface MonthlyBalance{
//     Jan:Balance
//     Feb:Balance
//     Mar:Balance
//     Apr:Balance
//     May:Balance
//     Jun:Balance
//     Jul:Balance
//     Aug:Balance
//     Sep:Balance
//     Oct:Balance
//     Nov:Balance
//     Dec:Balance
// }

// function extractStatistics(transactions:Transaction[]):Array<any>{
//     let initialBalance:Balance={income:0,outcome:0}
//     let monthleyBalance:MonthlyBalance={
//         Jan:initialBalance,
//         Feb:initialBalance,
//         Mar:initialBalance,
//         Apr:initialBalance,
//         May:initialBalance,
//         Jun:initialBalance,
//         Jul:initialBalance,
//         Aug:initialBalance,
//         Sep:initialBalance,
//         Oct:initialBalance,
//         Nov:initialBalance,
//         Dec:initialBalance
//     }
//     transactions.forEach((transaction:Transaction)=>{
//         let month=new Date(transaction.createdAt).toDateString().split(" ")[1] as keyof MonthlyBalance
//         monthleyBalance[month].income

//     })
//     return []
// }

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
interface Months {
  date: number;
}

interface ColumnsData {
  expenses: number;
  income: number;
  date: number;
}
let mockData: Transaction[] = [
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    reasonOfPayment: Reasons.food,
    amount: 111111,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    reasonOfPayment: Reasons.food,
    amount: 111111,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    reasonOfPayment: Reasons.sex,
    amount: 111111,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    reasonOfPayment: Reasons.sex,
    amount: 111111,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    reasonOfPayment: Reasons.sport,
    amount: 111111,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    reasonOfPayment: Reasons.sex,
    amount: -555555,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    reasonOfPayment: Reasons.sport,
    amount: 111111,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    reasonOfPayment: Reasons.sex,
    amount: -111111,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    reasonOfPayment: Reasons.sport,
    amount: -111111,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    reasonOfPayment: Reasons.sex,
    amount: 111111,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    reasonOfPayment: Reasons.sex,
    amount: 111111,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    amount: 333333,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    amount: 111111,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
  {
    privacyLevel: DefaultPrivacyLevel.private,
    id: "-jCJOEkLh0J",
    uuid: "0dd2a4e1-7cfd-4acd-bf53-6a377be01c56",
    source: "RskoB7r4Bic",
    amount: -444444,
    description: "Payment: t45AiwidW to qywYp6hS0U",
    receiverId: "qywYp6hS0U",
    senderId: "t45AiwidW",
    balanceAtCompletion: 38316,
    status: TransactionStatus.complete,
    requestStatus: "",
    requestResolvedAt: "2020-06-03T01:22:21.937Z",
    createdAt: new Date("2019-08-24T18:58:38.088Z"),
    modifiedAt: new Date("2020-05-21T11:46:37.285Z"),
  },
];
// let mockColumnData = [
//   {date:0, expenses:37800, income: 288800},
//   {date:1, expenses:100, income: 100},
//   {date:2, expenses:200, income: 100},
//   {date:3, expenses:300, income: 400},
//   {date:4, expenses:500, income: 500},
//   {date:5, expenses:1100, income: 450},
//   {date:6, expenses:850, income: 250},
//   {date:7, expenses:250, income: 10000},
//   {date:8, expenses:560, income: 20055},
//   {date:9, expenses:32500, income: 205550},
//   {date:10, expenses:30220, income: 856200},
//   {date:11, expenses:31200, income: 27800},
// ]
export function Pies(transactions: Transaction[]): PieData[] {
  let solution: any = { other: 0 };
  let newTransaction: Transaction[]=[...transactions];
  newTransaction.forEach((trans) => {
    // trans.amount = trans.amount <= 0 ? trans.amount : 0;
    if (trans.reasonOfPayment) {
      if (!solution[trans.reasonOfPayment]) {
        solution[trans.reasonOfPayment] = trans.amount;
      } else {
        solution[trans.reasonOfPayment] -= trans.amount;
      }
    } else {
      solution.other -= trans.amount;
    }
  });

  let temp = Object.entries(solution);
  let resultPieData: PieData[] = [];
  for (let [key, val] of temp) {
    let newOBJ: any = { label: key, amount: val };
    resultPieData.push(newOBJ);
  }



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
        resultColumnData[monthNumber].expenses -= trans.amount
    } 


  });
  return resultColumnData;
}

// enum Month {
//   label: string;
//   amount: number;
// }

// Pies(mockPieData);
// module.exports = {Pies}