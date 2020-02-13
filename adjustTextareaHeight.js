/**
 *  根据输入内容的长度自动改变文本域的高度
 */

/**
 * 
 * @param {被监听的元素, 默认是window} textareaElem 
 * @param {文本域的最小高度, 默认是32} minHeight 
 * @param {文本域的最大高度, 默认是500} maxHeight 
 * 
 */
function adjustTextareaHeight(textareaElem = window, minHeight = 32, maxHeight = 500) {
    textareaElem.addEventListener('input', function (e) {
        var tElem = e.target;
        if (tElem.tagName !== 'TEXTAREA') return;
        
        var unit = 'px'
        var diff = tElem.offsetHeight - tElem.clientHeight;
        
        tElem.style.height = 0; // 设置高度为0是为了改变tElem.scrollHeight

        if (tElem.scrollHeight <= minHeight){
            tElem.style.height = minHeight + unit;
            console.log('<=');
        } else if(tElem.scrollHeight >= maxHeight) {
            tElem.style.height = maxHeight + unit;
            console.log('>=');
        } else{
            tElem.style.height = tElem.scrollHeight + diff + unit;
            console.log('else');
        }

    });

}