// .bind() examples
let run = 0;
let marginLeft = '60px';

document.write("<h1>.bind() - Object Props examples</h1>")

function addObjectProps() {
    run += 1;
    // Here this keyword is having default binding to window object in browser and global object in node.js
    document.write(`<h3>Run: ${run}</h3><p style="margin-left: ${marginLeft}"><strong>this===window: ${this===window}</strong></p>`)
    if(this !== window) {
        document.write(`<p style="margin-left: ${marginLeft}">this: ${JSON.stringify(this)}</p>`)
    }
    document.write(`<p style="margin-left: ${marginLeft}">this.a + this.b: ${this.a + this.b}</p></p>`);
}

let addObjectProps1 = addObjectProps;
addObjectProps1();

let addObjectProps2 = addObjectProps.bind();
addObjectProps2();

let addObjectProps3 = addObjectProps.bind(null);
addObjectProps3();

let addObjectProps4 = addObjectProps.bind({})
addObjectProps4();

let addObjectProps5 = addObjectProps.bind({a:1})
addObjectProps5();

let addObjectProps6 = addObjectProps.bind({a:1, b:2})
addObjectProps6();

let addObjectProps7 = addObjectProps6.bind({a:3, b:4})
addObjectProps7();

run = 0;

document.write("<h1>.bind() - params examples</h1>")

function addParams(a, b) {
    run += 1;
    // Here this keyword is having default binding to window object in browser and global object in node.js
    document.write(`<h3>Run: ${run}</h3><p style="margin-left: ${marginLeft}"><strong>this===window: ${this===window}</strong></p>`)
    if(this !== window) {
        document.write(`<p style="margin-left: ${marginLeft}">this: ${JSON.stringify(this)}</p>`)
    }
    document.write(`<p style="margin-left: ${marginLeft}">a: ${a}, b:${b}</p>`)
    document.write(`<p style="margin-left: ${marginLeft}">a + b: ${a + b}</p></p>`);
}

let addParams1 = addParams;
addParams1();

let addParams2 = addParams.bind(null);
addParams2();

let addParams3 = addParams.bind(null, 1);
addParams3();

let addParams4 = addParams.bind(null, 1, 2);
addParams4();



run = 0;

document.write("<h1>.bind() - regular add examples</h1>")

function add(a, b) {
    run += 1;
    // Here this keyword is having default binding to window object in browser and global object in node.js
    document.write(`<h3>Run: ${run}</h3><p style="margin-left: ${marginLeft}"><strong>this===window: ${this===window}</strong></p>`)
    if(this !== window) {
        document.write(`<p style="margin-left: ${marginLeft}">this: ${JSON.stringify(this)}</p>`)
    }
    document.write(`<p style="margin-left: ${marginLeft}">a: ${a}, b:${b}</p>`)
    document.write(`<p style="margin-left: ${marginLeft}">this.a + this.b + a + b: ${this.a + this.b + a + b}</p></p>`);
}

let add1 = add;
add1();

let add2 = add.bind();
add2();

let add3 = add.bind(null);
add3();

let add4 = add.bind(null, 1)
add4();

let add5 = add.bind(null, 1, 2);
add5();

let add6 = add.bind({}, 1, 2);
add6();

let add7 = add.bind({a:1, b:2}, 3, 4)
add7();

// .call() examples
run = 0;

document.write("<h1>.call() - regular add examples</h1>")

add.call();

add.call(null);

add.call(null, 1);

add.call(null, 1, 2);

add.call({}, 1, 2);

add.call({a:1, b:2}, 3, 4);