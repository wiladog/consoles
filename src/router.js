const routers = [
	{
		path: '/',
		meta: {
		    title: ''
		},
		component: (resolve) => require(['./views/index.vue'], resolve)
	},
	{
		path: '/admin',
		meta: {
		    title: '后台管理'
		},
		component: (resolve) => require(['./components/layout.vue'], resolve),
		children: [
			{
				path: 'add',
				meta: {
				    title: '增加'
				},
				component: (resolve) => require(['./views/add.vue'], resolve)
			},
			{
				path: 'index',
				name: 'admin',
				meta: {
				    title: '后台管理'
				},
				component: (resolve) => require(['./views/index.vue'], resolve)
			}
		]
	},
	{
		path: '/login',
		name:'login',
		meta: {
		    title: '登录'
		},
		component: (resolve) => require(['./views/login.vue'], resolve)
	},
	{
		path: '/register',
		name: 'register',
		mata: {
			title: '注册'
		},
		component: (resolve) => require(['./views/register.vue'], resolve)
	},
	{
		path: '/findpwd',
		name: 'findpwd',
		mata: {
			title: '密码找回'
		},
		component: (resolve) => require(['./views/findpwd.vue'], resolve)
	}
];
export default routers;