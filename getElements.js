
/**
 * 获取元素
 */
function $$(str) {
    let el = document.querySelectorAll(str)
    if (el.length === 1) {
        return el[0];
    }
    return el;
}

window.$$ = $$;
window.getElements = $$;
