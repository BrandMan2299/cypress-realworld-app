import React from "react";
import styled from 'styled-components'
import Monthly from "./Monthly"

export interface Month {
  expenses: number, income: number, date: number;
}

interface  props{
  allYear: Month[],
  size: number
}



const ColumnTable = styled.div`
 background-color: white;
 width: 80%;
 display: flex;
 border-radius: 30px 30px 1px 1px;
 flex-direction: row;
  justify-content: space-around;
`;


const X = styled.div`
 background-color: white;
 width: 5%;
 display: flex;
 height: 100%; 
 align-self: center;
 flex-direction: column;
 align-self: space-around;
 justify-content: space-between;
 align-self: flex-end;
 padding-bottom: 12px;
`;

const Money = styled.div`
 background-color: white;
 width: 100%;
 display: flex;
 flex-direction: column;
 height: 10%; 
 align-self: flex-end;
align-content: flex-end;
justify-content: flex-end;
font-size:10px;
white-space: nowrap;

`;


const ColumnChart: React.FC<props> = ({allYear,size}) => {
  const max: number= Math.max(...allYear.map((month) => {
     return Math.max(month.expenses,month.income)}))
     console.log(allYear)
  return (
    <ColumnTable >
    {allYear.map((month) => (
       <Monthly expenses={month.expenses} income={month.income} month={month.date} max={max} size={size}></Monthly>
    ))}

      <X>
        <Money> - {10* max/8}</Money>
        <Money> - {9 * max/8}</Money>
        <Money> - {8 * max/8}</Money>
        <Money> - {7 * max/8}</Money>
        <Money> - {6 * max/8}</Money>
        <Money> - {5 * max/8}</Money>
        <Money> - {4 * max/8}</Money>
        <Money> - {3* max/8}</Money>
        <Money> - {2 * max/8}</Money>
        <Money> - {max/8}</Money>
        <Money> - 0</Money>
      </X>
    </ColumnTable>
  );
}

export default ColumnChart;