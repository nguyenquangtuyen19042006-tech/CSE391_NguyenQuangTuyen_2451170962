# PHẦN A
## CÂU A1(5đ) — HTTP & Browser
### Khi bạn gõ https://shopee.vn vào trình duyệt và nhấn Enter, hãy liệt kê đúng thứ tự ít nhất 5 bước xảy ra (từ DNS lookup đến render).
1 Gửi HTTP Request (GET): Trình duyệt (Client) gửi một yêu cầu GET / thông qua giao thức HTTP đến máy chủ (Server) của Shopee để xin file index.html.

2 Server phản hồi (200 OK): Máy chủ tìm file index.html và gửi ngược lại cho trình duyệt một mã phản hồi 200 OK kèm theo nội dung file HTML.

3 Parse HTML & Build DOM: Trình duyệt bắt đầu đọc file HTML từ trên xuống để xây dựng DOM Tree (cây cấu trúc trang). Trong quá trình này, nếu gặp các link CSS hoặc JS, trình duyệt sẽ tiếp tục gửi request để tải chúng về.

4 Parse CSS & Build CSSOM: Trình duyệt đọc các file CSS để xây dựng CSSOM Tree, áp dụng các quy tắc về màu sắc, font chữ và bố cục lên từng phần tử trong DOM.

5 Layout & Paint (Render): Sau khi có đủ cấu trúc và định dạng (và thực thi xong JS nếu có), trình duyệt tính toán vị trí các phần tử (Layout) và vẽ các pixel lên màn hình (Paint) để hiển thị giao diện Shopee cho người dùng.

#### Nguồn tham chiếu: File 01_introduction_html_universe.md - Mục 2 (Big Picture) và Mục 3 (Core Technical Truth).

### Trong DevTools của Chrome, tab Network cho thấy thông tin gì? Hãy mở một trang web bất kỳ, chụp screenshot tab Network và đánh dấu (vẽ mũi tên/khoanh tròn) vào:
#### 1. Tab Network trong DevTools cho thấy thông tin gì?
​Dựa vào phần 2. Big Picture và 3. Core Technical Truth trong tài liệu, tab Network là công cụ dùng để giám sát quá trình giao tiếp giữa Client (Browser) và Server. Cụ thể, nó hiển thị:
​Danh sách các file/tài nguyên mà trình duyệt tải về (HTML, CSS, JS, hình ảnh...).
​HTTP Methods (GET, POST...) được sử dụng cho từng yêu cầu.
​Status Code (Trạng thái phản hồi từ server như 200, 404, 500...).
​Thời gian tải (Timing) của từng file và tổng thời gian tải toàn bộ trang web.
​Kích thước (Size) của các tài nguyên được truyền tải qua internet.
#### 2 ​Hướng dẫn xác định các thành phần trên giao diện
​Cách tìm các thông tin theo yêu cầu:

Dưới đây là ảnh chụp màn hình tab Network:


![Screenshot Tab Network](screenshots/image_f9e008.png)

**Các thông số đã đánh dấu:**
- **Status Code:** 200 (ở dòng đầu tiên).
- **Tổng thời gian load trang:** Finish 23.96 s.
- **Request file CSS:** Dòng bundle... có type là stylesheet.

#### Nguồn tham chiếu
​Tên file: 01_introduction_html_universe.md
​Phần trong tài liệu: * Mục 2. Big Picture — Web hoạt động như thế nào?: Giải thích về luồng Request - Response giữa Browser và Server.
​Mục 3. Core Technical Truth — HTTP: Giải thích về các loại Method và Status Codes (200, 404...).
​Mục 6. Hands-on Practice: Hướng dẫn cách mở DevTools (F12) để quan sát thực tế.


# Phần B Câu 3 danh sách lỗi trong file debug.html

- Lỗi 1: Dòng 1 — Khai báo <!DOCTYPE> thiếu "html" — Sửa thành: !DOCTYPE html
- Lỗi 2: Dòng 2 — Thẻ title thiếu thẻ đóng /title — Sửa thành: title Trang web /title
- Lỗi 3: Dòng 3 — Giá trị charset "utf8" chưa chuẩn hóa — Sửa thành: meta charset="UTF-8"
- Lỗi 4: Dòng 4 — Thẻ đóng của h1 viết sai cú pháp (thiếu dấu gạch chéo) — Sửa thành: /h1
- Lỗi 5: Dòng 8 — Thẻ đóng của thẻ a viết sai cú pháp — Sửa thành: /a
- Lỗi 6: Dòng 15 — Thuộc tính src của thẻ img thiếu dấu ngoặc kép — Sửa thành: src="iphone.jpg"
- Lỗi 7: Dòng 15 — Thẻ img thiếu thuộc tính "alt" (lỗi ngữ nghĩa/accessibility) — Sửa thành: thêm alt="iPhone 16 Pro"
- Lỗi 8: Dòng 17 — Sai thứ tự đóng thẻ (Nesting error) — Sửa thành: p b 25.990.000đ /b  /p
- Lỗi 9: Dòng 33 — Sử dụng thẻ main lần thứ hai (Mỗi trang chỉ có duy nhất một thẻ main) — Sửa thành: Đổi thẻ main này thành aside
- Lỗi 10: Dòng 37 — Thẻ p trong footer thiếu thẻ đóng /p — Sửa thành: Thêm /p sau nội dung
- Lỗi 11: Dòng 38 — Thiếu thẻ đóng /html ở cuối trang — Sửa thành: Thêm /html vào dòng cuối cùng
- Lỗi 12: Dòng 14 & 23 — Thứ tự tiêu đề không hợp lý (Nhảy từ h1 sang h3) — Sửa thành: Đổi các thẻ h3 thành h2 để đảm bảo tính phân cấp (Hierarchy).