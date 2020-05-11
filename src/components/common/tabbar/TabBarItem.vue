<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>



<script>
export default {
    props:{
         path:String,
         activeColor:{
             type:String,
             default:'red'
         }
    },
    data(){
        return{
            // isActive: false,
           
        }
    },
    computed:{
        isActive(){
             return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
       
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)

            // console.log('itemClick');
          
        }
    }
}
</script>>


<style scoped>
.tab-bar {
  display: flex;
  background-color:rgb(252, 251, 250);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.05);
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img {
  margin-top: 3px;
  width: 20px;

  height: 20px;
}
/* .active{
    color: red;
} */
</style>
