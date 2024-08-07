## Link git data node express trong cv

### Chức năng :
 + giao diện trang bán hoa
 + chi tiết sản phẩm loát data từ express
 + chức năng giỏ hàng , đặt hàng lứa vào node express
 + đăng ký , đăng nhập tk người dùng lưu trên node express

### Tải code từ git 

`git clone https://github.com/MinhBao2003/React-BH-Express.git `

### Cài thêm node-modules  khi tải code từ git

`npm install`

### * Sửa tên project lại ko được ghi hoa và khi chạy project thường để project trong ổ đĩa c/ sẽ không bị lổi tùy máy *

### Muốn chạy dự án react cài node từ trang chủ của node :

`https://nodejs.org/en/download/prebuilt-installer`

### Cách chạy project

`npm start`

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/4f5e7a31-ad03-4101-97b8-a90d59f8690f)

### Dã chạy thành công

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/64388cb7-2c6d-4a24-ba05-05870928aa8a)

### I.Trang chủ : http://localhost:3001/

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/873c7e03-4c88-47a4-94e5-277897d82b37)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/a65341e9-752d-4ffb-a624-14eed33e2751)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/7c39f033-86ac-44e2-9f3c-5838025612ac)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/92f43406-b6d8-4143-8888-c2674af107fb)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/e4a6de73-c384-4a3d-821d-45b55ce36315)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/69b6813a-3b08-40b2-9655-59053f06af47)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/4cfe84af-bd0e-497f-b8fa-62d55703e2bf)

### II.Chi tiết sản phẩm : http://localhost:3001/Rose

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/7157a2a0-2c43-4a9b-8a9c-65a66a86a802)

click chọn sản phẩm

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/1b7c104c-a967-4a10-a8b6-cd150e9b394d)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/79c87fb3-c2e8-4c2d-8463-5c46be13b987)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/ce059d40-74e5-47bd-8790-61ea0b10c6b9)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/05badc3c-e836-4739-95ec-403d3c116b7e)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/6b944246-7e52-4cb5-8912-4e67c5648e00)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/1d81b13a-e869-43e3-9078-de93bcdf0be9)

khi click giọi

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/acb46cae-4806-4cfb-9c79-2375a008d3af)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/123a9acf-f178-4aab-a1a3-c211d159f61f)

khi click thêm giỏ hàng

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/72c4d5fe-eb07-408a-9199-f544b69bf74f)

nó sẽ thông báo , thông tin sản sẽ được lưu node (express)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/1899fdbf-5a20-41c6-9c11-a7a96cd1cb24)

và nút giỏ hàng sẽ ẩn và thông báo : Sản phẩm đã có trong Giỏ hàng - Số lượng: 1

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/b8bc1738-b809-4e86-b1e5-13e417cc9271)

khi refresh lại thì nó sẽ lấy ra số lượng sản phẩm trong menu 

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/ed43d7a5-cec2-4555-8fdb-8391e488335a)

### III.Trang giỏ hàng : http://localhost:3001/Cart

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/c067f449-7803-4c43-aa8b-6fd863e44c1d)

tăng giảm số lượng sản phẩm

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/b68f2afb-629f-402a-9431-8515bc6962d2)

tăng sản phẩm 

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/e06aa179-e60c-4aea-8028-3fb1ee89c8a4)

nó sẽ tăng số lượng sản phẩm và tính giá sản phẩm theo số lượng sản phẩm với giá 

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/1d3f11c7-d481-4b65-841a-c96d2c28fb96)

nó sẽ tăng trong node (express)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/e362dab8-ad83-4f30-9207-a196c967fa94)

khi click giảm 

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/0fa6d82f-ca93-444e-b34e-971cb390828e)

nó sẽ giảm số lượng sản phẩm và tính giá sản phẩm theo số lượng sản phẩm với giá

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/86a22130-e119-4d3a-bcf8-d954395160c2)

nó sẽ giảm trong node (express)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/c4143099-b5f1-4fa7-bec1-57d1754220bb)

khi click đặt hàng

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/73c685b5-d54e-4f39-a694-b22e0f50fe32)

### IV.Trang đặt hàng http://localhost:3001/Order

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/16f84de6-c2cf-463c-84ad-748e758951ab)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/7eb56f1e-2e05-4e6f-9d11-4d2ca2d72370)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/80e4accb-69e8-48b0-85d0-16ecdcf76805)

khi ấn thanh toán 

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/73aa9678-774d-4c06-8e53-c66e6a8762f3)

nó check texbos , input để trống hoặc nhấp sđt 10 số email theo định dạng @

check họ tên

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/3a262cba-1409-4893-abc0-6617acc89010)

check sđt 

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/16c43b37-b358-4b84-9551-3e259500dbea)

check nhập 10 số 

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/f90a02ba-c681-4941-9e82-1d36efe39623)

check địa chỉ 

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/e790f556-f5ed-445f-b3a7-74806a131f28)

check email

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/d52f1aec-31ae-40ec-890b-b22d868504ed)

check email theo định dạng @

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/a05a9e8b-685d-4498-9741-029defc9bd94)

khi nó check thỏa hết điều kiện nó sẽ lưu vào node Express và reset lại form

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/ffbf323e-a2cb-42e2-8610-63f28c6cb03a)

khi đặt hàng thành công nó sẽ xóa dữ liệu ở node (express) : http://localhost:3000/cart và lưu vào node express : http://localhost:3000/order

khi đặt hàng thành công

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/2b0b8449-8e4a-4ed4-ab9f-927a14bf396b)

xóa dữ liệu ở ở node (express) : http://localhost:3000/cart

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/f5401e92-2f88-4abe-8438-ddeb2f43b74a)

lưu vào node express http://localhost:3000/order

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/52861773-72a1-454c-b962-395584218f14)

### V.Trang chủ đề : http://localhost:3001/Topic

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/384b5515-e21d-4c5f-b2e7-3ed3f18e1112)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/fb9ced85-fc6c-4326-b70a-257099d827f7)

### VI.Trang vị trí của hàng : http://localhost:3001/projeck

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/0f03066f-f640-4e46-a591-d951eae90b04)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/c0f63761-e0a6-409d-955c-8f87a9d4263b)

### VII.Trang login : http://localhost:3001/login

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/1e222ff4-20a4-4719-b023-4cd7992b4856)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/0ed5cc3b-84e9-45cd-abc1-35db04c1eb86)

khi chưa có tk có click button

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/416c1f0f-c85c-4e99-8c1f-2d5baa09696c)

### VIII.Trang resgister : http://localhost:3001/register

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/a2076dfb-eb77-4794-a09f-41d424df5bb3)
![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/b5dbf579-1bbf-42d2-afb4-140ce0aee4a8)

check textbox, input họ tên sđt theo 1 số email theo định dạng @ * check tương tự phần http://localhost:3001/Order * 

check nhập mật khẩu cho và nhập lại mk

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/43846804-8502-422b-898e-b6498a3fa7fe)

khi thỏa hết đk thì form sẽ reset và lưu dữ liệu node (express)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/0440f929-e8cc-4508-b74a-0d72c5bc7c50)

khi thỏa hết đk

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/7ffdce01-f524-4d1f-a40a-883d387c9bcf)

lưu dữ liệu vào node (express)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/a17c54ba-e14e-44d6-90d7-7db67083ca6a)

khi tk có thể click button 'Đã có tài khoản? Đăng nhập' hoặc login trên menu

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/655236f7-be86-412f-bef3-76157ba64911)

 ### * Nó check username password để trống tương tự như phần đk tk và đặt hàng *

check nhập sai tk mk 

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/c003715e-ab20-449f-aa05-6cf0c115160c)

khi nhập đúng username password

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/11bdce1e-d411-4c4f-a919-843ebd730416)

nó sẽ ẩn thẻ login thay bằng bằng tên username tk vào chữ thoát là đăng xuất tk 

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/b5bb9f34-fd14-491c-a2f0-29898a074a33)

 ## * Và có responsive cho màn mobei và cả table và màn lớn hơn *

 ## Responsive cho ss s20 ultra
  
### 1.Trang chủ

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/e22009f9-3770-4e07-b0ab-a214d2a89a40)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/52158e13-7bb5-405b-b34f-409505be9aae)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/42c0a9af-2689-4f4b-a38a-ed5880c712d6)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/e55894c7-3db9-461b-9afa-5fc4b2a76e89)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/f5ca1b61-4b0a-487e-99ad-f8b90b7f19bf)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/3da12feb-cf00-4c5b-a961-5af1b0d6d67d)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/e865dc65-25f8-4fd3-a8ad-de9440076a3b)


### 2.Chi tiết sp

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/fd486031-fa43-4d63-9dd1-0a2db7357d6d)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/4b4cf59c-3600-4ca6-8aa3-c7a68103f61c)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/7e046f67-7309-4b37-a7e9-bd19e3da8ef6)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/4853677d-2750-4a76-9827-924cdf2e84e3)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/74dfd738-3410-49ea-b650-6978eb4680b0)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/e4e73c34-2651-445f-aa94-e776e0285bc6)

### 3.Giỏ hàng

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/a03bec31-00b8-4877-8d41-194389c7a99c)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/564c9746-97ab-4a0f-b29b-7dd85ad42b7a)

### 4.đặt hàng

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/829b36b2-5189-4bc4-ac13-92a80d2fb220)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/ea3e6c0a-1e4f-461d-8ab9-f8cb272b89b1)

### 5.Trang chủ đề

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/735fb0b6-cfa6-4d66-aa68-9867bb0fe506)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/dba0b3b3-7844-4098-a8b6-15b58df573e6)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/f3e901d2-6c9d-4c8b-8006-5d2e4a76c125)

### 6.Vị trí

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/ab9f68c5-3711-4391-b3e0-87e72881f416)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/5ad9db98-4202-4c42-9b18-7093ec3e44b5)

### 7.Login

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/dd487264-8dc3-457f-aa33-830a10bdc42b)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/edea3b6e-b307-44d4-8268-7800993ecc55)

### 8.Register

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/9e0160cb-dd41-409a-862c-f3d78deb7b41)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/e0062712-bd84-4dc7-bb43-28d5c189a869)

![image](https://github.com/MinhBao2003/React-BH-Express/assets/146474537/8df7b7b6-18b1-404d-831d-b41beecb742a)

# Thanks For Watching
