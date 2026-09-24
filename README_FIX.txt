TNTT Châu Thủy • v2.1.1 — FIX Bridge/API

LỖI ĐÃ SỬA:
- Bỏ màn hình mẫu báo “Bridge/API chưa được kết nối...”
- Giữ nguyên giao diện TNTT hiện tại, gồm logo, đăng nhập và toàn bộ chức năng.
- PWA tự tạo iframe Bridge tới Apps Script Web App.
- Khi chạy trực tiếp trong Apps Script, vẫn dùng google.script.run như cũ.
- Có timeout và thông báo lỗi kết nối.

QUAN TRỌNG — BACKEND APPS SCRIPT:
1. Trong project Apps Script phải tạo file HTML tên chính xác: Bridge
2. Dán nội dung file Bridge.html trong gói này vào file Bridge.html của Apps Script.
3. Sửa doGet(e) thành:

function doGet(e){
  if(e && e.parameter && e.parameter.bridge==='1'){
    return HtmlService.createHtmlOutputFromFile('Bridge')
      .setTitle('TNTT Châu Thủy Bridge')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('TNTT Châu Thủy')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

4. Deploy > Manage deployments > Edit Web app > New version > Deploy.
5. Quyền thực thi: Me (tài khoản chủ project). Quyền truy cập: Anyone có quyền truy cập Web App theo cấu hình hiện tại của bạn.
6. Web App URL phải đúng URL đang ghi trong index.html:
https://script.google.com/macros/s/AKfycbyAZ0BdDGRlEBVzNPlbtOlIAwwzRTYig-sbZiVe91LDtkt92O3G5VAzqrnouqigN4k/exec

KIỂM TRA:
Mở URL trên thêm ?bridge=1. Nếu deploy đúng, trang Bridge phải mở được và không còn lỗi “Index không tồn tại”.

GHI CHÚ:
- Không cần đưa Bridge.html lên GitHub Pages. Bridge.html phải nằm trong Apps Script để google.script.run hoạt động.
- index.html là PWA frontend có thể đưa lên GitHub Pages/hosting HTTPS.
