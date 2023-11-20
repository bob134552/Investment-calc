import React from 'react';


const InvestmentTableBodyItem = (props) => {

    return (
        <tr key={props.year}>
            <td>{props.year}</td>
            <td>{props.savingsEnd}</td>
            <td>{props.interest}</td>
            <td>{props.totalInterest}</td>
            <td>{props.totalInvested}</td>
        </tr>
    )
};

export default InvestmentTableBodyItem;