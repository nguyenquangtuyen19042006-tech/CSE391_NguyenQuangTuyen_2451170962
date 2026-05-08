# PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)

## Câu A1 (5đ) — 3 cách nhúng CSS vào HTML

CSS có 3 cách phổ biến để nhúng vào HTML gồm: **Inline CSS, Internal CSS và External CSS**.

---

### 1. Inline CSS

Inline CSS là cách viết CSS trực tiếp bên trong thuộc tính `style` của thẻ HTML.

Ví dụ:

```html id="h0b26e"
<p style="color:red; font-size:20px;">
    Xin chào
</p>
```

### Ưu điểm:

* Viết nhanh, đơn giản.
* Áp dụng ngay cho một phần tử cụ thể.
* Không cần tạo file CSS riêng.

### Nhược điểm:

* Khó bảo trì khi website lớn.
* Code HTML bị dài và rối.
* Không tái sử dụng được.
* Không tách biệt giao diện và nội dung.

### Khi nào nên dùng?

* Test nhanh giao diện.
* Chỉnh sửa tạm thời.
* Style riêng cho một phần tử đặc biệt.

---

### 2. Internal CSS

Internal CSS là cách viết CSS bên trong thẻ `<style>` đặt trong phần `<head>` của file HTML.

Ví dụ:

```html id="s4sffo"
<head>

    <style>

        p{
            color:blue;
            font-size:20px;
        }

    </style>

</head>
```

### Ưu điểm:

* Dễ quản lý hơn Inline CSS.
* Có thể áp dụng cho nhiều phần tử trong cùng một trang.
* Không cần file CSS riêng.

### Nhược điểm:

* Chỉ dùng được cho một trang.
* Không tái sử dụng cho nhiều trang.
* Khi code lớn sẽ khó quản lý.

### Khi nào nên dùng?

* Website nhỏ, chỉ có một trang.
* Bài thực hành.
* Demo hoặc prototype.

---

### 3. External CSS

External CSS là cách viết CSS trong file riêng có đuôi `.css`, sau đó liên kết với HTML bằng thẻ `<link>`.

Ví dụ:

#### File HTML:

```html id="79n2im"
<head>

    <link rel="stylesheet" href="style.css">

</head>
```

#### File CSS (`style.css`):

```css id="sqnffy"
p{
    color:green;
    font-size:20px;
}
```

### Ưu điểm:

* Dễ bảo trì.
* Tái sử dụng cho nhiều trang.
* Code gọn gàng, chuyên nghiệp.
* Tăng hiệu suất nhờ cache trình duyệt.

### Nhược điểm:

* Cần thêm file CSS riêng.
* Nếu file CSS lỗi thì giao diện có thể không hiển thị đúng.

#### Khi nào nên dùng?

* Website nhiều trang.
* Dự án thực tế.
* Hệ thống lớn, cần bảo trì lâu dài.

---

### Câu hỏi thêm: Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách nào "thắng"?

**Inline CSS sẽ thắng.**

Ví dụ:

```html id="sh2v4x"
<head>

    <link rel="stylesheet" href="style.css">

    <style>

        p{
            color:blue;
        }

    </style>

</head>


<p style="color:red;">
    Xin chào
</p>
```

Giả sử:

External CSS đặt màu **green**
Internal CSS đặt màu **blue**
Inline CSS đặt màu **red**

Kết quả hiển thị sẽ là:

**Màu đỏ (red)**

#### Giải thích:

CSS hoạt động theo **độ ưu tiên (Specificity)**. Độ ưu tiên từ cao xuống thấp là:

**Inline CSS > Internal CSS > External CSS**

Vì Inline CSS gắn trực tiếp trên phần tử HTML nên có độ ưu tiên cao nhất, do đó sẽ được áp dụng cuối cùng.


# Câu A2 (8đ) — CSS Selectors — Dự đoán kết quả

Dựa vào HTML đã cho, từng selector sẽ chọn như sau:

---

## 1. `h1`

Selector này chọn tất cả thẻ `<h1>`.

Trong HTML chỉ có 1 thẻ:

```html
<h1>ShopTLU</h1>
```

→ **Chọn: `ShopTLU`**

---

## 2. `.price`

Selector class `.price` chọn mọi phần tử có class `price`.

Có 2 phần tử:

```html
<p class="price">25.990.000đ</p>
<p class="price">45.990.000đ</p>
```

→ **Chọn:**

* `25.990.000đ`
* `45.990.000đ`

---

## 3. `#app header`

Chọn thẻ `header` nằm bên trong phần tử có id `app`.

Phần tử được chọn:

```html
<header class="top-bar dark">
```

Text content bên trong:

* `ShopTLU`
* `Home`
* `Products`
* `About`

→ **Chọn: `ShopTLU Home Products About`**

---

## 4. `nav a:first-child`

Chọn thẻ `a` đầu tiên bên trong `nav`.

HTML:

```html
<a href="/" class="active">Home</a>
```

→ **Chọn: `Home`**

---

## 5. `.product.featured h2`

Chọn thẻ `h2` nằm trong phần tử có đồng thời 2 class:

* `product`
* `featured`

HTML:

```html
<article class="product featured">
    <h2>MacBook Pro</h2>
</article>
```

→ **Chọn: `MacBook Pro`**

---

## 6. `article > p`

Chọn các thẻ `p` là con trực tiếp của `article`.

Article thứ nhất:

* `25.990.000đ`
* `Mô tả sản phẩm...`

Article thứ hai:

* `45.990.000đ`
* `Mô tả sản phẩm...`

→ **Chọn:**

* `25.990.000đ`
* `Mô tả sản phẩm...`
* `45.990.000đ`
* `Mô tả sản phẩm...`

---

## 7. `a[href="/"]`

Chọn thẻ `a` có thuộc tính:

```html
href="/"
```

HTML:

```html
<a href="/" class="active">Home</a>
```

→ **Chọn: `Home`**

---

## 8. `.top-bar.dark h1`

Chọn thẻ `h1` nằm trong phần tử có đồng thời class:

* `top-bar`
* `dark`

HTML:

```html
<header class="top-bar dark">
    <h1>ShopTLU</h1>
</header>
```

→ **Chọn: `ShopTLU`**

---

## Câu A3 (7đ) — Box Model — Tính toán kích thước

Trong CSS Box Model:

**Tổng chiều rộng = Content + Padding + Border**
**Không gian chiếm trên trang = Content + Padding + Border + Margin**

---

### 1. Trường hợp `content-box` (mặc định)

CSS:

```css id="wq6k65"
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

Mặc định `box-sizing: content-box`, nghĩa là:

`width = chỉ tính content`

#### Bước tính:

Content:

```txt
400px
```

Padding trái + phải:

```txt
20 + 20 = 40px
```

Border trái + phải:

```txt
5 + 5 = 10px
```

#### Chiều rộng hiển thị:

```txt
400 + 40 + 10 = 450px
```

→ **Chiều rộng hiển thị = 450px**

---

Margin trái + phải:

```txt
10 + 10 = 20px
```

#### Không gian chiếm trên trang:

```txt
450 + 20 = 470px
```

→ **Không gian chiếm trên trang = 470px**

---

### 2. Trường hợp `border-box`

CSS:

```css id="mrjjly"
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

Với `border-box`:

`width = content + padding + border`

Tức tổng width luôn là:

```txt
400px
```

→ **Chiều rộng hiển thị = 400px**

---

#### Kích thước content thực tế

Padding trái + phải:

```txt
20 + 20 = 40px
```

Border trái + phải:

```txt
5 + 5 = 10px
```

Tổng bị trừ:

```txt
40 + 10 = 50px
```

Content thực tế:

```txt
400 − 50 = 350px
```

→ **Kích thước content thực tế = 350px**

---

#### Không gian chiếm trên trang

Margin trái + phải:

```txt
10 + 10 = 20px
```

Tổng:

```txt
400 + 20 = 420px
```

→ **Không gian chiếm trên trang = 420px**

---

### 3. Margin Collapse

CSS:

```css id="6qen89"
.box-a {
    margin-bottom: 25px;
}

.box-b {
    margin-top: 40px;
}
```

Khi 2 block element xếp dọc, margin dọc sẽ **collapse**.

CSS không cộng hai margin lại.

Nó lấy **margin lớn hơn**.

So sánh:

```txt
25px và 40px
```

Lớn hơn là:

```txt
40px
```

→ **Khoảng cách giữa box-a và box-b = 40px**

---

### Tại sao không phải 65px?

Vì CSS có cơ chế **Margin Collapse**.

Hai margin theo chiều dọc của block element liền kề sẽ chồng lên nhau, không cộng dồn.

Nên:

```txt
25 + 40 ≠ 65
```

Mà là:

```txt
max(25,40)=40
```

---

### Nâng cao

CSS:

```css id="9t8h2n"
.box-a {
    margin-bottom: -10px;
}

.box-b {
    margin-top: 40px;
}
```

Khi có margin âm:

Công thức:

```txt
margin = margin lớn nhất + margin nhỏ nhất
```

Tức:

```txt
40 + (-10)
```

```txt
= 30px
```

→ **Khoảng cách = 30px**

---

### Đáp án cuối cùng

#### Trường hợp 1:

* Chiều rộng hiển thị = **450px**
* Không gian chiếm trên trang = **470px**

#### Trường hợp 2:

* Chiều rộng hiển thị = **400px**
* Content thực tế = **350px**
* Không gian chiếm trên trang = **420px**

#### Trường hợp 3:

* Khoảng cách = **40px**
* Không phải 65px vì **Margin Collapse**

#### Nâng cao:

* Khoảng cách = **30px**
