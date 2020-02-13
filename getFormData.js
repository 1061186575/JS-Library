
/**
 * 获取表单数据
 * @param elemId
 */
function getFormData(elemId) {
    if (!elemId) {
        throw 'getFormData没有参数';
    }
    let elem = document.getElementById(elemId);
    let allData = {};
    for (let [name, value] of new FormData(elem)) {
        allData[name] = value;
    }
    return allData;
}
