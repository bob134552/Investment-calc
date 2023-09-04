import React from 'react';
import InvestmentTableHead from './InvestmentTableHead';
import InvestmentTableBodyItem from './InvestmentTableBodyItem';

import './InvestmentTable.css'


const InvestmentTable = () => {

    return (
        <table className="result">
            <InvestmentTableHead/>
            <tbody>
                <InvestmentTableBodyItem/>
            </tbody>
        </table>
    )
};

export default InvestmentTable;