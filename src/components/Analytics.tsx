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
import Paper from "@material-ui/core/Paper";
import { analyticsTransactionsMachine } from "../machines/analyticsTransactionsMachine";
import ChartPie from "./Charts/PieChart";

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
  const { pageData, results } = current.context;

  // @ts-ignore
  if (window.Cypress) {
    // @ts-ignore
    window.analyticsTransactionService = analyticsTransactionService;
  }

  // useEffect(() => {
  //   send("FETCH", { ...dateRangeFilters, ...amountRangeFilters });
  // }, [send, dateRangeFilters, amountRangeFilters]);

  // const loadNextPage = (page: number) =>
  //   send("FETCH", { page, ...dateRangeFilters, ...amountRangeFilters });

  return (
    <>
    <Paper elevation={2}>
    {/* {filterComponent} */}
      <ChartPie size={300} data={[{label:'food',number:300},{label:'food',number:300},{label:'food',number:300}]}/>
    </Paper>
    </>
  );
};
export default Analytics;


<<<<<<< HEAD
>>>>>>> 093b9d8... teamwork ;)
=======
>>>>>>> Gilad
