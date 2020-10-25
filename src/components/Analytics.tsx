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

import {Divider} from "@material-ui/core";

import Paper from "@material-ui/core/Paper";
import { analyticsTransactionsMachine } from "../machines/analyticsTransactionsMachine";
import ChartPie, {PieData} from "./Charts/PieChart";
import styled from 'styled-components'
import { Transaction } from '../models/transaction'
import ColumnChart, {Month} from "./Charts/CollumnChart";

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



export interface AnalyticsProps {
  // filterComponent: ReactNode;
  // dateRangeFilters: TransactionDateRangePayload;
  // amountRangeFilters: TransactionAmountRangePayload;
}


const Analytics: React.FC<AnalyticsProps> = ({
  // filterComponent,
  // dateRangeFilters,
  // amountRangeFilters,
}) => {
  const [current, send, analyticsTransactionService] = useMachine(analyticsTransactionsMachine);

  const { results } = current.context; //results: the data u get from the backend

  console.log({results:results});
  
  // @ts-ignore
  if (window.Cypress) {
    // @ts-ignore
    window.analyticsTransactionService = analyticsTransactionService;
  }


  useEffect(() => {
    send("FETCH", { ...dateRangeFilters, ...amountRangeFilters });
  }, [send, dateRangeFilters, amountRangeFilters]);
  





  const PieParagraph = (data: any[]): JSX.Element => {
    return (
      <Paragraph>
        {
          data.map(obj => <><span>You spent {obj.number} on {obj.label} </span></>)
        }
      </Paragraph>
    )
  }
  return (
    <>{
      results? results.length > 0&& 
   
      <Paper elevation={2}>
        {filterComponent}
        <ParagraphAndChart>
          {PieParagraph(results[0].Pie)}
          <ChartPie size={300} data={results[0].Pie} />
        </ParagraphAndChart>
        <Divider />
        <ParagraphAndChart>
          {PieParagraph(results[0].Pie)}
          <ColumnChart size={300} allYear={results[0].Coloumn} />
        </ParagraphAndChart>
      </Paper>
       : null}
    </>
  );
};
export default Analytics;


