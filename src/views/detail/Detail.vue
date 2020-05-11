<template>
    <div id="detail">
     
        <detail-nav-bar/>
        <detail-swiper :top-images="topImages"/>
    </div>
</template>  


<script>

import  DetailNavBar from "./child/DetailNavBar"
import {getDetail} from "../../network/detail"
import DetailSwiper from "./child/DetailSwiper"
export default {
    name:"Detail",
     data(){
          return{
              iid:null,
         
              topImages:[]

          }
     },
     components:{
       
         DetailNavBar,
          DetailSwiper
     },

     created(){
         this.iid = this.$route.params.iid
    
         
         getDetail(this.iid).then( res => {
              this.topImages = res.result.itemInfo.topImages
         })
     }
}
</script>


<style scoped>
 
</style>