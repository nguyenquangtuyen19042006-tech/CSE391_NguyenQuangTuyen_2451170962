# Câu A1 — var / let / const

## Đoạn 1

```js id="0jlwmz"
console.log(x);
var x = 5;
```

### Output

```text id="zj2trv"
undefined
```

### Giải thích

* `var` được hoisting.
* Biến tồn tại trước khi gán giá trị.

---

## Đoạn 2

```js id="hvb9yz"
console.log(y);
let y = 10;
```

### Output

```text id="3h9ajf"
ReferenceError
```

### Giải thích

* `let` có Temporal Dead Zone.
* Không dùng trước khi khai báo.

---

## Đoạn 3

```js id="t1d7ph"
const z = 15;
z = 20;
console.log(z);
```

### Output

```text id="8y5y7f"
TypeError
```

### Giải thích

* `const` không được gán lại.

---

## Đoạn 4

```js id="9d5xpt"
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

### Output

```text id="duq44x"
[1, 2, 3, 4]
```

### Giải thích

* `const` không đổi tham chiếu.
* Nhưng vẫn sửa nội dung array được.

---

## Đoạn 5

```js id="r2ef3k"
let a = 1;

{
    let a = 2;
    console.log("Trong block:", a);
}

console.log("Ngoài block:", a);
```

### Output

```text id="1u7hpx"
Trong block: 2
Ngoài block: 1
```

### Giải thích

* `let` có block scope.
* Biến trong block khác biến bên ngoài.


# Câu A2 — Data Types & Coercion

```js id="j9gh4t"
console.log(typeof null);        // "object"

console.log(typeof undefined);   // "undefined"

console.log(typeof NaN);         // "number"

console.log("5" + 3);            // "53"

console.log("5" - 3);            // 2

console.log("5" * "3");          // 15

console.log(true + true);        // 2

console.log([] + []);            // ""

console.log([] + {});            // "[object Object]"

console.log({} + []);            // 0
```

---

# Giải thích

## `"5" + 3`

```js id="xqg9qj"
"5" + 3
```

* Dấu `+` ưu tiên nối chuỗi.
* `3` bị ép sang string.

Kết quả:

```text id="zcy6kr"
"53"
```

---

## `"5" - 3`

```js id="c7l7o6"
"5" - 3
```

* Dấu `-` chỉ dùng cho toán học.
* `"5"` bị ép sang number.

Kết quả:

```text id="d7v5ju"
2
```

---

# Kết quả bất ngờ

## `typeof null`

* JavaScript lỗi lịch sử.
* `null` thật ra không phải object.

---

## `typeof NaN`

* `NaN` nghĩa là “Not a Number”.
* Nhưng kiểu dữ liệu vẫn là `number`.

---

## `true + true`

* `true = 1`
* `1 + 1 = 2`

---

## `[] + []`

* Array rỗng chuyển thành chuỗi rỗng.
* `"" + "" = ""`

---

## `{} + []`

* JavaScript hiểu `{}` là block code.
* `+[]` → `0` nên kết quả là `0`.
