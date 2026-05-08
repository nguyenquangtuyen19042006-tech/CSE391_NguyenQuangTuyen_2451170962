
### Câu A1 (5đ) — Input Types
#### Liệt kê 10 input types khác nhau là:

type="email" → Ô nhập text; tự động kiểm tra định dạng có ký hiệu @ và tên miền hợp lệ → Dùng cho form đăng ký tài khoản khách hàng mới.

type="password" → Ô nhập văn bản bị che khuất bằng các dấu chấm hoặc dấu sao; bảo mật thông tin khi gõ → Dùng cho trang đăng nhập hoặc xác nhận thanh toán.

type="number" → Ô nhập kèm nút tăng/giảm (spinbox); chỉ cho phép nhập số, có thể giới hạn min, max, step → Dùng để chọn số lượng sản phẩm (Quantity) trong giỏ hàng.

type="date" → Hiển thị giao diện chọn lịch (calendar picker); tự động định dạng ngày/tháng/năm theo hệ thống → Dùng để chọn ngày dự kiến nhận hàng hoặc nhập ngày sinh nhận ưu đãi.

type="color" → Hiển thị bảng chọn màu sắc (color picker) của hệ điều hành; trả về giá trị mã Hex → Dùng trong bộ lọc tìm kiếm sản phẩm theo màu (ví dụ: tìm áo màu xanh, đỏ).

type="range" → Thanh trượt (slider) để chọn một giá trị trong khoảng xác định; trả về số giữa min và max → Dùng cho bộ lọc khoảng giá (Price Range) từ thấp đến cao.

type="tel" → Ô nhập văn bản, trên di động sẽ tự động hiển thị bàn phím số; không tự động validate phức tạp nhưng hỗ trợ thuộc tính pattern → Dùng nhập số điện thoại người mua để shipper liên lạc.

type="url" → Ô nhập text; tự động kiểm tra định dạng giao thức (phải có http:// hoặc https://) → Dùng khi khách hàng gửi link video review sản phẩm từ YouTube/TikTok.

type="search" → Ô nhập text thường có nút "X" để xóa nhanh nội dung; tối ưu hóa về mặt ngữ nghĩa cho công cụ tìm kiếm → Dùng cho thanh tìm kiếm sản phẩm trên đầu trang (Header).

type="checkbox" → Ô vuông nhỏ cho phép tích chọn hoặc bỏ chọn; trả về giá trị on hoặc boolean → Dùng cho mục "Tôi đồng ý với điều khoản dịch vụ" hoặc đăng ký nhận bản tin khuyến mãi qua email.

### Câu A2 (5đ) — Validation Attributes
#### Dự đoán và Giải thích

1. Trường hợp 1: `<input type="text" required value="">`

Dự đoán: Trình duyệt chặn lại và báo lỗi "Please fill out this field".

Giải thích: Do có thuộc tính required nhưng giá trị value lại đang để trống, không thỏa mãn điều kiện bắt buộc.

2. Trường hợp 2: `<input type="email" value="abc">`

Dự đoán: Trình duyệt chặn lại và báo lỗi yêu cầu định dạng email.

Giải thích: type="email" bắt buộc chuỗi nhập vào phải có ký tự @ và tên miền hợp lệ. Chuỗi "abc" không đúng định dạng.

3. Trường hợp 3: `<input type="number" min="1" max="10" value="15">`

Dự đoán: Trình duyệt báo lỗi giá trị phải nhỏ hơn hoặc bằng 10.

Giải thích: Thuộc tính max="10" giới hạn giá trị lớn nhất là 10, trong khi value đang là 15 (vượt mức cho phép).

4. Trường hợp 4: `<input type="text" pattern="[0-9]{10}" value="abc123">`

Dự đoán: Trình duyệt báo lỗi không khớp với định dạng yêu cầu (Please match the requested format).

Giải thích: pattern="[0-9]{10}" chỉ chấp nhận đúng 10 chữ số. Giá trị "abc123" chứa cả chữ và không đủ độ dài.

5. Trường hợp 5: `<input type="password" minlength="8" value="123">`

Dự đoán: Trình duyệt báo lỗi yêu cầu tăng độ dài văn bản lên 8 ký tự hoặc hơn.

Giải thích: Thuộc tính minlength="8" yêu cầu tối thiểu 8 ký tự, nhưng giá trị "123" hiện tại chỉ có 3 ký tự.

### Câu A3 (5đ) — Accessibility
**`<label for="email">` quan trọng cho người dùng là:**
Liên kết ngữ nghĩa: Thuộc tính for trong thẻ `<label>` liên kết trực tiếp với thuộc tính id của thẻ `<input>`. Khi người dùng dùng screen reader (trình đọc màn hình) tab vào ô nhập liệu, phần mềm sẽ đọc to nội dung của nhãn đó lên (ví dụ: "Email, edit text"). Nếu không có sự liên kết này, người khiếm thị sẽ chỉ nghe thấy "Edit text" mà không biết ô đó yêu cầu nhập thông tin gì.

Mở rộng vùng tương tác: Khi có thẻ label được liên kết đúng, người dùng có thể click vào dòng chữ của nhãn để focus vào ô nhập liệu. Điều này cực kỳ hữu ích cho những người có vấn đề về vận động tinh (motor impairments), giúp họ có mục tiêu click lớn hơn là chỉ một ô input nhỏ.
**`<fieldset>` + `<legend>` là và ví dụ**
Khi nào dùng: Dùng khi bạn muốn nhóm các phần tử liên quan lại với nhau trong một form lớn (ví dụ: nhóm thông tin cá nhân, nhóm địa chỉ thanh toán). Thẻ `<fieldset>` dùng để bao quanh nhóm, còn <legend> dùng để đặt tiêu đề cho nhóm đó. Điều này giúp screen reader thông báo cho người dùng biết họ đang bắt đầu hoặc kết thúc một nhóm thông tin cụ thể.

```
<fieldset>
    <legend>Phương thức thanh toán</legend>
    <input type="radio" id="visa" name="payment">
    <label for="visa">Thẻ Visa/Mastercard</label><br>
    <input type="radio" id="cod" name="payment">
    <label for="cod">Thanh toán khi nhận hàng (COD)</label>
</fieldset>

```





**aria-label dùng khi nào? Tại sao KHÔNG nên dùng aria-label khi đã có `<label>`?**

Khi nào dùng: aria-label dùng khi giao diện thiết kế không có nhãn văn bản hiển thị trên màn hình nhưng vẫn cần cung cấp thông tin cho screen reader. Ví dụ: một nút bấm chỉ có icon hình cái kính lúp (Search), ta dùng `<button aria-label="Tìm kiếm">`.

Tại sao KHÔNG nên dùng khi đã có `<label>`:

Dư thừa và ghi đè: aria-label sẽ ghi đè (override) nội dung của thẻ `<label>`. Nếu nội dung hai bên khác nhau, screen reader sẽ chỉ đọc aria-label, gây mất đồng bộ thông tin.


Trải nghiệm người dùng: Thẻ `<label>` thật sự có lợi ích cho tất cả người dùng (click vào nhãn để focus), trong khi aria-label chỉ phục vụ người dùng công cụ hỗ trợ.

### Câu A4 (5đ) — Media
#### 1. Giải thích thuộc tính loading="lazy" trên thẻ <img>. Nó cải thiện gì? Khi nào không nên dùng?

Thuộc tính loading="lazy" trên thẻ img dùng để trì hoãn việc tải hình ảnh cho đến khi hình ảnh đó sắp xuất hiện trong vùng nhìn thấy của người dùng trên màn hình. Thay vì tải toàn bộ ảnh ngay khi mở trang web, trình duyệt chỉ tải những ảnh cần thiết trước, các ảnh nằm phía dưới sẽ được tải khi người dùng cuộn đến gần.

Thuộc tính này giúp cải thiện tốc độ tải trang ban đầu, giảm lượng băng thông sử dụng, giảm tài nguyên hệ thống và giúp website hoạt động mượt hơn, đặc biệt trên thiết bị di động hoặc mạng chậm.

Tuy nhiên, không nên sử dụng loading="lazy" đối với các hình ảnh quan trọng hiển thị ngay khi trang vừa mở như logo, banner chính, hero image hoặc các ảnh nằm ở đầu trang, vì có thể làm ảnh xuất hiện chậm và ảnh hưởng đến trải nghiệm người dùng.

#### 2. Tại sao nên cung cấp nhiều `<source>` trong thẻ `<video>`? Liệt kê ít nhất 3 format video web phổ biến.

Mỗi trình duyệt web có thể hỗ trợ những định dạng video khác nhau. Vì vậy, việc cung cấp nhiều thẻ `<source>` trong thẻ video giúp trình duyệt có thể chọn định dạng phù hợp nhất để phát video. Điều này giúp video hoạt động ổn định trên nhiều trình duyệt, nhiều hệ điều hành và nhiều thiết bị khác nhau.

Ngoài ra, việc cung cấp nhiều nguồn video còn tạo phương án dự phòng nếu một định dạng không được hỗ trợ.

Ba định dạng video web phổ biến là:

MP4 (video/mp4)
WebM (video/webm)
OGG hoặc OGV (video/ogg)
#### 3. Thuộc tính alt trên `<img>` dùng để làm gì? Viết alt tốt cho 3 trường hợp.

Thuộc tính alt (Alternative Text) là văn bản thay thế cho hình ảnh. Khi hình ảnh không tải được, nội dung trong alt sẽ được hiển thị thay thế. Ngoài ra, thuộc tính này còn hỗ trợ người khiếm thị sử dụng trình đọc màn hình và giúp tối ưu SEO cho website.

Ví dụ alt tốt cho các trường hợp:

a. Ảnh sản phẩm iPhone 16:
alt="Điện thoại iPhone 16 màu đen dung lượng 256GB"

b. Ảnh trang trí (decorative):
alt=""

c. Ảnh biểu đồ doanh thu Q1/2026:
alt="Biểu đồ doanh thu quý 1 năm 2026, doanh thu tăng dần từ tháng 1 đến tháng 3"

### Câu A5 (5đ) — So sánh `<figure>` và `<img>`

Thẻ `<img>` được dùng để hiển thị hình ảnh trên trang web. Đây là cách đơn giản nhất khi chỉ cần chèn ảnh mà không cần mô tả thêm. Trong khi đó, thẻ `<figure>` thường được dùng để nhóm hình ảnh cùng với nội dung mô tả đi kèm thông qua thẻ `<figcaption>`. Cách này giúp người dùng hiểu rõ nội dung của hình ảnh và làm cho nội dung có tính ngữ nghĩa hơn.

#### Khi nào dùng Cách 1 (`<img>`)

Cách 1 phù hợp khi hình ảnh chỉ mang tính minh họa, trang trí hoặc nội dung đã được giải thích rõ ở xung quanh, không cần thêm chú thích riêng.

Ví dụ thực tế:

**Ví dụ 1:** Logo website ở phần đầu trang.
Logo chỉ dùng để nhận diện thương hiệu nên không cần chú thích phía dưới.

```html
<img src="logo.png" alt="Logo công ty">
```

**Ví dụ 2:** Icon giỏ hàng trong website bán hàng.
Biểu tượng chỉ hỗ trợ giao diện nên không cần mô tả thêm.

```html
<img src="cart.png" alt="Giỏ hàng">
```

---

#### Khi nào dùng Cách 2 (`<figure>` + `<figcaption>`)

Cách 2 phù hợp khi hình ảnh cần có chú thích, mô tả, giá sản phẩm, nguồn ảnh, tên biểu đồ hoặc thông tin bổ sung để người dùng hiểu rõ hơn.

Ví dụ thực tế:

**Ví dụ 1:** Ảnh sản phẩm trong website bán điện thoại.
Người dùng cần thấy tên sản phẩm và giá bán.

```html
<figure>
    <img src="iphone.jpg" alt="iPhone 16 Pro Max 256GB Titan">
    <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
</figure>
```

**Ví dụ 2:** Hình biểu đồ trong báo cáo doanh thu.
Cần chú thích để người xem hiểu nội dung biểu đồ.

```html
<figure>
    <img src="chart.png" alt="Biểu đồ doanh thu quý 1 năm 2026">
    <figcaption>Biểu đồ doanh thu Q1/2026 của công ty</figcaption>
</figure>
```

Tóm lại, nếu chỉ cần hiển thị ảnh đơn giản thì dùng `<img>`. Nếu hình ảnh cần chú thích hoặc thông tin đi kèm thì nên dùng `<figure>` kết hợp với `<figcaption>`.
