<template>
    <div>
        个人中心:
        当前用户：<a href="javascript:;" @touchstart="handleToLogout">退出</a>
        <div v-if="$store.state.user.isAdmin">用户身份：管理员<a href="/admin" target="_blank">进入管理后台</a></div>
        <div v-else>用户身份：普通会员</div>
    </div>
</template>
<script>
export default {
    name:'center',
    methods:{
        handleToLogout(){
            this.axios.get('/api2/users/logout').then((res)=>{
                var status=res.data.status;
                if(status==0){
                    localStorage.removeItem('name');
                    localStorage.removeItem('isAdmin');
                    this.$router.commit('user/USER_NAME',{name:'',isAdmin:false})
                    this.$router.push('/mine/login');
                }
            })
        }
    },
    beforeRouteEnter (to, from, next) {
        axios.get('/api2/users/getUser').then((res)=>{
            var status=res.data.status;
            if(status===0){
                next(vm=>{
                    localStorage.setItem('name',res.data.data.username);
                    localStorage.setItem('isAdmin',res.data.data.isAdmin);
                    vm.$store.commit('user/USER_NAME',{name:res.data.data.username,isAdmin:res.data.data.isAdmin})
                });
            }else{
                next('/mine/login');
            }
        })
    }
}
</script>
<style>
    
</style>
