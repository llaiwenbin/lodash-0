/***
 * _.concat(array, [values])
 * let array =[1]
 * _.concat(array, 2, [3], [[4]]);  1,2,3,[4]
 * 
 * @arr (Array): 被连接的数组。
 * @[values]:  连接的值
 */
function concat() {
    // eslint-disable-next-line prefer-rest-params
    const args = [].slice.call(arguments)
    const arr: any[] = args[0]
    let temp: any[];
    for (let i = 1; i < args.length; i++) {
        temp = isArray(args[i]) ? args[i] : [args[i]]
        temp.forEach(res => {
            arr.push(res)
        })
    }
    return arr
}


// typeof判断基本类型
// stringfy判断所有类型
function isType(res, type) {
    return Object.prototype.toString.call(res) === `[object ${type}]`
}

function isArray(arr) {
    return isType(arr, 'Array')
}
export default concat