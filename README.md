# UET_airline

Trang web được code trên Code editor Visual Studio Code

FontEnd: sử dụng Html, Css, JavaScript

BackEnd: sử dụng NodeJs, frame work Express

Database tự sinh nhờ code

### Hướng dẫn chạy localhost

Để khởi tạo database MySQL Workbench mở các file .sql trong folder theo đường dẫn UET_airline\public\Uet_airline_database

Chạy lần lượt theo thứ tự CreateDataBase, dataCity, dataCustomer, dataFlight, dataSeatDetails, dataPlane, dataTicket, dataOrders, dataOrderSeat, dataPassenger, dataPayment, updateCustomer, updateTicket, updateSeat, fixConnect (lưu ý file này sẽ thay đổi mật khẩu đăng nhập root của bạn thành 'password')

Install nodejs version 20.9 https://nodejs.org/en/download/

Nhập trên terminal theo các dòng dưới:

- npm init 

- npm install express --save

- npm install --save mysql2

- npm install ejs

- npm install --save-dev nodemon

- npm install dotenv --save

- npm install express-session 

Để chạy nhập: npm start
