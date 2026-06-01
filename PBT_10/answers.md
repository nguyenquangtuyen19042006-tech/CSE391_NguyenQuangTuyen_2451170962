# Phần A
## Câu A1
### Thứ tự output

```text
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms
```

### Giải thích

1. Code đồng bộ chạy trước:

```js
console.log("1 - Start");
console.log("4 - End");
```

2. `Promise.then()` được đưa vào **Microtask Queue**:

```js
3 - Promise
6 - Promise 2
```

3. `setTimeout()` được đưa vào **Macrotask Queue**:

```js
2 - Timeout 0ms
5 - Timeout 100ms
```

4. Event Loop xử lý:

* Chạy hết code Sync.
* Chạy hết Microtask Queue (`3`, `6`).
* Khi chạy `6`, tạo thêm `setTimeout` nên `7` vào cuối Macrotask Queue.
* Chạy Macrotask (`2`, `7`).
* Sau 100ms chạy `5`.

### Khái niệm

* **Event Loop**: Cơ chế theo dõi Call Stack và lấy task từ Queue để thực thi.
* **Microtask Queue**: Chứa `Promise.then()`, `catch()`, `finally()`. Ưu tiên cao hơn.
* **Macrotask Queue**: Chứa `setTimeout()`, `setInterval()`, I/O,...

