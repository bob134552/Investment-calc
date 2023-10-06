import { useState, React } from "react";

import './InvestmentForm.css'

const InvestmentForm = (props) => {
    const [enteredCurrentSavings, setCurrentSavings] = useState('0');
    const [enteredYearlySavings, setYearlySavings] = useState('0');
    const [enteredExpectedInterest, setExpectedInterest] = useState('0');
    const [enteredInvestmentDuration, setInvestmentDuration] = useState('0');

    const currentSavingsInputHandler = e => {
        setCurrentSavings(e.target.value);
    };

    const yearlySavingsInputHandler = e => {
        setYearlySavings(e.target.value);
    };

    const expectedInterestInputHandler = e => {
        setExpectedInterest(e.target.value);
    };

    const investmentDurationInputHandler = e => {
        setInvestmentDuration(e.target.value);
    };

    const resetHandler = () => {
        setCurrentSavings('0');
        setYearlySavings('0');
        setExpectedInterest('0');
        setInvestmentDuration('0');
    };

    return (
        <form className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings"
                        onChange={currentSavingsInputHandler}
                        value={enteredCurrentSavings}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution"
                        onChange={yearlySavingsInputHandler}
                        value={enteredYearlySavings}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return"
                        onChange={expectedInterestInputHandler}
                        value={enteredExpectedInterest}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration"
                        onChange={investmentDurationInputHandler}
                        value={enteredInvestmentDuration}
                    />
                </p>
            </div>
            <p className="actions">
                <button onClick={resetHandler} className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
};


export default InvestmentForm;