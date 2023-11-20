import React from 'react';
import InvestmentTableHead from './InvestmentTableHead';
import InvestmentTableBodyItem from './InvestmentTableBodyItem';

import classes from './InvestmentTable.module.css'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const InvestmentTable = (props) => {

    return (
        <table className={classes.result}>
            <InvestmentTableHead/>
            <tbody>
                {props.data.map((yearData) => (
                    <InvestmentTableBodyItem
                        year={yearData.year}
                        savingsEnd={formatter.format(yearData.savingsEndOfYear)}
                        interest={formatter.format(yearData.yearlyInterest)}
                        totalInterest={formatter.format(yearData.savingsEndOfYear -
                            props.initialInvestment -
                            yearData.yearlyContribution *
                            yearData.year)}
                        totalInvested={formatter.format(props.initialInvestment +
                            yearData.yearlyContribution * yearData.year)}
                    />
                ))}
            </tbody>
        </table>
    )
};

export default InvestmentTable;