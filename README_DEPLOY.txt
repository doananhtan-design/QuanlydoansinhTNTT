TNTT Châu Thủy • v2.1.3

1. PWA: đưa index.html, config.js, manifest.webmanifest, sw.js lên GitHub Pages/hosting HTTPS.
2. Apps Script: thêm Code.gs và Bridge.html vào đúng project đang chứa Google Sheet.
3. Code.gs đã có doGet(e): khi URL có ?bridge=1 sẽ trả Bridge.html và ALLOWALL.
4. Deploy Apps Script -> Web app -> Execute as Me -> Anyone có quyền truy cập -> Deploy.
5. Sau khi thay đổi Code.gs/Bridge.html phải tạo New version và Deploy lại.
6. Xóa cache/site data hoặc mở URL PWA với ?v=2.1.3 để kiểm tra bản mới.
7. Tài khoản test: doantruong / 123456 (nếu tài khoản này tồn tại và đang HOAT_DONG trong Sheet).

Luồng: PWA -> iframe Apps Script ?bridge=1 -> Bridge.html -> google.script.run -> login()/dashboard() -> Google Sheet.
