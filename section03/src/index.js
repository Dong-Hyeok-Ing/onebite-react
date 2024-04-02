// const moudulData = require("./math");
// console.log(moudulData.add(1, 2));
// console.log(moudulData.sub(1, 2));
// console.log(moudulData);

// package.json "type": "module" require(X)
// const {add, sub} = require("./math"); 구조분해 할당
// console.log(add(1,2));
// console.log(sub(4, 2));


// import multiply from "./math.js";
// import {add, sub} from "./math.js";
// 위를 하나로 합치는것도 가능 코드의 중복제거
//import multiply, {add , sub} from "./math.js";
// console.log(add(1,2));
// console.log(sub(4, 2));
// console.log(multiply(3, 2));

import randomColor from "randomcolor"
const color = randomColor();
console.log(color);

