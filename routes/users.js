const router = require('koa-router')();
const { query } = require("../util/db");

router.prefix('/users'); //路由第一层，表示模块

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
});

// router.get('/allUser', function (ctx, next) {
// 	const res = await query();
// 	ctx.body = 'this is a users/bar response'
// });


router.get('/allUser', async (ctx, next) => {
	const queryAllUser = "SELECT * from user";
	const res = await query(queryAllUser);
	ctx.body = {
		data: res
	}
});
module.exports = router;
