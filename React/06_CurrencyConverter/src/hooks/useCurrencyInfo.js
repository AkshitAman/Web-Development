import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [rates, setData] = useState({});
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res)=> res.json())
        .then((res) => setData(res.rates));
},[currency])

console.log(rates);
return rates;
 
}



export default useCurrencyInfo;