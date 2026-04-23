# PHẦN A
## CÂU A1(5đ) — HTTP & Browser
### Khi bạn gõ https://shopee.vn vào trình duyệt và nhấn Enter, hãy liệt kê đúng thứ tự ít nhất 5 bước xảy ra (từ DNS lookup đến render).
1 Gửi HTTP Request (GET): Trình duyệt (Client) gửi một yêu cầu GET / thông qua giao thức HTTP đến máy chủ (Server) của Shopee để xin file index.html.

2 Server phản hồi (200 OK): Máy chủ tìm file index.html và gửi ngược lại cho trình duyệt một mã phản hồi 200 OK kèm theo nội dung file HTML.

3 Parse HTML & Build DOM: Trình duyệt bắt đầu đọc file HTML từ trên xuống để xây dựng DOM Tree (cây cấu trúc trang). Trong quá trình này, nếu gặp các link CSS hoặc JS, trình duyệt sẽ tiếp tục gửi request để tải chúng về.

4 Parse CSS & Build CSSOM: Trình duyệt đọc các file CSS để xây dựng CSSOM Tree, áp dụng các quy tắc về màu sắc, font chữ và bố cục lên từng phần tử trong DOM.

5 Layout & Paint (Render): Sau khi có đủ cấu trúc và định dạng (và thực thi xong JS nếu có), trình duyệt tính toán vị trí các phần tử (Layout) và vẽ các pixel lên màn hình (Paint) để hiển thị giao diện Shopee cho người dùng.

#### Nguồn tham chiếu: File 01_introduction_html_universe.md - Mục 2 (Big Picture) và Mục 3 (Core Technical Truth).
