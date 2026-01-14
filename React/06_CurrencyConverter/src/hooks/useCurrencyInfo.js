import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [rates, setRates] = useState({});
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res)=> res.json())
        .then((res) => setRates(res.rates));
},[currency])

console.log(rates);
return rates;
 
}



export default useCurrencyInfo;