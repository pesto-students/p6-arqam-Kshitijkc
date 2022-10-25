function memoize(reducerMethod) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, reducerMethod(...args));
        return cache.get(key);
    };
}

function add(...args) {
    let sum = 0;
    for(let index=0; index<args.length; ++index) {
        sum += args[index]
    }
    return sum;
}

function time(executor) {
    console.time()
    console.log(`Sum = ${executor()}`);
    console.timeEnd();
}

const addExecutor = memoize(add);

time(() => addExecutor(100, 100))
time(() => addExecutor(100))
time(() => addExecutor(100, 200))
time(() => addExecutor(100, 100))