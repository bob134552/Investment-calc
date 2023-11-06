import { useState, React } from "react";

import './InvestmentForm.css'

const initialInput = {
    'current-savings': 0,
    'yearly-contribution': 0,
    'expected-return': 0,
    'duration': 0,
}

const InvestmentForm = (props) => {
    const [enteredCurrentSavings, setCurrentSavings] = useState('0');
    const [enteredYearlySavings, setYearlySavings] = useState('0');
    const [enteredExpectedInterest, setExpectedInterest] = useState('0');
    const [enteredInvestmentDuration, setInvestmentDuration] = useState('0');

    const [userInput, setUserInput] = useState(initialInput);


    const currentSavingsInputHandler = e => {
        setCurrentSavings(e.target.value);
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                ['current-savings']: e.target.value,
            };
        });
    };

    const yearlySavingsInputHandler = e => {
        setYearlySavings(e.target.value);
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                ['yearly-contribution']: e.target.value,
            };
        });
    };

    const expectedInterestInputHandler = e => {
        setExpectedInterest(e.target.value);
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                ['expected-return']: e.target.value,
            };
        });
    };

    const investmentDurationInputHandler = e => {
        setInvestmentDuration(e.target.value);
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                ['duration']: e.target.value,
            };
        });
    };

    const resetHandler = () => {
        setCurrentSavings('0');
        setYearlySavings('0');
        setExpectedInterest('0');
        setInvestmentDuration('0');
        setUserInput(initialInput);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput);
    }

    return (
        <form onSubmit={submitHandler} className="form">
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