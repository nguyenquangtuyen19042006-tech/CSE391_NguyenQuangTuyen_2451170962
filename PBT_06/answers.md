# Câu A1 — Grid System

| Kích thước | < 768px     | 768px - 991px | ≥ 992px      |
| ---------- | ----------- | ------------- | ------------ |
| Số cột     | 1 cột       | 2 cột         | 4 cột        |
| Box layout | Box xếp dọc | 2 box / hàng  | 4 box / hàng |

---

## Layout

### Mobile `<768px`

```text id="j1d3hm"
[Box1]
[Box2]
[Box3]
[Box4]
```

---

### Tablet `768px - 991px`

```text id="8t4j9w"
[Box1] [Box2]
[Box3] [Box4]
```

---

### Desktop `≥992px`

```text id="bvr8jo"
[Box1] [Box2] [Box3] [Box4]
```

---

# Câu hỏi thêm

## `col-md-6` nghĩa là gì?

* Khi màn hình ≥ 768px:

  * Box chiếm 6/12 cột.
  * Tức là chiếm 50% chiều ngang.

---

## Tại sao không cần viết `col-sm-12`?

* Vì Bootstrap mặc định như vậy:

  * Nếu chưa có class nhỏ hơn thì box tự chiếm 12 cột.
* Nên mobile tự động full width rồi.

# Câu A2 — Utilities & Components

## 1. `d-none d-md-block`

* `d-none` → ẩn element.
* `d-md-block` → từ màn hình `≥768px` thì hiện dạng block.

### Kết quả

* Mobile `<768px` → bị ẩn.
* Tablet/Desktop `≥768px` → hiện ra.

---

# 2. 5 spacing utilities

| Class  | Ý nghĩa             |
| ------ | ------------------- |
| `mt-3` | margin-top          |
| `mb-2` | margin-bottom       |
| `ms-4` | margin-left         |
| `p-3`  | padding tất cả      |
| `px-4` | padding trái + phải |

### `mb-auto`

* margin-bottom tự động.
* Thường dùng flex để đẩy element.

---

# 3. Khác nhau giữa container

| Class              | Ý nghĩa                                |
| ------------------ | -------------------------------------- |
| `.container`       | Có max-width theo từng màn hình        |
| `.container-fluid` | Full 100% chiều ngang                  |
| `.container-md`    | Full width đến md, sau đó có max-width |

---

## Ví dụ

* `.container` → web bình thường.
* `.container-fluid` → banner full màn hình.
* `.container-md` → mobile full width, desktop gọn lại.


# Câu C1 — Tùy biến Bootstrap

## Đổi màu `$primary` sang `#E63946`

### Quy trình

1. Cài Bootstrap bằng npm

```bash id="7zj9y2"
npm install bootstrap
```

2. Tạo file SCSS

```scss id="m8k2wd"
$primary: #E63946;

@import "bootstrap/scss/bootstrap";
```

3. Compile SCSS → CSS bằng Sass

```bash id="0a8h1m"
sass style.scss style.css
```

4. Link file CSS mới vào HTML.

---

# Cần công cụ gì?

* Node.js
* npm
* Sass (SCSS compiler)

---

# Tại sao không nên override trực tiếp?

```css id="9yx8tx"
.btn-primary{
    background:red;
}
```

## Vì:

* Chỉ đổi riêng `.btn-primary`
* Không đổi các component khác dùng `$primary`

  * alert-primary
  * bg-primary
  * text-primary
  * border-primary

---

# Dùng SASS variables tốt hơn vì:

* Đồng bộ toàn bộ framework.
* Dễ maintain.
* Dễ đổi theme.
* Bootstrap tự generate toàn bộ class theo màu mới.
# Câu C2 — So sánh CSS thuần và Bootstrap

## CSS thuần

```css id="7f0s6x"
.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    background:black;
    color:white;
}

.card{
    width:300px;
    border:1px solid #ccc;
    padding:15px;
    border-radius:10px;
}

.card img{
    width:100%;
}

@media (max-width:768px){
    .navbar{
        flex-direction:column;
    }
}
```

---

# So sánh

| Tiêu chí   | CSS thuần           | Bootstrap |
| ---------- | ------------------- | --------- |
| Dòng CSS   | Nhiều               | Ít        |
| Thời gian  | Lâu hơn             | Nhanh hơn |
| Tùy biến   | Cao                 | Thấp hơn  |
| Responsive | Tự viết media query | Có sẵn    |

---

# Khi nên dùng Bootstrap

* Làm nhanh hơn.
* Landing page.
* Admin dashboard.
* Prototype.
* Dự án nhỏ/trung bình.

---

# Khi không nên dùng Bootstrap

* UI cần quá độc đáo.
* Web tối ưu performance cao.
* Design system riêng.
* Muốn kiểm soát CSS hoàn toàn.


