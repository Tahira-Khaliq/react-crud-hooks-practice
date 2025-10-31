import React, { useRef, useState } from 'react';

// function RefComponent() {

//     const num1 = useRef(null);
//     const num2 = useRef(null);
//     const resultRef = useRef(null);

//     function sumOf() {
//         const cnum1 = Number(num1.current.value);
//         const cnum2 = Number(num2.current.value);
//         resultRef.current.innerText = cnum1 + cnum2;
//     }
//     console.log('Ref');

//     return (
//         <>
//             <input ref={num1} type="text" /> +
//             <input ref={num2} type="text" />
//             <button onClick={sumOf}>Add</button>

//             <div>
//                 Result: <strong ref={resultRef}></strong>
//             </div>
//         </>
//     );
// }
// export default RefComponent;



// function RefComponent() {

//     function sumOf() {
//         const num1 = document.getElementById('num1').value;
//         const num2 = document.getElementById('num2').value;
//         document.getElementById('result').innerText = Number(num1) + Number(num2);
//     }
//     console.log('Chay-gya hai');

//     return (
//         <>
//             <input id="num1" type="text" /> +
//             <input id="num2" type="text" />
//             <button onClick={sumOf}>Add</button>
//             <p>
//                 Result: <span id="result" style={{ color: 'red' }}></span>
//             </p>
//         </>
//     );
// }
// export default RefComponent;


// function RefComponent() {
//     // const sum = 0
//     let num1 = 0

//     function handleCount() {
//         console.log('func called',num1);
//         num1=+2
//     }
//     console.log('Counting Start');
//     return (
//         <>
//             <h1>Sum of Nums is:{num1}</h1> <br />
//             <button onClick={handleCount}>Add</button>
//         </>
//     )
// }

// export default RefComponent;




// function RefComponent() {
//     const [sum, setSum] = useState(0)
//     const [num1, setNum1] = useState(0)
//     const [num2, setNum2] = useState(0)

//     function handleSum() {
//         setSum(Number(num1) + Number(num2))
//     }
//     console.log('Use-State', sum);
//     return (
//         <>
//             <input type="text" id="num1" value={num1} onChange={(e) => setNum1(e.target.value)} /> +
//             <input type="text" id='num2' value={num2} onChange={(e) => setNum2(e.target.value)} />

//             <button onClick={handleSum}>Add</button>

//             <p>Result: <span style={{ color: 'red' }}>{sum}</span></p>
//         </>
//     )
// }
// export default RefComponent;



// 
// export default RefComponent;
