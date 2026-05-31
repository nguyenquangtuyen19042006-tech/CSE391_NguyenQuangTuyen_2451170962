// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
    return (value) =>
        fns.reduce((result, fn) => fn(result), value);
}

const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);

console.log(process(5)); // Kết quả: 20

// ==================================================

// 2. memoize() — Cache kết quả
function memoize(fn) {
    const cache = {};

    return (...args) => {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;

        return result;
    };
}

const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");

    let result = 0;
    for (let i = 0; i < n; i++) {
        result += i;
    }

    return result;
});

console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));

// ==================================================

// 3. debounce() — Chờ user ngừng gõ
function debounce(fn, delay) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

search("i");
search("ip");
search("iph");
search("iphone");

// Chỉ in:
// Searching: iphone

// ==================================================

// 4. retry() — Thử lại nếu lỗi
async function retry(fn, maxAttempts = 3) {
    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;
            console.log(`Lần ${attempt} thất bại`);
        }
    }

    throw lastError;
}

// TEST
let count = 0;

retry(async () => {
    count++;

    if (count < 3) {
        throw new Error("Server Error");
    }

    return "Thành công!";
})
.then(console.log)
.catch(console.error);

// Output:
// Lần 1 thất bại
// Lần 2 thất bại
// Thành công!