export default [
    {
        name: 'HOME',
        path: '/home',
        child: [],
    },
    {
        name: 'CSS',
        path: '/css',
        child: [
            {
                name: '布局',
                path: '/css/layouts',
            },
            {
                name: '选择器/特殊性',
                path: '/css/priority',
            },
        ],
    },
    {
        name: 'Game',
        path: '/game',
        child: [
            {
                name: 'dragAndDrop',
                path: '/game/dragAndDrop',
            }
        ]
    },
    {
        name: 'JavaScript',
        path: '/JavaScript',
        child: [
            {
                name: 'oo',
                path: '/oo',
            },
        ],
    },
    {
        name: 'MysqlPractice',
        path: '/mysqlPractice',
        child: [
            {
                name:'',
                path:'',
            },
        ],
    },
    {
        name: 'plugins',
        path: '/plugins',
        child: [
            {
                name:'axios test',
                path:'/plugins/axios',
            },
            {
                name:'vuex test',
                path:'/plugins/vuex',
            },
            {
                name:'lifeCycle',
                path:'/plugins/lifeCycle',
            },
        ],
    },
]