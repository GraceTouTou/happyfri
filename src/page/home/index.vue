<template>
  	<div class="home_container">
        <p> {{ msg }} </p>
        <itemcontainer father-component="home"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

export default {
  name: 'home',
  data () {
    return {
      msg: '首页'
    }
  },
  components: {
    itemcontainer
  },
  created () {
    // 进入题目页面，开始计时
    // this.$store.commit('REMBER_TIME');
  }
}
</script>