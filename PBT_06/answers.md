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

* Vì Bootstrap mặc định:

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
