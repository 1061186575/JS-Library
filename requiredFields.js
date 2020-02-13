
/**
 * 验证是否必填
 * @param obj
 * @param exceptArr
 * @param msg
 * @returns {boolean}
 */
function requiredFields(obj, exceptArr, msg = "所有项都是必填的!") {
    // 将对象中的某些属性排除在必填项之外
    function except(key) {
        if (Array.isArray(exceptArr)) {
            for (let arrValue of exceptArr) {
                if (key === arrValue) return true;
            }
        }
        return false;
    }
    for (let key in obj) {
        if (obj[key] === '' && !except(key)) {
            alert(msg);
            return false;
        }
    }
    return true;
}