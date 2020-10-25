import React, { useEffect, useState, ReactNode } from "react";
import { useMachine } from "@xstate/react";
import {
  TransactionPagination,
  TransactionResponseItem,
  TransactionDateRangePayload,
  TransactionAmountRangePayload,
} from "../models";
import { httpClient } from "utils/asyncUtils";
import TransactionList from "./TransactionList";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { analyticsTransactionsMachine } from "../machines/analyticsTransactionsMachine";
import ChartPie, {PieData} from "./Charts/PieChart";
import styled from 'styled-components'
import { Transaction } from '../models/transaction'
import ColumnChart, { Month } from "./Charts/CollumnChart";
import { result } from "lodash";

const Paragraph = styled.div`
 display: flex;
 flex-direction: column;
 justify-content:space-around;
 &>span {
      margin:20px;
 }

`;

const ParagraphAndChart = styled.div`
 display: flex;
 justify-content:space-around;
 align-items:center;
 margin:10px;
 padding:10px;
 box-sizing:border-box;
`;
 interface resultInterface {
   Pie:PieData[]
   Coloumn:Month[]
 }

export interface AnalyticsProps {
  filterComponent: ReactNode;
  dateRangeFilters: TransactionDateRangePayload;
  amountRangeFilters: TransactionAmountRangePayload;
}

const Analytics: React.FC<AnalyticsProps> = ({
  filterComponent,
  dateRangeFilters,
  amountRangeFilters,
}) => {
  const [current, send, analyticsTransactionService] = useMachine(analyticsTransactionsMachine);
  const [render,setRender]=useState<boolean>(false)

  const  results  = current.context.results as resultInterface|any[] //results: the data u get from the backend
  useEffect(()=>{
    if (!Array.isArray(results)){
      setRender(true)
    }
  },[results])
  function renderer(results:resultInterface){
    return (
      <>
      {render&&
        <Paper elevation={2}>
          {filterComponent}
          <ParagraphAndChart>
            {PieParagraph()}
            <ChartPie size={300} data={results.Pie} />
          </ParagraphAndChart>
          <Divider />
          <ParagraphAndChart>
            {PieParagraph()}
            <ColumnChart size={300} allYear={results.Coloumn} />
          </ParagraphAndChart>
        </Paper>
  }
      </>
    );
  }
  // function theResultsAreHere(results:any[]|)
  // @ts-ignore
  if (window.Cypress) {
    // @ts-ignore
    window.analyticsTransactionService = analyticsTransactionService;
  }

  useEffect(() => {
    send("FETCH", { ...dateRangeFilters, ...amountRangeFilters });
  }, [send, dateRangeFilters, amountRangeFilters]);

  const loadNextPage = (page: number) =>
    send("FETCH", { page, ...dateRangeFilters, ...amountRangeFilters });

  const data = [{ label: 'food', number: 300 }, { label: 'fitness', number: 300 }, { label: 'sex', number: 300 }];
  const mockData  = [
    {
     date: 0,
     expenses: 300,
     income: 800
   },
    {
     date: 1,
     expenses: 200,
     income: 1200
   },
    {
     date: 2,
     expenses: 500,
     income: 1000
   },
    {
     date: 3,
     expenses: 1300,
     income: 800
   },
    {
     date: 4,
     expenses: 300,
     income: 800
   },
    {
     date: 5,
     expenses: 300,
     income: 800
   },
    {
     date: 6,
     expenses: 300,
     income: 800
   },
    {
     date: 7,
     expenses: 300,
     income: 1800
   },
    {
     date: 8,
     expenses: 300,
     income: 800
   },
    {
     date: 9,
     expenses: 300,
     income: 800
   },
    {
     date: 10,
     expenses: 300,
     income: 800
   },
    {
     date: 11,
     expenses: 300,
     income: 800
   },
   ]
  const PieParagraph = (): JSX.Element => {
    return (
      <Paragraph>
        {
          data.map(obj => <><span>You spent {obj.number} on {obj.label} </span></>)
        }
      </Paragraph>
    )
  }
  return (
    <>
    {render&&
      renderer(results as resultInterface)
}
    </>
  );
};
export default Analytics;


