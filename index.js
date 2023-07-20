import _ from "./lib/index.esm.js";
// console.log(_.compact([1, 2, false, null, 0, "", undefined,NaN]));
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
