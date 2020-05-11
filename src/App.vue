<template>
 <div id="app">
   <keep-alive exclude="Detail">
       <router-view/>
   </keep-alive>
    
    <tab-bar>
   <tab-bar-item  path="/home" activeColor="blue">
      <img  slot="item-icon" src="./assets/img/tabbar/home.png" alt="">
        <img  slot="item-icon-active" src="./assets/img/tabbar/spcarac.png" alt="">
       <div slot="item-text">首页</div>
   </tab-bar-item>
  
   <tab-bar-item path="/about">
      <img   slot="item-icon" src="./assets/img/tabbar/about.png" alt="">
         <img   slot="item-icon-active" src="./assets/img/tabbar/spcarac.png" alt="">
       <div slot="item-text">分类</div>
   </tab-bar-item>
    <tab-bar-item path="/car">
      <img   slot="item-icon" src="./assets/img/tabbar/shoppingcart.png" alt="">
       <img  slot="item-icon-active" src="./assets/img/tabbar/spcarac.png" alt="">
       <div slot="item-text">购物车</div>
   </tab-bar-item>
   <tab-bar-item path="/me">
      <img    slot="item-icon" src="./assets/img/tabbar/me.png" alt="">
         <img   slot="item-icon-active" src="./assets/img/tabbar/meac.png" alt="">
        <div slot="item-text">我的</div>
   </tab-bar-item>
 
   </tab-bar>
 
  </div>
</template>




<script>
// import MainTabBar from './components/content/maintabbar/MainTabBar.vue'

 import TabBar from './components/common/tabbar/TabBar.vue'
 import TabBarItem from './components/common/tabbar/TabBarItem.vue'
 export default {
   name: 'App',
  
components:{
    // MainTabBar
      TabBar,
    TabBarItem
  }



 }
  
</script>
<style>
 @import "./assets/css/base.css";



</style>
