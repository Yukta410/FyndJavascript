// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y()
// }
// x()

// function x(){
//     var a=7;
//     function y(){
//         console.log('heelo' +a);
//     }
//     return y
// }
// var z=x()
// console.log(z);

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y
// }

// const add=(function(){
//     let counter=0;
//     return function(){
//         counter+=1;
//         return counter
//     }
// })();
// function show(){
//     document.getElementById('demo').innerHTML=add()
// }

// function fun1() {
//     const name = 'Fynd';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const fun2 = fun1();
//   fun2();