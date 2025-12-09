import { useState, useEffect } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  // if hook returns null initially, fallback to {}
  const currencyInfo = useCurrencyInfo(from) || {};

  // will be [] on first render, no crash
  const options = Object.keys(currencyInfo);

  const swap = () => {
  setFrom(to);
  setTo(from);
  setAmount(convertedAmount === "" ? "" : convertedAmount);
  setConvertedAmount(amount === "" ? "" : amount);
};


  const convert = () => {
  if (!currencyInfo || !currencyInfo[to] || amount === "") {
    setConvertedAmount("");
    return;
  }

  const amt = Number(amount);

  if (isNaN(amt)) {
    setConvertedAmount("");
    return;
  }

  const result = amt * currencyInfo[to];
  setConvertedAmount(result.toFixed(2)); // optional formatting
};



  // auto-convert whenever amount/from/to/rates change
  useEffect(() => {
    convert();
  }, [amount, from, to, currencyInfo]);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?_gl=1*g0o8wy*_ga*MTkzNjY5MDUzNi4xNzU5NTA2MTU1*_ga_8JE65Q40S6*czE3NjUyNjUxMDkkbzMkZzEkdDE3NjUyNjYyODIkajU2JGwwJGgw')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                // ✅ change source currency
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                // ✅ update amount when typing
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Optional convert button if you want manual trigger
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
            */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;




// import { useState, useEffect } from 'react'
// import { InputBox } from './components'
// import useCurrencyInfo from './hooks/useCurrencyInfo'


// function App() {

//   const [amount, setAmount] = useState()
//   const [from, setFrom] = useState("usd")
//   const [to, setTo] = useState("inr")
//   const [convertedAmount, setConvertedAmount] = useState(0)

//   const currencyInfo = useCurrencyInfo(from)

//   const options = Object.keys(currencyInfo)

//   const swap = () => {
//     setFrom(to)
//     setTo(from)
//     setConvertedAmount(amount)
//     setAmount(convertedAmount)
//   }

//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to])
//   }
//   useEffect(()=>convert(),[amount,from,to,currencyInfo])

//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?_gl=1*g0o8wy*_ga*MTkzNjY5MDUzNi4xNzU5NTA2MTU1*_ga_8JE65Q40S6*czE3NjUyNjUxMDkkbzMkZzEkdDE3NjUyNjYyODIkajU2JGwwJGgw')`,
//       }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert()

//             }}
//           >
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) => setAmount(amount)}
//                 selectCurrency={from}
//                 onAmountChange={(amount) => setAmount(amount)}
//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >
//                 swap
//               </button>
//             </div>
//             <div className="w-full mt-1 mb-4">
//               <InputBox
//                 label="To"
//                 amount={convertedAmount}
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) => setTo(currency)}
//                 selectCurrency={to}
//                 amountDisable
//               />
//             </div>
//             {/* <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button> */}

            

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App