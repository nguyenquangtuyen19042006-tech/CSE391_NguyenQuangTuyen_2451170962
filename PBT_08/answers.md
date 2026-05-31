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

