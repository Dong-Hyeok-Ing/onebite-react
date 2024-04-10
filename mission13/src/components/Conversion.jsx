import {useState} from "react";
// import CurrencyInput from "./CurrencyInput";

const EXCHANGE_RATE = 1300;

const CurrencyInput = ({currency, amount, onChange}) => {
    return (
        <>
            <span>{currency}</span>
            <input
                type='text'
                value={amount}
                onChange={(event) => onChange(currency, event.target.value)}
            />
        </>
    )
}

const Conversion = () => {
    const [amounts, setAmounts] = useState({
        krw: 0,
        usd: 0,
    });

    const handleUsdChange = (currency, amount) => {
        if (currency === 'krw') {
            setAmounts({
                krw: amount,
                usd: amount / EXCHANGE_RATE
            });
        } else {
            setAmounts({
                krw: amount * EXCHANGE_RATE,
                usd: amount
            })
        }
    }

    return (
        <>
            <h2>환율 변환기 (KRW-USD)</h2>
            <CurrencyInput currency={'krw'} amount={amounts.krw} onChange={handleUsdChange} />
            <CurrencyInput currency={'usd'} amount={amounts.usd} onChange={handleUsdChange} />
        </>
    );
}

export default Conversion;