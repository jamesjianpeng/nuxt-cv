const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
// const mysql = require('mysql');

/**
 * @description
 */
// const options = {
//   host: '127.0.0.1',
//   port: 3306,
//   user: 'root',
//   password: 'Pj-199511',
//   insecureAuth : true,
//   database: 'studentCourseSystem',
//   path: '/'
// }

/**
* @description 创建链接
*/
// const connection = mysql.createConnection(options)

/**
* @description 链接mysql
*/
// connection.connect()

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

const setHeader = async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    ctx.set('content-type', `text/plain;charset=utf-8`);
    ctx.set('Access-Control-Allow-Origin', `*`);
}

// const getQueryData = () => {
//     return new Promise((reslove,reject) => {
//         connection.query('SHOW COLUMNS FROM students', (error, results, fields) => {
//             if (error) throw error;
//             if (results.length) {
//                 results.map((item) => {
//                     console.log(item)
//                 })
//                 reslove(JSON.stringify(results));
//                 return;
//             }
//             reject([])
//         });
//     })
// }

// router.get('/', async (ctx, next) => {
//     let data = await getQueryData() // 必须使用 async await 包装一下 Promise 这样才能从服务端拿到数据
//     ctx.body = data
// });

router.get('/hello', (ctx, next) => {
    ctx.body = 'Hello World';
});
      
app
.use(setHeader)
.use(router.routes())
.use(router.allowedMethods());

app.listen(3001)
