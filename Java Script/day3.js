console.log(10 == "10");
console.log(10 === "10");

console.log(5**3);

let num1 = 10;
let num2 = "20";
let sum = num1 + num2;
console.log("Sum is : " + sum);
sum = num1 - num2;
console.log("Sum is : " + sum);

let n = 15;
let str = n.toString();
document.write("Type of str : " + typeof str + "    str = " + str);

var s = "125";
let num = parseInt(s);
document.write("<br>Type of num : " + typeof num + "    num = " + num);

let language = "JAVA";

console.log("Hello i am learning " + language);
console.log('Hello i am learning ', language);
console.log(`Hello i am learning ${language}`);


let s1 = "Hello";

console.log("Original String : " + s1);
console.log("First Element : " + s1.charAt(0));
console.log("ASCII value of element : " + s1.charCodeAt(0));
console.log("Start with " + s1.charAt(0) +" : "+ s1.startsWith("H"));
console.log("Ends with " + s1.charAt(s1.length-1) +" : "+ s1.endsWith("o"));
console.log("Index of element : " + s1.indexOf("l"));
console.log("Last Index of element : " + s1.lastIndexOf("l"));
console.log("Check present or not : " + s1.includes("e"));
console.log("Length of String : " + s1.length);
s1 = s1.replace("H","h");
console.log("Updated String : " + s1);
s1 = s1.replaceAll("l","z");
console.log("Updated String : " + s1);