
let htmlStr = `<html>
    <head></head>
    <body>
        <div></div>
    </body>
</html>`
// start-html end-html head body div
// KMP 正则表达式 原理都是FSM
// 限制 正则需要完整的html
let currentToken = null;
parse(htmlStr);
function emit(token) {
    console.log(token);
    currentToken = null;
}
function parse(htmlString) {
    state = start;
    for (let c of htmlString) {
        state = state(c)
    }
}

function start(c) {
    if (c === '<') {
        return tagOpen;
    } else {
        return start;
    }
}

function tagOpen(c) {
    if (c === '/') {
        return endTagOpen;
    } else if (c.match(/^[a-zA-Z]$/)) {
        currentToken = {
            type: 'startTag',
            tagName: c
        }
        return tagName;
    }
}

function tagName(c) {
    if (c.match(/^[a-zA-Z]$/)) {
        currentToken.tagName += c;
        return tagName;
    } else if (c === '>') {
        // tag拼接结束
        emit(currentToken);
        return start;
    }
}

function endTagOpen(c) {
    if (c.match(/^[a-zA-Z]$/)) {
        currentToken = {
            type: 'endTag',
            tagName: c
        }
        return tagName;
    }
}