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

### Giải thích từng loại

#### 1. `position: static`
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

#### 2. `position: relative`
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

#### 3. `position: absolute`
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
```

Use case:
- Notification badge.
- Tooltip.
- Overlay.
- Icon góc.

---

#### 4. `position: fixed`
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

Use case:
- Chat button.
- Back to top.
- Floating menu.

---

#### 5. `position: sticky`
- Ban đầu hoạt động như `relative`.
- Khi scroll tới ngưỡng (`top`, `left`...) thì dính lại như `fixed`.
- Vẫn chiếm chỗ trong flow.

Ví dụ:

```css
.nav{
    position: sticky;
    top:0;
}
```

Use case:
- Sticky navbar.
- Sticky sidebar.
- Sticky table header.

---

### Câu hỏi thêm

#### Khi nào `absolute` tham chiếu `body`?

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

#### Khi nào `absolute` tham chiếu parent?

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

### "Nearest positioned ancestor" là gì?

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



## Câu A2 — Flexbox vs Grid

### Trường hợp 1

```css
.container { display: flex; }
.item { flex: 1; }
```

4 items → **1 hàng, 4 cột bằng nhau**

```txt
[1][2][3][4]
```

---

### Trường hợp 2

```css
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
```

Mỗi item chiếm 50% → **2 cột**

6 items → **3 hàng, 2 cột**

```txt
[1][2]
[3][4]
[5][6]
```

---

### Trường hợp 3

```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

3 items → **1 hàng, giãn đều**

```txt
[1]      [2]      [3]
```

(`align-items:center` = căn giữa theo trục dọc)

---

### Trường hợp 4

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    gap: 20px;
}
```

**1 hàng, 3 cột**

- Cột 1: 200px
- Cột 2: co giãn
- Cột 3: 200px

```txt
[1][    2    ][3]
```

---

### Trường hợp 5

```css
.container {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
}
```

7 items → **3 cột**

→ **3 hàng**

```txt
[1][2][3]
[4][5][6]
[7]
```

Item 7 nằm **hàng 3, cột 1**


# PHẦN C — SUY LUẬN

## Câu C1 — Flexbox vs Grid: Khi nào dùng gì?

---

## 1. Navigation bar ngang (logo + menu + buttons)

**Chọn:** Flexbox

**Giải thích:**

Navbar là layout 1 chiều theo hàng ngang.

Flexbox rất phù hợp để:

- căn trái / giữa / phải
- chia khoảng cách giữa các phần tử
- căn giữa theo chiều dọc bằng `align-items: center`

Ví dụ:

```css
display: flex;
justify-content: space-between;
align-items: center;
```

---

## 2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)

**Chọn:** Grid

**Giải thích:**

Đây là layout 2 chiều (hàng + cột).

Grid giúp:

- tạo 3 cột bằng nhau
- ảnh tự xuống hàng khi thêm ảnh mới
- dễ kiểm soát kích thước

Ví dụ:

```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
```

---

## 3. Layout blog (main content + sidebar)

**Chọn:** Grid

**Giải thích:**

Layout có nhiều cột cố định:

- content chính
- sidebar

Grid phù hợp để chia vùng rõ ràng.

Ví dụ:

```css
display: grid;
grid-template-columns: 1fr 300px;
```

---

## 4. Footer với 4 cột thông tin

**Chọn:** Grid hoặc Flexbox

**Ưu tiên:** Grid

**Giải thích:**

Footer có nhiều cột song song.

Grid giúp:

- chia đều 4 cột
- giữ layout ổn định khi resize

Ví dụ:

```css
display: grid;
grid-template-columns: repeat(4, 1fr);
```

---

## 5. Card sản phẩm (ảnh trên, text giữa, nút dưới)

**Chọn:** Flexbox

**Giải thích:**

Card là layout 1 chiều theo cột.

Flexbox giúp:

- sắp xếp từ trên xuống
- nút luôn nằm đáy bằng `margin-top: auto`

Ví dụ:

```css
display: flex;
flex-direction: column;
```

```css
button{
    margin-top: auto;
}
```

---

## Kết luận

- **Flexbox:** phù hợp layout 1 chiều (row hoặc column)
- **Grid:** phù hợp layout 2 chiều (rows + columns)
- **Kết hợp cả hai:** Grid cho layout lớn, Flexbox cho component nhỏ

## Câu C2 — Giải thích nguyên nhân các lỗi Flexbox

---

### Lỗi 1: Cards không đều chiều cao, nút "Mua" bị lệch

#### Hiện tượng

Một số card có nút "Mua" cao hơn hoặc thấp hơn card khác.

Ví dụ:

```text
Card 1             Card 2

image              image
text               text
button             text
                   button
```

Nút không nằm cùng 1 hàng.

---

#### Nguyên nhân

Mỗi card chứa lượng text khác nhau:

- card có text ngắn → chiều cao thấp
- card có text dài → chiều cao lớn

`.card` chỉ đang dùng block bình thường, chưa dùng Flexbox theo chiều dọc.

Button xuất hiện ngay sau text nên text dài/ngắn khác nhau sẽ làm button bị lệch.

---

### Lỗi 2: Hero content không nằm giữa màn hình

#### Hiện tượng

Content bị nằm góc trái trên thay vì giữa màn hình.

Ví dụ:

```text
┌────────────────────┐
│ Hero Content       │
│                    │
│                    │
└────────────────────┘
```

---

#### Nguyên nhân

Container chỉ có:

```css
display:flex;
```

Flexbox mặc định:

```css
justify-content:flex-start;
align-items:stretch;
```

Nghĩa là:

- phần tử bắt đầu từ bên trái
- không tự căn giữa

Vì chưa có:

- `justify-content:center`
- `align-items:center`

nên content bị dính góc trái trên.

---

### Lỗi 3: Sidebar bị co nhỏ

#### Hiện tượng

Khi content dài hoặc màn hình nhỏ, sidebar không còn đúng 250px.

Ví dụ:

```text
Before:

┌────┬────────────────────┐
│ SB │ content            │
└────┴────────────────────┘
```

Sidebar bị ép nhỏ.

---

#### Nguyên nhân

Trong Flexbox, mặc định mọi item có:

```css
flex-shrink:1;
```

Điều này có nghĩa:

Nếu không đủ chỗ, flex item sẽ tự co lại.

Sidebar tuy có:

```css
width:250px;
```

nhưng vẫn bị Flexbox ép nhỏ vì chưa tắt shrink.

Do đó sidebar không giữ được kích thước ban đầu.