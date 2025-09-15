// // function hello(){
// //     return []      y bhi ek custom hook hi h
// // }

// import { useEffect, useState } from "react";
// // it is unwritten rule that while hooks name must starts with the 'use' statement...
// function useCurrencyInfo(currency){
//     // api call krr rha hu hook s 
//     // jb hook load ho to api call hoga 
//     // jese koe event mount hota h to life cycle trigger call hota h jise hmm useEffect bolte h
//     const[data,setData]=useState({})
//     useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res)=> setData(res[currency]))
//     },[currency]) 
//     console.log(data);
//     return data
//     // [currency] isi ko hmm dependency array bolte h kyu jo usme likha hcurrency usi k change hone pr hme api call krni h


// // this is the way json is parsed directly 
// //     fetch("https://api.example.com/data")
// //   .then(response => response.json())   // response body already converted to JSON
// //   .then(data => {
// //     console.log(data);   // JSON object
// //     console.log(data.name);
// //   })
// //   .catch(err => console.error(err));

//     // this is the way parse  manually 
// //     fetch("https://api.example.com/data")
// //   .then(response => response.text())   // get raw string
// //   .then(str => {
// //     const obj = JSON.parse(str);       // convert string → JSON object
// //     console.log(obj);
// //   })
// //   .catch(err => console.error(err));

// // .then k ander callback milta h hme 
   

// // api calls value jo return krti h vo string type ki hoti maximum time but hme json form m chahiye hoti h

// }



// export default useCurrencyInfo;
// // hmm pura ka pura method hi return krr rhe h
// // now using abve statements we have made sure that we are using custom hooks..


// // ____________________________________________________________________________________

import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_UdE4CNO71F0miou5fMRSbknm408CH9NYr3AdWSNE/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;