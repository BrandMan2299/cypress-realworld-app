<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from "react";
import { httpClient } from "utils/asyncUtils";

function Analystics(){

    return (
        <div>
            
        </div>
    )
}

export default Analystics;
=======
=======
>>>>>>> Gilad
=======
>>>>>>> f54e3df... Merge branch 'Kachlon' into Itai
import React, { useEffect, useState, ReactNode } from "react";
import { useMachine } from "@xstate/react";
import {
  TransactionPagination,
  TransactionResponseItem,
  TransactionDateRangePayload,
  TransactionAmountRangePayload,
} from "../models";
<<<<<<< HEAD

import { httpClient } from "utils/asyncUtils";
import TransactionList from "./TransactionList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { analyticsTransactionsMachine } from "../machines/analyticsTransactionsMachine";
import ChartPie from "./Charts/PieChart";
=======
import { httpClient } from "utils/asyncUtils";
import TransactionList from "./TransactionList";
import { makeStyles } from "@material-ui/core/styles";
import {Divider} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { analyticsTransactionsMachine } from "../machines/analyticsTransactionsMachine";
import ChartPie from "./Charts/PieChart";
import styled from 'styled-components'

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

>>>>>>> f54e3df... Merge branch 'Kachlon' into Itai

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
  const { pageData, results } = current.context;

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

<<<<<<< HEAD
=======
  const data=[{label:'food',number:300},{label:'fitness',number:300},{label:'sex',number:300}];
  
  const PieParagraph =():JSX.Element=>{
      return (
       <Paragraph>
        { 
            data.map(obj=><><span>You spent {obj.number} on {obj.label} </span></>)
        }
      </Paragraph>
)
    }
>>>>>>> f54e3df... Merge branch 'Kachlon' into Itai
  return (
    <>
    <Paper elevation={2}>
    {filterComponent}
<<<<<<< HEAD
      <ChartPie size={300} data={[{label:'food',number:300},{label:'food',number:300},{label:'food',number:300}]}/>
=======
      <ParagraphAndChart>
        {PieParagraph()}
         <ChartPie size={300} data={data}/>
      </ParagraphAndChart>
      <Divider/>
      <ParagraphAndChart>
        {PieParagraph()}
         <ChartPie size={300} data={data}/>
      </ParagraphAndChart>
>>>>>>> f54e3df... Merge branch 'Kachlon' into Itai
    </Paper>
    </>
  );
};
export default Analytics;


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 093b9d8... teamwork ;)
=======
>>>>>>> Gilad
=======
>>>>>>> f54e3df... Merge branch 'Kachlon' into Itai
