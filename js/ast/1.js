{/* <div id="root" class>
    <span class="demo">
        This is a span.
    </span>
    <p>DOM</p>
</div>

DOM 树     AST  Tree Abstract */}

let dom = {
    tag: 'div',
    attrs: {
        id: 'root',
        className: 'wrap'
    },
    children: [
        {
            tag: 'span',
            attrs: {
                className: 'demo'
            },
            children: [
                {
                    tag: undefined,
                    text: 'This is a span.'
                }
            ]
        },
        {
            tag: 'p',
            children: {
                tag: undefined,
                text: 'DOM'
            }
            
        }
    ]
}
