<template>
  <div id="main">
    <Header title="我的喵喵" />
    <div id="content">
      <router-view />
    </div>
    <Tabbar />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Tabbar from "@/components/Tabbar";
import Login from "@/components/Login";
export default {
  name: 'mine',
  components: {
    Header,
    Tabbar,
    Login
  },
};
</script>
<style></style>
