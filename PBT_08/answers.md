# Phần A
## Câu A1

#### Function Declaration

```js
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thue,
        thuc_nhan: luong - thue
    };
}
```

#### Function Expression

```js
const tinhThueBaoHiem = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thue,
        thuc_nhan: luong - thue
    };
};
```

#### Arrow Function

```js
const tinhThueBaoHiem = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thue,
        thuc_nhan: luong - thue
    };
};
```

### Hoisting

**Function Declaration** gọi trước khai báo được:

```js
hello();

function hello() {
    console.log("Hello");
}
```

 Chạy bình thường là.

**Function Expression và Arrow Function** không gọi trước được:

```js
hello();

const hello = () => {
    console.log("Hello");
};
```
## Câu A2

### Đoạn 1

```js
console.log(c.increment()); // 1
console.log(c.increment()); // 2
console.log(c.increment()); // 3
console.log(c.decrement()); // 2
console.log(c.getCount());  // 2
```

**Giải thích:**

Biến `count` được giữ lại nhờ **closure**.

* `increment()` tăng `count` lên 1 rồi trả về.
* `decrement()` giảm `count` đi 1 rồi trả về.
* `getCount()` trả về giá trị hiện tại.

---

### Đoạn 2

Output sau khoảng 200ms:

```js
var: 3
var: 3
var: 3

let: 0
let: 1
let: 2
```

### Giải thích

#### Với `var`

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
```

`var` có **function scope**, cả vòng lặp chỉ dùng có **1 biến `i`**.

Khi `setTimeout` chạy thì vòng lặp đã kết thúc rồi:

```js
i = 3
```

Nên in ra:

```js
3
3
3
```

---

#### Với `let`

```js
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
```

`let` có **block scope**.

Mỗi lần lặp tạo ra một biến `j` riêng:

* Lần 1: `j = 0`
* Lần 2: `j = 1`
* Lần 3: `j = 2`

Nên in ra:

```js
0
1
2
```

### Kết luận

* **Closure** giúp các hàm bên trong nhớ được biến `count`.
* **var** dùng chung một biến trong vòng lặp ⇒ `3 3 3`.
* **let** tạo biến mới cho mỗi lần lặp ⇒ `0 1 2`.


## Câu A3
```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Lấy các số chẵn là
nums.filter(n => n % 2 === 0);

// 2. Nhân mỗi số với 3
nums.map(n => n * 3);
// 3. Tính tổng tất cả
nums.reduce((sum, n) => sum + n, 0);
// 4. Tìm số đầu tiên > 7
nums.find(n => n > 7);
// 5. Kiểm tra CÓ số > 10 không
nums.some(n => n > 10);
// 6. Kiểm tra TẤT CẢ đều > 0
nums.every(n => n > 0);
// 7. Tạo mảng "Số X là [chẵn/lẻ]"
nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
// 8. Đảo ngược mảng (không mutate gốc)
[...nums].reverse();
```
**Kết quả:**

1. `[2, 4, 6, 8, 10]`
2. `[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]`
3. `55`
4. `8`
5. `false`
6. `true`
7. `["Số 1 là lẻ", "Số 2 là chẵn", ..., "Số 10 là chẵn"]`
8. `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`


## Câu A4

#### Destructuring

```js id="9imrz3"
const { name, price, specs: { ram, color } } = product;

console.log(name, price, ram, color);
```

Output:

```js id="8cy9x2"
iPhone 16 25990000 8 Titan
```

---

```js id="1g6jlwm"
console.log(specs);
```

Output:

```js id="u9h8te"
ReferenceError: specs is not defined
```

Vì chỉ destructure lấy `ram` và `color`, không tạo biến `specs`.

---

#### Spread

```js id="9zdny7"
const updated = { ...product, price: 23990000, sale: true };
```

```js id="6c0h6v"
console.log(updated.price);
```

Output:

```js id="8x2uzc"
23990000
```

```js id="ib8hfb"
console.log(updated.sale);
```

Output:

```js id="0wl8ur"
true
```

```js id="0l0m0t"
console.log(product.price);
```

Output:

```js id="x2pjvr"
25990000
```

Đối tượng gốc **không bị thay đổi**.

---

#### Spread Gotcha

```js id="jw8t31"
const copy = { ...product };
copy.specs.ram = 16;

console.log(product.specs.ram);
```

Output:

```js id="syri7w"
16
```

### Tại sao?

Spread (`...`) chỉ **copy nông (shallow copy)**.

```js id="y9ewvt"
product.specs === copy.specs
// true
```

`product.specs` và `copy.spec` cùng trỏ tới một object con trong bộ nhớ.

Khi:

```js id="c8mf6w"
copy.specs.ram = 16;
```

thì object `specs` chung bị sửa nên:

```js id="ppxtk6"
product.specs.ram // 16
```
### Kết luận

| Lệnh                                   | Output                       |
| -------------------------------------- | ---------------------------- |
| `console.log(name, price, ram, color)` | `iPhone 16 25990000 8 Titan` |
| `console.log(specs)`                   | `ReferenceError`             |
| `console.log(updated.price)`           | `23990000`                   |
| `console.log(updated.sale)`            | `true`                       |
| `console.log(product.price)`           | `25990000`                   |
| `console.log(product.specs.ram)`       | `16`                         |


# Phần C

## Câu C1

```js
const processOrders = (orders) =>
    orders
        .filter(({ status, total }) =>
            status === "completed" && total > 100000
        )
        .map(({ id, customer, total }) => ({
            id,
            customer,
            total,
            discount: total * 0.1,
            finalTotal: total * 0.9
        }))
        .sort((a, b) => b.finalTotal - a.finalTotal);
```
## Câu C2

```js
const miniArray = {
    map(arr, fn) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }

        return result;
    },

    filter(arr, fn) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }

        return result;
    },

    reduce(arr, fn, initialValue) {
        let accumulator = initialValue;

        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(
                accumulator,
                arr[i],
                i,
                arr
            );
        }

        return accumulator;
    }
};

// TEST
console.log(
    miniArray.map([1, 2, 3], x => x * 2)
); // [2, 4, 6]

console.log(
    miniArray.filter([1, 2, 3, 4], x => x > 2)
); // [3, 4]

console.log(
    miniArray.reduce(
        [1, 2, 3, 4],
        (a, b) => a + b,
        0
    )
); // 10
```
