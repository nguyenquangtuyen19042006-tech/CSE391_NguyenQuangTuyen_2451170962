# PHẦN A — KIỂM TRA ĐỌC HIỂU

## Câu A1 (5đ) — Viewport & Mobile-First

---

### 1. Thẻ `<meta viewport>` chuẩn

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### Giải thích từng thuộc tính:

##### `name="viewport"`
- Báo cho trình duyệt biết thẻ này dùng để cấu hình **viewport**.
- Viewport là vùng hiển thị nội dung website trên màn hình thiết bị.

#### `width=device-width`
- Đặt chiều rộng viewport bằng đúng chiều rộng thật của thiết bị.
- Ví dụ:
  - iPhone 390px → viewport = 390px
  - Android 412px → viewport = 412px

Nếu không dùng `device-width`, trình duyệt có thể giả lập viewport khoảng **980px**.

##### `initial-scale=1.0`
- Thiết lập mức zoom ban đầu là 100%.
- `1.0` nghĩa là không zoom in hoặc zoom out.

Ví dụ:
- `1.0` = 100%
- `2.0` = zoom 200%
- `0.5` = thu nhỏ 50%

---

### 2. Nếu thiếu thẻ viewport, iPhone sẽ hiển thị như thế nào?

Nếu thiếu:

```html
<meta name="viewport">
```

Safari trên iPhone sẽ:

#### Bước 1:
Giả sử website có chiều rộng khoảng **980px** (desktop width).

#### Bước 2:
Thu nhỏ toàn bộ trang để nhét vào màn hình điện thoại.

#### Kết quả:
- Chữ rất nhỏ
- Button nhỏ
- Layout giống desktop bị zoom-out
- Người dùng phải pinch-to-zoom để đọc

Ví dụ:

Desktop:

```plaintext
[ HEADER ][ MENU ][ CONTENT ]
```

iPhone không có viewport:

```plaintext
[thu nhỏ toàn bộ]
```

iPhone có viewport:

```plaintext
[HEADER]
[MENU]
[CONTENT]
```

Responsive đúng.

---

### 3. Mobile-First và Desktop-First khác nhau thế nào?

### Mobile-First
- Viết CSS cho mobile trước.
- Sau đó dùng `min-width` để mở rộng cho màn hình lớn hơn.

Logic:

```plaintext
Mobile → Tablet → Desktop
```

#### Desktop-First
- Viết CSS cho desktop trước.
- Sau đó dùng `max-width` để thu nhỏ cho màn hình nhỏ hơn.

Logic:

```plaintext
Desktop → Tablet → Mobile
```

---

### 4. Ví dụ CSS Mobile-First (breakpoint 768px)

```css
/* Mobile trước */
.container {
    width: 100%;
    padding: 16px;
    background: lightblue;
}

/* Tablet/Desktop */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: auto;
        background: lightgreen;
    }
}
```

#### Cách hoạt động:
- Mặc định mobile dùng:
  - `width:100%`

- Khi màn hình >= 768px:
  - đổi thành `750px`

---

### 5. Ví dụ CSS Desktop-First (breakpoint 768px)

```css
/* Desktop trước */
.container {
    width: 1200px;
    margin: auto;
    background: lightgreen;
}

/* Mobile/Tablet */
@media (max-width: 768px) {
    .container {
        width: 100%;
        padding: 16px;
        background: lightblue;
    }
}
```

#### Cách hoạt động:
- Mặc định desktop dùng:
  - `1200px`

- Khi màn hình <= 768px:
  - đổi thành mobile layout

---

### 6. Tại sao Mobile-First được khuyên dùng?

#### 1. Người dùng mobile nhiều hơn desktop
Hiện nay phần lớn traffic đến từ điện thoại.

#### 2. Tối ưu hiệu năng
Mobile chỉ load CSS cần thiết trước.

#### 3. Code sạch hơn
Chỉ thêm style khi màn hình lớn hơn.

#### 4. Dễ mở rộng
Đi từ nhỏ → lớn:

```plaintext
Mobile → Tablet → Laptop → Desktop
```

Dễ maintain hơn.

#### 5. Phù hợp responsive hiện đại
Framework như Bootstrap, Tailwind đều theo Mobile-First.

Ví dụ:

```css
sm:
md:
lg:
xl:
```

đều dùng `min-width`.

---

### Kết luận

- `viewport` giúp website hiển thị đúng kích thước thiết bị.
- Thiếu viewport → iPhone sẽ thu nhỏ trang như desktop.
- Mobile-First dùng `min-width`.
- Desktop-First dùng `max-width`.
- Mobile-First được khuyên dùng vì hiệu năng tốt, dễ bảo trì, phù hợp xu hướng hiện đại.

## Câu A2 — Breakpoints chuẩn

| Breakpoint | Kích thước | Thiết bị | Gợi ý số cột |
|------------|------------|----------|--------------|
| XS | <576px | Mobile nhỏ | 1 cột |
| SM | ≥576px | Mobile lớn | 2 cột |
| MD | ≥768px | Tablet | 3 cột |
| LG | ≥992px | Laptop | 4 cột |
| XL | ≥1200px | Desktop | 4–5 cột |
| XXL | ≥1400px | Màn hình lớn | 5–6 cột |

### Ví dụ CSS:

```css
.products{
    display:grid;
    grid-template-columns:1fr;
}

@media (min-width:576px){
    .products{
        grid-template-columns:repeat(2,1fr);
    }
}

@media (min-width:768px){
    .products{
        grid-template-columns:repeat(3,1fr);
    }
}

@media (min-width:992px){
    .products{
        grid-template-columns:repeat(4,1fr);
    }
}
```

**Kết luận:**  
Màn hình càng lớn → số cột càng nhiều:  
`1 cột → 2 cột → 3 cột → 4+ cột`

## Câu A3 — Media Queries

CSS dùng `min-width`, nghĩa là màn hình đạt mốc nào thì áp dụng CSS của mốc đó.  
Nếu nhiều media query cùng đúng, CSS phía dưới sẽ ghi đè CSS phía trên.

| Chiều rộng màn hình | `.container width` | Giải thích |
|---------------------|-------------------|------------|
| 375px | 100% | Chưa đạt 576px |
| 600px | 540px | Đạt `min-width:576px` |
| 800px | 720px | Đạt `min-width:768px` |
| 1000px | 960px | Đạt `min-width:992px` |
| 1400px | 1140px | Đạt `min-width:1200px` |

### Kết luận:
```plaintext
375px  → 100%
600px  → 540px
800px  → 720px
1000px → 960px
1400px → 1140px
```

## Câu A4 — SCSS Basics

### 1. Variables (biến)
Dùng `$` để lưu màu, font, spacing... giúp sửa 1 chỗ đổi toàn bộ.

```scss
$primary-color: #2563eb;

.button{
    background: $primary-color;
}
```

→ Đổi `$primary-color` thì mọi chỗ dùng biến đều đổi.

---

### 2. Nesting (lồng CSS)
Viết CSS theo cấu trúc HTML, dễ đọc hơn.

```scss
.navbar{
    background: black;

    a{
        color: white;
    }
}
```

Compile ra:

```css
.navbar { background: black; }
.navbar a { color: white; }
```

---

### 3. Mixins
Giống function, tái sử dụng code.

```scss
@mixin flex-center{
    display:flex;
    justify-content:center;
    align-items:center;
}

.box{
    @include flex-center;
}
```

→ Không phải viết lại nhiều lần.

---

### 4. @extend / Inheritance
Cho class khác kế thừa CSS.

```scss
.btn{
    padding:10px;
    border-radius:5px;
}

.btn-primary{
    @extend .btn;
    background: blue;
}
```

→ `.btn-primary` dùng lại style của `.btn`.

---

### Tại sao browser không đọc được `.scss`?

Vì browser chỉ hiểu **CSS**, không hiểu SCSS.

SCSS phải được **compile thành CSS** trước.

```plaintext
SCSS → Compile → CSS → Browser
```

Có thể compile bằng:

- Live Sass Compiler (VS Code)
- Vite
- Webpack
- npm sass