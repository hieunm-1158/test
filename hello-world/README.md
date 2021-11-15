# hello-world

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

router:

1. Programmatic Navigation:

a. router.push ( dùng để chuyển trang)
// literal string path
router.push('home')

// object
router.push({ path: 'home' })

// named route
router.push({ name: 'user', params: { userId: '123' } })

// with query, resulting in /register?plan=private
router.push({ path: 'register', query: { plan: 'private' } })

#####################
const userId = '123'
router.push({ name: 'user', params: { userId } }) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// This will NOT work
router.push({ path: '/user', params: { userId } }) // -> /user

b. router.replace ( Hoạt động giống history push nhưng không để lại lịch sử)

c. router.go ( dùng để tiến hoặc lùi trang bao nhiêu record)

2. named route: ví dụ ở history.push ( sử dụng name thay thế cho path )

3. named viewed ( sử dụng khi muốn custom route-view, hiển thị nhiều view trên cùng 1 trang, các route lồng nhau)

4. redicrect: chuyển hướng sang trang khách khi vừa mount

5. notfound: /:catchAll(.\*)

6. mixin ( tái sử dụng, dùng chung với extend )

7. slot
   a. slot content
   b. fallback content ( cha gọi nhưng không chèn nội dung thì mặc định là nội dung viết bên trong slot)
   c. slot được đặt tên ( có nhiều slot với tên khác nhau hay dùng để chia layout, v-slot)
   d. scoped slot ( truyền props từ con lên cha)
