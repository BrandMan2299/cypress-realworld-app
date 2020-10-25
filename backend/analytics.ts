import {Transaction} from "../src/models/transaction"

interface Balance{
    income:number,
    outcome:number
}

interface MonthlyBalance{
    Jan:Balance
    Feb:Balance
    Mar:Balance
    Apr:Balance
    May:Balance
    Jun:Balance
    Jul:Balance
    Aug:Balance
    Sep:Balance
    Oct:Balance
    Nov:Balance
    Dec:Balance
}

function extractStatistics(transactions:Transaction[]):Array<any>{
    let initialBalance:Balance={income:0,outcome:0}
    let monthleyBalance:MonthlyBalance={
        Jan:initialBalance,
        Feb:initialBalance,
        Mar:initialBalance,
        Apr:initialBalance,
        May:initialBalance,
        Jun:initialBalance,
        Jul:initialBalance,
        Aug:initialBalance,
        Sep:initialBalance,
        Oct:initialBalance,
        Nov:initialBalance,
        Dec:initialBalance
    }
    transactions.forEach((transaction:Transaction)=>{
        let month=new Date(transaction.createdAt).toDateString().split(" ")[1] as keyof MonthlyBalance
        monthleyBalance[month].income
        

    })
    return []
}
