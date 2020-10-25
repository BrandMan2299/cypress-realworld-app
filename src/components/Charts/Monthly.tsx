import React from "react";
import styled from 'styled-components'

interface DateProps {
  date: number;
};

interface IncomeProps {
  income: number;
  max: number;
};

interface ExpensesProps {
  expenses: number;
  max: number;
};
interface columnProps {
  expenses: number, income: number, max: number, month: number, size:number;
}

const ExpensesColumn = styled.div<ExpensesProps>`
 background-color: #ff5151;
 width: 32%;
 min-width:  20px;
  display: flex;
 color:  #ff5151;
 align-self: flex-end;
 border-radius:  5px 5px 1px 1px;
 height: ${props => props.expenses / props.max * 73}%;
`;

const IncomeColumn = styled.div<IncomeProps>`
 background-color: #65ff65;
 width: 32%;
 min-width:  20px;
 color:  #65ff65;
 display: flex;
 align-self: flex-end;
 border-radius:  5px 5px 1px 1px;
  height:${props => props.income / props.max * 73}%;
`;
const Date = styled.div`
 background-color: white;
 width: 100%;
 color:  black;
 display: flex;
 align-self: flex-end;
 justify-content: center;
`;


const Monthly: React.FC<columnProps> = ({ expenses, income, max, month, size }) => {
  return (
    <div >
      <div style={{ height: size, display: 'flex', flexDirection: 'row', justifyContent: "space-around", backgroundColor: 'white' }}>
        <ExpensesColumn expenses={expenses} max={max}></ExpensesColumn>
        <IncomeColumn income={income} max={max}></IncomeColumn>
      </div>
      <Date>{month}</Date>
    </div>
  );
}

export default Monthly;