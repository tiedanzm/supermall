<template>

    <div class="tab-bar">
       <slot></slot>
    </div>
 
</template>

<style scoped>


  .tab-bar {
    display: flex;
    background-color:#f6f6f3;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -3px 1px  rgba(100, 100, 100, .05);

  }
  

</style>



<script>
// export default {
//   name:"TabBar"
// }
</script>