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

## Câu A2 — Fetch API

### `await fetch(...)`

* `fetch()` trả về `Promise<Response>`.
* Dùng `await` để chờ request hoàn thành và lấy đối tượng `Response`.

### `response.ok`

* `true` khi status từ **200–299**.
* `false` khi request lỗi HTTP.

Ví dụ:

* `404` Not Found
* `401` Unauthorized
* `500` Internal Server Error

### `response.json()`

* Chuyển dữ liệu JSON thành object JavaScript.
* `json()` trả về Promise nên cần `await` lần nữa.

### `try...catch`

Bắt được:

* Network error (mất mạng, DNS lỗi,...)
* JSON parse error
* Lỗi tự `throw`

Không tự bắt:

*  404, 401, 500 vì `fetch()` vẫn thành công về mặt kết nối.
* Muốn vào `catch` phải tự kiểm tra:

```js
if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
}
```
## Câu A3 — Promise States

### Sơ đồ trạng thái Promise

```text
          Pending
         /       \
        /         \
Fulfilled       Rejected
(resolve)        (reject)
```

* **Pending**: đang chờ xử lý.
* **Fulfilled**: thành công (`resolve()`).
* **Rejected**: thất bại (`reject()`).

---

#### Callback Hell là gì?

Là tình trạng callback lồng nhiều tầng gây code khó đọc, khó bảo trì.

#### Ví dụ 4 cấp Callback Hell

```js
getUser(function(user) {
    getPosts(user.id, function(posts) {
        getComments(posts[0].id, function(comments) {
            getLikes(comments[0].id, function(likes) {
                console.log(likes);
            });
        });
    });
});
```

---

#### Refactor bằng async/await

```js
async function getData() {
    const user = await getUser();
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    const likes = await getLikes(comments[0].id);

    console.log(likes);
}
```

#### Ưu điểm async/await

* Dễ đọc hơn.
* Tránh callback hell.
* Xử lý lỗi bằng `try...catch` thuận tiện.

# Phần C

## Câu C1 — Error Handling Strategy

**1. Network Error (mất mạng)**

* Hiện thông báo lỗi.
* Cho phép người dùng Retry.

```js
catch(error){
    alert("Không có kết nối mạng");
}
```

**2. API Error**

* `404`: Không tìm thấy dữ liệu.
* `500`: Lỗi máy chủ.
* `429`: Quá nhiều request, thử lại sau.

**3. Timeout (>10s)**

```js
async function fetchWithTimeout(url, ms = 10000){
    const controller = new AbortController();

    setTimeout(() => controller.abort(), ms);

    return fetch(url,{
        signal: controller.signal
    });
}
```

**4. Retry Logic (3 lần)**

```js
async function fetchWithRetry(url, maxRetries = 3){

    for(let i = 0; i < maxRetries; i++){

        try{
            return await fetch(url);
        }catch(error){

            if(i === maxRetries - 1){
                throw error;
            }
        }
    }
}
```

**vậy là**

* Mất mạng → báo lỗi + Retry.
* 404 → không tìm thấy dữ liệu.
* 500 → lỗi server.
* 429 → chờ rồi gửi lại request.
* Timeout → hủy request sau 10 giây.
* Retry → thử lại tối đa 3 lần.


## Câu C2 — Promise.all vs Promise.allSettled vs Promise.race vs Promise.any

| Method          | Khi nào resolve?            | Khi nào reject?       | Use case                             |
| --------------- | --------------------------- | --------------------- | ------------------------------------ |
| `.all()`        | Tất cả Promise thành công   | Chỉ cần 1 Promise lỗi | Load nhiều dữ liệu bắt buộc          |
| `.allSettled()` | Tất cả Promise hoàn thành   | Không reject          | Dashboard nhiều API độc lập          |
| `.race()`       | Promise đầu tiên hoàn thành | Promise đầu tiên lỗi  | Timeout request                      |
| `.any()`        | Promise đầu tiên thành công | Tất cả Promise lỗi    | Lấy dữ liệu từ nhiều server dự phòng |

---

### 1. Promise.all()

Load Users, Posts, Comments cùng lúc:

```js id="ym7pcy"
const [users, posts, comments] =
await Promise.all([
    fetch("/users").then(r => r.json()),
    fetch("/posts").then(r => r.json()),
    fetch("/comments").then(r => r.json())
]);
```

---

### 2. Promise.allSettled()

Dashboard có API lỗi vẫn hiển thị API khác:

```js id="gzxj0m"
const results =
await Promise.allSettled([
    fetch("/weather"),
    fetch("/news"),
    fetch("/users")
]);
```

---

### 3. Promise.race()

Timeout sau 5 giây:

```js id="s96v9t"
await Promise.race([
    fetch("/api/data"),
    new Promise((_, reject) =>
        setTimeout(() =>
            reject("Timeout"), 5000)
    )
]);
```

---

### 4. Promise.any()

Lấy dữ liệu từ server nhanh nhất:

```js id="c2jckg"
const data =
await Promise.any([
    fetch("server1/api"),
    fetch("server2/api"),
    fetch("server3/api")
]);
```

### Tóm tắt

* **all()**: Cần tất cả thành công.
* **allSettled()**: Muốn biết kết quả từng Promise.
* **race()**: Lấy Promise hoàn thành đầu tiên.
* **any()**: Lấy Promise thành công đầu tiên.
