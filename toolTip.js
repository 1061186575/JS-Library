/**
 *  提示工具, 只要给元素添加data-tooltip属性,
 *  那么当鼠标移动到这个元素上的时候就会显示data-tooltip里的内容
 *  例如: <div data-tooltip="show content"  >hover</div>
 *  当鼠标移动到这个div标签上的时候就会显示"show content"
 */



(function toolTip() {

    createStyle();

    let tooltipElem;
    document.onmouseover = function (e) {
        var target = e.target;
        var toolHtml = target.dataset.tooltip;
        if (!toolHtml) {
            return;
        }
        tooltipElem = document.createElement('div');
        tooltipElem.className = "tooltip";
        tooltipElem.innerHTML = toolHtml;
        document.body.append(tooltipElem);

        document.onmousemove = function (e) {
            tooltipElem.style.left = e.clientX + 'px';
            tooltipElem.style.top = e.clientY + 'px';
        }

    };

    document.onmouseout = function () {
        if (tooltipElem) {
            tooltipElem.remove();
            tooltipElem = null;
        }
        document.onmousemove = null;
    }
})()


// 创建提示文本的样式
function createStyle() {
    var styleEle = document.createElement('style');
    styleEle.type = 'text/css';
    styleEle.innerHTML =
        `.tooltip {
        position: fixed;
        margin: 10px;
        padding: 10px 20px;
        border: 1px solid #b3c9ce;
        border-radius: 4px;
        text-align: left;
        font: italic 16px/1.3 arial, sans-serif;
        color: #333;
        background: #eee;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
        z-index: 999999999;
    }`;
    document.head.appendChild(styleEle);
}

