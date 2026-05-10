# PHẦN A — KIỂM TRA ĐỌC HIỂU

## Câu A1 — 5 Loại Positioning

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|----------|----------------------------|-------------------|------------------|----------|
| `static` | Có | Vị trí mặc định của document flow | Có | Layout bình thường, không cần định vị |
| `relative` | Có | Chính vị trí gốc của nó | Có | Dịch chuyển nhẹ element, làm mốc cho `absolute` |
| `absolute` | Không | Parent gần nhất có `position` khác `static` | Có | Badge, icon, tooltip, overlay |
| `fixed` | Không | Viewport (màn hình trình duyệt) | Không | Nút back-to-top, chat box, menu nổi |
| `sticky` | Có | Ban đầu theo flow, sau đó theo viewport | Ban đầu có, tới ngưỡng thì dính | Sticky navbar, sidebar |

---

## Giải thích từng loại

### 1. `position: static`
- Đây là mặc định của mọi element.
- `top`, `right`, `bottom`, `left` **không hoạt động**.
- Element nằm theo flow bình thường.

Ví dụ:

```css
.box{
    position: static;
}
```

Use case:
- Layout thông thường.

---

### 2. `position: relative`
- Element **vẫn chiếm chỗ** trong flow.
- Có thể dịch chuyển bằng `top`, `left`, `right`, `bottom`.
- Vị trí được tính từ **chính vị trí ban đầu của nó**.

Ví dụ:

```css
.box{
    position: relative;
    top:20px;
    left:30px;
}
```

Use case:
- Dịch chuyển nhẹ element.
- Làm mốc cho `absolute`.

---

### 3. `position: absolute`
- Element **thoát khỏi document flow**.
- Không chiếm chỗ nữa.
- Có thể đè lên element khác.

Ví dụ:

```css
.parent{
    position: relative;
}

.child{
    position: absolute;
    top:0;
    right:0;
}
---

### 4. `position: fixed`
- Element **thoát flow**.
- Gắn trực tiếp vào viewport.
- Scroll xuống vẫn đứng yên.

Ví dụ:

```css
.chat-btn{
    position: fixed;
    bottom:20px;
    right:20px;
}
```
---

### 5. `position: sticky`
- Ban đầu hoạt động như `relative`.
- Khi scroll tới ngưỡng (`top`, `left`...) thì dính lại như `fixed`.
- Vẫn chiếm chỗ trong flow.

Ví dụ:

```css
.nav{
    position: sticky;
    top:0;
}

---

# Câu hỏi thêm

## Khi nào `absolute` tham chiếu `body`?

Khi **không tìm thấy parent nào có `position` khác `static`**.

Ví dụ:

```html
<body>
    <div class="box"></div>
</body>
```

```css
.box{
    position:absolute;
    top:0;
    right:0;
}
```

→ `.box` sẽ bám theo `body` (hoặc viewport).

---

## Khi nào `absolute` tham chiếu parent?

Khi parent gần nhất có:

- `position: relative`
- `position: absolute`
- `position: fixed`
- `position: sticky`

Ví dụ:

```html
<div class="parent">
    <div class="child"></div>
</div>
```

```css
.parent{
    position: relative;
}

.child{
    position: absolute;
    top:0;
    right:0;
}
```

→ `.child` bám theo `.parent`.

---

# "Nearest positioned ancestor" là gì?

Là:

> **Phần tử cha gần nhất có `position` khác `static`.**

Ví dụ:

```html
<body>
    <section>
        <div class="card">
            <span class="badge"></span>
        </div>
    </section>
</body>
```

```css
.card{
    position: relative;
}

.badge{
    position: absolute;
    top:0;
    right:0;
}
```

`.badge` sẽ tìm lên:

- `card` ✅ (`relative`) → dùng luôn
- Không cần tìm tiếp `section` hay `body`

→ `.card` chính là **nearest positioned ancestor**.