/**
 * _.compact(arr)
 * _.compact([1, 2, false, null, 0, "", undefined,NaN])
 * 
 * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
 * @arr (Array): 待处理的数组
 * 
 * @return (Array): 返回过滤掉假值的新数组。
 * 
 */
function compact(arr) {
  const result: any[] = []
  let temp;
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i]
    if (temp && !isNaN(temp)) {
      result.push(temp)
    }
  }
  return result;
}
// 与 JavaScript 中其他的值不同，NaN不能通过相等操作符（== 和 ===）来判断，因为 NaN == NaN 和 NaN === NaN 都会返回 false。因此，isNaN 就很有必要了。

function isNaN(value) {
  const n = Number(value);
  return n !== n;
}

export default compact;
