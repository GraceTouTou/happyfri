<template>
  	<section>
    	<header class="top_tips">
    		<span class="num_tip" v-if="fatherComponent == 'home'">{{week}}</span>
    		<span class="num_tip" v-if="fatherComponent == 'item'">题目{{questionNum}}</span>
    	</header>
    	<div v-if="fatherComponent == 'home'" >
    		<!-- <div class="home_logo item_container_style"></div> -->
    		<router-link to="item"></router-link>
    	</div>
    	<div v-if="fatherComponent == 'item'" >
            <header> {{ questionNum }} </header>
    		<!-- <div class="item_back item_container_style">
    			<div class="item_list_container" v-if="itemDetail.length > 0">
    				<header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
    				<ul>
    					<li  v-for="(item, index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)" class="item_list">
    						<span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
    						<span class="option_detail">{{item.answer_name}}</span>
    					</li>
    				</ul>
    			</div>
    		</div>
    		<span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
    		<span class="submit_item button_style" v-else @click="submitAnswer"></span> -->
    	</div>
  	</section>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'itemcontainer',
  data () {
    return {
      itemId: null, // 题目ID
      choosedNum: null, // 选中答案索引
      choosedId: null // 选中答案id
    }
  },
  props: ['fatherComponent'],
  computed: mapState([
    'questionNum', // 第几题
    'week', // 第几周
    'questionDetail' // 题目详情
  ]),
  created () {
    // 初始化信息
    // this.initializeData();
    // document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)';
  }
}
</script>

<style lang="less">

</style>
