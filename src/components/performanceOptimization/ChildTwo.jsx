import React, { useMemo, useState } from 'react'

function ChildTwo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log('Component Two called');

  // const expensiveValue = (() => {
  //   console.log("Expensive calculation running...");
  //   let total = 0;
  //   for (let i = 0; i < 100000000; i++) {
  //     total += i;
  //   }
  //   return total + count;
  // })();



  // 

  const expensiveValue = useMemo(() => {
    console.log(" Expensive calculation running...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total + count;
  }, []);


  return (
    <><h1>ChildTwo</h1>
      <h2>Expensive Value: {expensiveValue}:{count}</h2>
      <button onClick={() => setCount(c => c + 1)}>+ Increase Count</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />

    </>
  )
}

export default ChildTwo