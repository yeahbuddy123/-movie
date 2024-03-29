export default {
    path :'/movie',
    component : ()=>import('@/views/movie'),
    children:[
        {
            path:'city',
            component:()=>import('@/components/City')
        },
        {
            path:'nowplaying',
            component:()=>import('@/components/Nowplaying')
        },
        {
            path:'search',
            component:()=>import('@/components/Search')
        },
        {
            path:'comingsoon',
            component:()=>import('@/components/Comingsoon')
        },
        {
            path:'detail/1/:movieId',
            components:{
                detail:()=>import('@/views/movie/detail'),
                default:()=>import('@/components/Nowplaying')
            },
            props:{
                detail:true
            }
        },
        {
            path:'detail/2/:movieId',
            components:{
                detail:()=>import('@/views/movie/detail'),
                default:()=>import('@/components/Comingsoon')
            },
            props:{
                detail:true
            }
        },
        {
            path:'/movie',
            redirect:'/movie/nowplaying'
        }
    ]
}