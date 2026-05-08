
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