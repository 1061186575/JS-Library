
function traversalElement(elem, callback) {
    if (!elem) return;
    callback(elem);
    var elemCount = elem.childElementCount;
    for (let i = 0; i < elemCount; i++) {
        traversalElement(elem.children[i], callback);
    }
}


// 示例: 输出页面上所有有id的元素

console.time('遍历需要的时间')  // 记录遍历需要的时间
traversalElement(document.documentElement, function (elem) {
    if (elem.id) {
        console.log(elem);
        console.log('id为: ' + elem.id);
    }
});
console.timeEnd('遍历需要的时间') // 输出遍历需要的时间


