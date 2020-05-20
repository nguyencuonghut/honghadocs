# Phần mềm cân ACS
Phần mềm cân xe tải ACS là phần mềm cân xe tự động, có các tính năng sau:
- Quản lý xe ra/vào bằng module đăng ký xe nhập, đăng ký xe xuất:
- Quản lý kế hoạch nhập hàng: module đăng ký kế hoạch được vận hành bởi nhân viên phòng Thu Mua.
- Tự động nhận diện biển số xe.
- Cân nhập: tự động tính bì dựa theo công thức, tự động tạo phiếu nhập trên Bravo.
- Cân xuất: trừ bì tự động, quản lý hóa đơn bằng máy đọc mã vạch.
- Báo cáo: tự động xuất báo cáo tổng hợp, báo cáo chênh lệch thành phẩm.
Có hệ thống báo cáo nền web cho phép người quản trị kiểm tra báo cáo một cách tiện lợi.

## Cài đặt
Việc cài đặt được thực hiện theo yêu cầu từ bộ phận.  
- Địa chỉ bộ cài: `\\172.16.2.30\Setup\28_ACS`
    * Bộ cài cho module đăng ký xe (cài trên máy tính Bảo Vệ): `iTruk_HongHaFeed`
    * Bộ cài cho module cân nhập/xuất (cài trên máy tính trạm cân 100T, 80T): `Vtwv2_HongHaFeed`
- Cách cài đặt: bộ cài được thiết lập chế độ tự động.  
Trong mỗi thư mục bộ cài tồn tại file `setup.exe`, vui lòng click file này và chờ cho tới khi chương trình cài đặt xong.
- Key bản quyền (phần mềm ACS cần cung cấp key để active): vui lòng liên hệ `Mr.Cường - 0974 936 497` để được hỗ trợ.

## Cấu hình
### Cấu hình module Cân Xuất
File cấu hình đã được lưu trên hệ thống.  
Mỗi lần setup lại phần mềm, người dùng cần kiểm tra xem các cấu hình đã được áp dụng cho module Cân Xuất đúng chưa như ảnh dưới đây:  
\- Cấu hình kết nối COM:
![OtherComConfig](./OtherComConfig.jpg)
\- Cấu hình đồng bộ dữ liệu:
![SyncConfig](./SyncConfig.jpg)
\- Cấu hình nhóm người dùng:
![UserGroupConfig](./UserGroupConfig.jpg)
\- Cấu hình người dùng:
![UserConfig](./UserConfig.jpg)
\- Cấu hình camera:
![CameraConfig](./CameraConfig.jpg)
\- Cấu hình cổng COM:
![ComConfig](./ComConfig.jpg)
\- Cấu hình thông tin công ty:
![CompanyConfig](./CompanyConfig.jpg)
\- Cấu hình cầu cân:
![CauCanConfig](./CauCanConfig.jpg)
\- Cấu hình phần mềm cân:
![SoftwareConfig](./SoftwareConfig.jpg)
\- Cấu hình email:
![EmailConfig](./EmailConfig.jpg)
\- Cấu hình lịch gửi email tự động:
![EmailReportConfig](./EmailReportConfig.jpg)
\- Cấu hình IO:
![IOConfig](./IOConfig.jpg)
\- Cấu hình COM khác:
![OtherComConfig](./OtherComConfig.jpg)
### Cấu hình module Cân Nhập
Tương tự như module Cân Xuất, sau khi cài xong phần mềm, người dùng cần kiểm tra thông tin cấu hình đã chính xác chưa như ảnh dưới đây:

## Tạo kế hoạch nhập hàng
Việc tạo kế hoạch nhập hàng được thực hiện bởi nhân viên phòng Thu Mua.  
Kế hoạch nhập hàng sẽ tạo dữ liệu đầu vào cho module `Đăng ký xe nhập`.
Chỉ các xe nằm trong `kế hoạch` mới được phép đăng ký.
::: warning
- Kế hoạch nhập hàng phải được tạo trước thời điểm 16:00.  
Sau thời điểm này, hợp đồng nào thêm vào được tính là `bổ sung`.
- Trường hợp xe vào nhập hàng mà không nằm trong kế hoạch, Bảo Vệ liên hệ nhân viên phòng Thu Mua để yêu cầu bổ sung xe vào `kế hoạch nhập hàng`.
:::
Sau đây là các bước thực hiện để tạo kế hoạch nhập hàng:
- B1: Truy cập phần mềm (giao diện web)  
  * Mở trình duyệt web (Chrome/Firefox/...), gõ địa chỉ: `172.16.2.50:1294`
  * Ấn nút enter để vào phần mềm.
  ![LoginPage](./LoginPage.jpg)
- B2: Đăng nhập phần mềm  
  * Nhập `Tên đăng nhập` và `Mật khẩu`, sau đó ấn nút `Đăng nhập`.
  ![Authen](./Authen.jpg)
- B3: Tạo kế hoạch  
  * Click `Kế hoạch > Lập kế hoạch`:
  ![CreateNewPlan](./CreateNewPlan.jpg)
  * Ấn nút `Thêm mới`:
  ![CreateDailyPlan](./CreateDailyPlan.jpg)
  * Chọn `Ngày kế hoạch` (là ngày nhập hàng), điền `Tên kế hoạch` và ghi chú (nếu cần thiết).  
  Sau đó ấn nút `Thêm mới`.
  ![SetPlanName](./SetPlanName.jpg)
  ::: warning
  Bắt buộc phải chọn đúng `Ngày kế hoạch` và nhập `Tên kế hoạch`.  
  Trường `Ghi chú` có thể bỏ trống.
  :::
  * Ba nút dưới đây được dùng để `Tạo chi tiết kế hoạch`, `Sửa kế hoạch (sửa tên, ngày, ghi chú` và `Xóa kế hoạch`.
  ![PlanOverView](./PlanOverView.jpg)
  * Ấn nút `Chi tiết kế hoạch` để thêm danh sách các xe sẽ nhập hàng (theo hợp đồng):
  ![PlanDetail](./PlanDetail.jpg)
  * Ấn nút `Thêm mới`
  ![PlanNewContract](./PlanNewContract.jpg)
  * Điền chính xác các thông tin và bấm nút `Thêm mới`:
  ![PlanFillNewContract](./PlanFillNewContract.jpg)
  ::: warning
  Các trường có dấu sao màu đỏ (*) là `bắt buộc`.
  :::
  * Tiếp tục thêm các hợp đồng để hoàn thành `Kế hoạch nhập hàng`, trên phần mềm hỗ trợ tính năng `Sửa` hoặc `Xóa` cho từng hợp đồng.
  ![PlanEditRemoveContract](./PlanEditRemoveContract.jpg)

## Đăng ký xe nhập
Theo quy trình cân khép kín, xe muốn vào nhập hàng cần được đăng ký ở cổng bảo vệ (Bảo Vệ khu B).
::: warning
- Xe chỉ được đăng ký khi đã có tên trong `Kế hoạch nhập hàng`.
- Trường hợp chưa có tên trong `Kế hoạch nhập hàng`, nhân viên Bảo Vệ liên hệ với nhân viên phòng Thu Mua để được bổ sung.
:::

Đăng ký xe nhập hàng bao gồm `Đăng ký vào` và `Đăng ký ra`.
Người dùng đăng nhập vào phần mềm `iTruck`, click `Xe ra vào > Đăng ký xe nhập`:
![OpenDangKyNhap](./OpenDangKyNhap.jpg)
### Đăng ký vào
Trên giao diện `Đăng ký xe nhập`, nút tròn ở mục `Xe đã vào`, nhân viên Bảo Vệ cần điền đầy đủ `Biển số`, `Lái xe` và chọn hợp đồng trong danh mục. Cuối cùng ấn nút `Tạo mới` để hoàn thành.
![Nhap_DangKyVao](./Nhap_DangKyVao.jpg)
::: warning
- `Biển số`: yêu cầu ngăn cách giữa phần `Mã tỉnh thành` và phần `Số` bằng dấu gạch giữa `-`.
- `Lái xe`: yêu cầu viết Tiếng Việt có dấu, phía sau ghi số điện thoại lái xe.
:::

### Đăng ký ra

### Sửa đăng ký
Vì một số nguyên nhân, thông tin đăng ký có thể bị sai:
- Sai biển số xe.
- Sai thông tin lái xe.

Trường hợp Bảo Vệ muốn sửa thông tin đã đăng ký, click vào xe đã được đăng ký, tiếp theo sửa các giá trị và ấn nút `Lưu phiếu` để cập nhật lại.
![Nhap_SuaDangKyvao](./Nhap_SuaDangKyVao.jpg)

## Đăng ký xe xuất

## Cân nhập

## Cân xuất

