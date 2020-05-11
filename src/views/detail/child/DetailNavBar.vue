<template>
    <div id="detail">
   <nav-bar>
          <div slot="left" @click="backClick">
              <img src="../../../assets/img/common/back.svg" alt="">
          </div>
          <div slot="center"  class="title">
               <div  v-for="(item, index) in titles" :key="index" class="title-item" :class="{title1: currentIndex === index}" @click="titleClick(index)"> 
            <span> {{item}}</span>
               </div>
          </div>
          </nav-bar> 
    </div>
</template>

<script>
import NavBar from "../../../components/common/navigation/NavBar";
export default {
    components:{
         NavBar
    },
      data(){
          return{
           
              titles:['商品', '参数', '评论',' 推荐'],
              currentIndex: 0,
        

          }
     },
     methods:{
               titleClick(index) {
                  this.currentIndex = index
               },
               backClick(){
                   this.$router.back()
               }
     }
}
</script>
<style scoped>
  .title{
      display: flex;
      font-size: 18px;
  }
  .title-item{
      flex:1;
  }
  .title1{
    color: pink;
   

}
.title1 span {
     border-bottom: 3px solid pink;
     padding: 5px;
}
</style>