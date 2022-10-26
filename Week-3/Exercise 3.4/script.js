function createStack() {
    items=[];
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}

const stack=createStack();
document.write(`<p><h1>function definition</h1><pre>${createStack}</pre></p>`)
document.write(`<strong>Operations:</strong>`)
document.write(`<p>stack.push(10): ${stack.push(10)}`);
document.write(`<p>stack.push(5): ${stack.push(5)}`);
document.write(`<p>stack.pop(): ${stack.pop()}`); // => 5
document.write(`<p>Failed to access stack.items: ${stack.items}`); // => [10]
stack.items = [100, 1000];
document.write(`<p>Tried assigning array [100, 1000] to stack.items</p>`)
document.write(`<p>stack.pop(): ${stack.pop()}`); // => 10
document.write(`<p>stack.pop(): ${stack.pop()}`); // => undefined