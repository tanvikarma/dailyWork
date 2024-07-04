// const obj = { width: 10, height: 15 };
// const area = obj.width * obj.heigth;
// const a = 55;
// // let b = a/0;
// let b: number = 123;
// let  cv: number =234;
// let namekj: string = 'tanvi';
// let nameofuser: any = 'shriffle';
// let  marks: any = 873;


// console.log("Number Properties in TypeScript:"); 
// console.log("Maximum value of a number variable has :" 
//                                    + Number.MAX_VALUE); 
// console.log("The least value of a number variable has:" 
//                                     + Number.MIN_VALUE); 
// console.log("Value of Negative Infinity:" 
//                              + Number.NEGATIVE_INFINITY); 
// console.log("Value of Negative Infinity:" 
//                              + Number.POSITIVE_INFINITY);

// var num1 = 2525.30 
// var val = num1.toExponential(); 
// console.log(val)



var num = new Number(10); 
// console.log(num);

// var numValue = num.toString();
// console.log(typeof numValue);

// console.log(num.toString()); 
console.log(typeof(num.toString(2))); 
// console.log(num.toString(8));

// var day = 0 
// if( day<=0 || day > 7) { 
//    day = Number.NaN 
//    console.log("Day is "+ day) 
// } else { 
//    console.log("Value Accepted..") 
// }

// let emplName:string =  "tanvi";    
// let compName:string = "Shriffle";    
 
// let emplDetail1: string = emplName + " works in the " + compName + " company.";    
  
// let emplDetail2: string = `${emplName} works in the ${compName} company.`;    
// console.log("Before ES6: " +emplDetail1);   
// console.log("After ES6: " +emplDetail2);

// type Pet = 'mouse' | 'dog' | 'Rabbit';   
// let pet: Pet;   
// if(pet = 'mouse'){   
//     console.log("Correct");   
// };   
// if(pet = 'Deer')   
// {   
//     console.log(" we got compilation error type!");   
// };  

let variable: null;
variable = null;
 
console.log(typeof variable);
 
console.log(variable == null);

console.log(variable == undefined);
 
console.log(null == undefined);
 
console.log(variable === undefined);
 
console.log(null === undefined);