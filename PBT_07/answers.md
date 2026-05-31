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


# Câu A3 — So sánh `==` vs `===`

```js id="t4d9vr"
console.log(5 == "5");          // true

console.log(5 === "5");         // false

console.log(null == undefined); // true

console.log(null === undefined);// false

console.log(NaN == NaN);        // false

console.log(0 == false);        // true

console.log(0 === false);       // false

console.log("" == false);       // true
```

---

# Giải thích

## `==`

* So sánh giá trị.
* Có ép kiểu (type coercion).

Ví dụ:

```js id="s0g0ak"
5 == "5"
```

→ `"5"` bị ép thành từ chuỗi thành number.

---

## `===`

* So sánh giá trị + kiểu dữ liệu.
* Không ép kiểu.

Ví dụ:

```js id="w8z1hg"
5 === "5"
```

→ number khác string.

---

# Trường hợp đặc biệt

## `NaN == NaN`

```js id="c8d7js"
false
```

* `NaN` không bằng bất kỳ giá trị nào, kể cả chính nó.

---

# Nên dùng gì?

## Nên dùng:

```js id="y9g8lo"
===
```

### Vì:

* Không bị ép kiểu ngoài ý muốn.
* Ít lỗi hơn.
* Dễ debug.
* Code rõ ràng hơn.


# Câu A4 — Truthy & Falsy

## Tất cả giá trị Falsy

```js id="6qv6x9"
false
0
-0
0n
""
null
undefined
NaN
```

---

# Dự đoán

```js id="u2y5g3"
if ("0") console.log("A");   // In

if ("") console.log("B");    // Không in

if ([]) console.log("C");    // In

if ({}) console.log("D");    // In

if (null) console.log("E");  // Không in

if (0) console.log("F");     // Không in

if (-1) console.log("G");    // In

if (" ") console.log("H");   // In
```

---

# Kết quả in ra

```text id="a6n4ks"
A
C
D
G
H
```
# Câu A5 — Template Literals

```js id="7f8m2r"
// Cách 1
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

# Câu C1 — Debug JavaScript

## Các lỗi và cách sửa

| Lỗi                           | Giải thích                 | Cách sửa          |
| ----------------------------- | -------------------------- | ----------------- |
| `"100000"` là string          | Nên truyền number          | `100000`          |
| Thiếu `;`                     | Dễ lỗi format              | thêm `;`          |
| `if (giaSauGiam = 0)`         | Dùng `=` là gán            | đổi thành `===`   |
| `giaSauGiam === 0` khó xảy ra | Nên dùng `<= 0`            | kiểm tra tốt hơn  |
| Không kiểm tra `giaBan`       | Có thể nhập string         | kiểm tra `typeof` |
| Dùng `var` trong loop         | `var` không có block scope | đổi thành `let`   |

---

# Lỗi ẩn của `var`

```js id="2k4qxr"
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, 1000)
}
```

## Kết quả

```text id="n3t5hg"
5
5
5
5
5
```

### Vì:

* `var` dùng chung 1 biến `i`.
* Khi `setTimeout` chạy:

  * vòng lặp đã xong
  * `i = 5`

---

# Sửa bằng `let`

```js id="q5m7tb"
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, 1000)
}
```

## Kết quả

```text id="g9s4vk"
0
1
2
3
4
```

---

# Code đã sửa thành

```js id="v8z2yc"
function tinhGiaGiamGia(giaBan, phanTramGiam) {

    if(typeof giaBan !== "number"){
        return "Giá bán không hợp lệ";
    }

    if(phanTramGiam < 0 || phanTramGiam > 100){
        return "Phần trăm giảm không hợp lệ";
    }

    let giamGia = giaBan * phanTramGiam / 100;

    let giaSauGiam = giaBan - giamGia;

    if(giaSauGiam <= 0){
        console.log("Sản phẩm miễn phí!");
    }

    return giaSauGiam;
}

const gia = tinhGiaGiamGia(100000, 20);

console.log("Giá sau giảm: " + gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);

console.log("Giá: " + gia2);

for(let i = 0; i < 5; i++){

    setTimeout(function(){
        console.log("Item " + i);
    }, 1000);

}
```
