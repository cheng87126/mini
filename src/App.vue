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
		<router-view></router-view>
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