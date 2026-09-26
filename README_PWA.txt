# TNTT Châu Thủy — PWA V3 TRUE APP

## Mục tiêu
- Giao diện chạy 100% từ PWA, không còn iframe chứa Index.html của Apps Script.
- Có icon TNTT, manifest, service worker và chế độ `standalone` để cài lên điện thoại.
- Google Apps Script chỉ làm backend API + Google Sheet/Drive.
- Không dùng Bridge.html.

## 1. Cập nhật Apps Script
1. Mở project Apps Script đang dùng cho TNTT.
2. Thay toàn bộ `Code.gs` bằng file `APPS_SCRIPT/Code.gs` trong gói này.
3. Giữ nguyên các Sheet/Google Drive hiện tại.
4. Deploy > New deployment > Web app.
5. Execute as: Me.
6. Who has access: Anyone (hoặc chính sách phù hợp với hệ thống của bạn).
7. Sau khi deploy, dùng đúng URL `/exec`.

**Quan trọng:** `API_URL` trong `PWA/index.html` đã đặt theo Web App URL hiện tại của dự án. Nếu Deploy tạo URL khác, sửa lại biến `API_URL`.

## 2. Đưa PWA lên HTTPS
Có thể dùng GitHub Pages, Cloudflare Pages, Netlify hoặc hosting HTTPS bất kỳ. Upload **toàn bộ thư mục `PWA/`**.

Không mở trực tiếp bằng `file://`; PWA và camera cần HTTPS (localhost cũng được khi thử nghiệm).

## 3. Cài lên điện thoại
### Android Chrome
Mở URL PWA → menu Chrome → **Cài đặt ứng dụng / Add to Home screen** → cài.

### iPhone
Mở URL bằng Safari → **Chia sẻ** → **Thêm vào Màn hình chính**.

Sau khi cài, app chạy dạng `standalone`, có icon TNTT và không hiển thị thanh địa chỉ trình duyệt như một tab web thông thường.

## 4. Kiểm tra
1. Mở PWA.
2. Đăng nhập tài khoản TNTT hiện có.
3. Kiểm tra Trang chủ, Thành viên, camera, QR, điểm danh, thống kê, đổi mật khẩu.
4. Nếu API báo lỗi, mở URL Apps Script `/exec?health=1` để kiểm tra backend.

## 5. Lưu ý
PWA cài được như app nhưng dữ liệu vẫn online và phụ thuộc Google Apps Script/Google Sheet/Drive. Service Worker chỉ cache vỏ giao diện; chưa triển khai đồng bộ dữ liệu offline.


V3.1 STABLE: network-first cho index.html; cache version tntt-chau-thuy-v3.1; luong auto-login khong an man hinh login khi refresh loi; co beforeinstallprompt.

V3.2.6: doPost returns HtmlService postMessage directly to hidden form/iframe; Cache polling remains fallback.
