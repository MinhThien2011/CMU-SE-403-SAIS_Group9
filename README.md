# Fibonacci API

API tính toán dãy Fibonacci.

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Tạo file .env (nếu cần thay đổi PORT, mặc định là 5000)
# Ví dụ nội dung file .env:
# PORT=5000
```

## Chạy ứng dụng

```bash
# Chạy trong môi trường development
npm run dev

# Chạy trong môi trường production
npm start
```

## API Endpoints

- `GET /fibonacci?count=n`: Trả về dãy Fibonacci với n phần tử đầu tiên  
  - Ví dụ: `GET /fibonacci?count=10` trả về 10 số Fibonacci đầu tiên

- `POST /fibonacci` với body JSON `{ "count": n }`: Trả về dãy Fibonacci với n phần tử đầu tiên  
  - Ví dụ: body `{ "count": 10 }`

## Cấu hình

Mặc định, server sẽ chạy tại `http://localhost:5000`.

