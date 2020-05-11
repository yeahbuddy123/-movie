export default {
    path :'/mine',
    component : ()=>import('@/views/mine'),
    children:[
        {
            path:'center',
            component:()=>import('@/views/mine/center.vue')
        },
        {
            path:'login',
            component:()=>import('@/components/Login')
        },
        {
            path:'register',
            component:()=>import('@/components/Register')
        },
        {
            path:'findpassword',
            component:()=>import('@/components/Findpassword')
        },
        {
            path:'/mine',
            redirect:'/mine/login'
        }
    ]
}