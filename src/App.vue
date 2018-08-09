<template>
	<div id="app">
		<a-menu
			v-model="current"
    		mode="horizontal"
		>
			<a-menu-item key="index">
				<router-link to="/">首页</router-link>
			</a-menu-item>
		</a-menu>
		<a-row>
            <a-col :span="12" :offset="6">
				<router-view></router-view>
			</a-col>
    	</a-row>
	</div>
</template>
<script>
export default {
	data () {
    	return {
    		current: ['index'],
    	}
	}
}
</script>