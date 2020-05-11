<template>

  <div class="wrapper" ref="aaaa">
  <ul class="content">
    <li>hah1</li>
    <li>hah2</li>
    <li>hah3</li>
    <li>hah4</li>
    <li>hah5</li>
    <li>hah6</li>
    <li>hah7</li>
    <li>hah8</li>
    <li>hah9</li>
    <li>hah10</li>
    <li>hah11</li>
    <li>hah12</li>
    <li>hah13</li>
    <li>hah14</li>
    <li>hah15</li>
    <li>hah16</li>
    <li>hah17</li>
    <li>hah18</li>
    <li>hah19</li>
    <li>hah20</li>
    <li>hah21</li>
    <li>hah22</li>
    <li>hah23</li>
    <li>hah24</li>
    <li>hah25</li>
    <li>hah26</li>
    <li>hah27</li>
    <li>hah28</li>
    <li>hah29</li>
    <li>hah30</li>
    <li>hah31</li>
    <li>hah32</li>
    <li>hah33</li>
    <li>hah34</li>
    <li>hah35</li>
    <li>hah36</li>
    <li>hah37</li>
    <li>hah38</li>
    <li>hah39</li>
    <li>hah40</li>
    <li>hah41</li>
    <li>hah42</li>
    <li>hah43</li>
    <li>hah44</li>
    <li>hah45</li>
    <li>hah46</li>
    <li>hah47</li>
    <li>hah48</li>
    <li>hah49</li>
    <li>hah50</li>
    <li>hah51</li>
    <li>hah52</li>
    <li>hah53</li>
    <li>hah54</li>
    <li>hah55</li>
    <li>hah56</li>
    <li>hah57</li>
    <li>hah58</li>
    <li>hah59</li>
    <li>hah60</li>
    <li>hah61</li>
    <li>hah62</li>
    <li>hah63</li>
    <li>hah64</li>
    <li>hah65</li>
    <li>hah66</li>
    <li>hah67</li>
    <li>hah68</li>
    <li>hah69</li>
    <li>hah70</li>
    <li>hah71</li>
    <li>hah72</li>
    <li>hah73</li>
    <li>hah74</li>
    <li>hah75</li>
    <li>hah76</li>
    <li>hah77</li>
    <li>hah78</li>
    <li>hah79</li>
    <li>hah80</li>
    <li>hah81</li>
    <li>hah82</li>
    <li>hah83</li>
    <li>hah84</li>
    <li>hah85</li>
    <li>hah86</li>
    <li>hah87</li>
    <li>hah88</li>
    <li>hah89</li>
    <li>hah90</li>
    <li>hah91</li>
    <li>hah92</li>
    <li>hah93</li>
    <li>hah94</li>
    <li>hah95</li>
    <li>hah96</li>
    <li>hah97</li>
    <li>hah98</li>
    <li>hah99</li>
    <li>hah100</li>
  </ul> 
   <back-top @click.native ="backClick"/>
  </div>
  
</template>


<script>
import BScroll from 'better-scroll'
import backTop from "../../components/common/backtop/backTop"
export default {
  data(){
    return {
      scroll: null
    }
  },
  components:{
    backTop
  },
  methods:{
    backClick (){
      // scrollTo(0,0)
      this.scroll.scrollTo(0 , 0)
      console.log(scroll);
      
     
       
    }
  },
  mounted() {
     this.scroll = new BScroll (document.querySelector('.wrapper'),{
      //  probeType: 3,
      //  pullUpLoad: true
     })


    //  this.scroll.on('scroll', (position) => {
    //    console.log(position);
       
    //  })
    //  this.scroll.on('pullingUp' , () => {
    //    console.log('上啦');
       
    //  })
}
}
</script>



<style>
  .wrapper{
      height:150px;
      background-color: skyblue;
     
  }

</style>
