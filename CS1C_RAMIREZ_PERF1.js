// Differentiation of let, const, and var in JavaScript

// var: Function-scoped, can be reassigned/redeclared, hoisted as undefined
var exampleVar = "I am a var variable";
exampleVar = "I can be reassigned";
var exampleVar = "I can be redeclared";

// let: Block-scoped, can be reassigned but not redeclared, hoisted but uninitialized
let exampleLet = "I am a let variable";
exampleLet = "I can be reassigned";

// const: Block-scoped, cannot be reassigned/redeclared, hoisted but uninitialized
const exampleConst = "I am a const variable";

// Best Practices: Use `const` by default, `let` if reassignment is needed, avoid `var`