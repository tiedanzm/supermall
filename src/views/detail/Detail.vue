<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
  
  </div>
</template>  


<script>
import DetailNavBar from "./child/DetailNavBar";

import DetailSwiper from "./child/DetailSwiper";
import DetailBaseInfo from "./child/DetailBaseInfo";

import Scroll from '../../components/common/scroll/Scroll'

import {getDetail, Goods, Shop, GoodsParam} from "../../network/detail";
export default {
  name: "Detail",

  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    };
  },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
      }
    },
  
  created() {
    //根据iid请求详情数据
    this.iid = this.$route.params.iid;
    //获取顶部轮播图
    getDetail(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages;

      //获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );

      //创建店铺信息得对象
      this.shop = new Shop( res.result.shopInfo);

      //保存商品的详情数据

      this.detailInfo =  res.result.detailInfo;

      //获取参数的信息

      this.paramInfo = new GoodsParam( res.result.itemParams.info, data);
    });
  },
  
};
</script>


<style scoped>
</style>