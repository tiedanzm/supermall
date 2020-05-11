<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
      msg: "哈哈哈"
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    //  this.scroll.scrollTo(0, 0)
    this.scroll.on("scroll", position => {
      //  console.log(position);
      this.$emit("scroll", position);
    });
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    //    scrollTo (x, y, time= 300) {
    //        this.scroll.scrollTo(x, y, time)
    //    },
    //      finishPullUp() {
    //        this.scroll.finishPullUp()
    //      },
    //      refresh() {
    //        this.scroll && this.scroll.refresh()
    //      }

    // }
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      console.log("--1111--");
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    }
  }
};
</script>