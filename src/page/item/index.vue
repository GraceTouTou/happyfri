<template>
  	<div class="item_container">
        <p> {{ msg }} </p>
        <itemcontainer father-component="item"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

export default {
    name: 'item',
    data () {
        return {
            msg: '次页'
        }
    },
  	components: {
  		itemcontainer
  	},
    created(){
        
    }
}
</script>