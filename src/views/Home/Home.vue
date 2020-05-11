<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control v-show="showTop" ref="tabControl" :titles="['精选', '爆款', '热门']" @tabClick="tabClick"  class="fixed" />
   <scroll class="content"  ref="scroll" :probe-type="3" 
   @scroll="contentScroll" :pull-up-load="true"
   @pullingUp="loadMore"> 
     
    <home-swiper :banners="banners"  @swiperImageLoad="swiperImageLoad"/>
    <recommend-view :recommends="recommends" />
    <feature/>
    <tab-control ref="tabControl" :titles="['精选', '爆款', '热门']" @tabClick="tabClick"   />
    <goods-list :goods="goods[currentType].list" />
   </scroll>
   <back-top  @click.native= "backClick"  v-show="isShow" />
  </div>
</template>


// <script>
//导入导航模块
import NavBar from "../../components/common/navigation/NavBar";
//导入轮播图
import HomeSwiper from "./children/HomeSwiper";
//导入推荐
import RecommendView from "./children/RecommendView";
//导入热点
import Feature from "./children/Feature";
//导入分类
import TabControl from "../../components/content/tabControl/TabControl";
//导入商品列表
import GoodsList from "../../components/content/goods/GoodsList";
//导入scroll
import Scroll from "../../components/common/scroll/Scroll"
//导入backtop
import backTop from "../../components/common/backtop/backTop"
//导入debounce
import {debounce} from "../../common/utils"
//导入首页网络请求
import { getHomeMultidata, getHomeGoods } from "../../network/home.js";
// import {Swiper,SwiperItem }  from'../../components/common/swiper'
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    backTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow:false,
      tabOffsetTop:0,
      showTop:false,
      saveY:0,

     
    }
  },
  destroyed(){
      // console.log('呜呜呜');
      
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated(){

  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");

    //监听item图片加载

  
  },
  mounted (){
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on('itemImage', ()=>{
          
            // this.$refs.scroll.refresh()
            refresh()
           
    })
   
    //获取tabcontrol位置
    //  console.log(this.$refs.tabControl.$el.offsetTop);

     

  },
  methods: {
    //事件监听
    //     debounce(func,delay) {
    //       let timer
    //       return function () {
    // var context = this;
    // var args = arguments;
    //         if(timer)clearTimeout(timer)
    //      timer = setTimeout(function(){
    //           func.apply(this, args)
    //      },delay)
          
    //       }
    //    },
 //获取图片加载完 offsetTop值
     swiperImageLoad(){
         this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
         
     },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick(){
  //  this.$refs.scroll.scroll.scrollTo(0, 0)
  //    console.log(scroll); 
  //     // console.log(scroll);
         scrollTo(0, 0)
        
    },
    contentScroll(position){
        // console.log(position);
        //判断tabback是否显示
       this.isShow = (-position.y) > 1000
       //2 判断是否吸顶
       this.showTop = (-position.y) >635
       
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
       
    },

    //网络请求
    getHomeMultidata() {
      //请求Nav swiper数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
         

         this.$refs.scroll.scroll.finishPullUp()
        //  this.$refs.scroll.finishPullUp()

      });
    }
  }
};
</script>>

<style scoped>
#home{
   position: relative;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: pink;
  color: aliceblue;
}
/* .tab-control {
  /* position: sticky;
  top: 44px;
  z-index: 9;
  background-color: rgb(252, 251, 250);
  z-index:9; */
/* } */ 

.fixed{
  margin-top: 44px;
  position: relative;
  right: 0;
  left: 0;
  
}
.content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  
 
  

}
</style>