<template>
	<div id="app">
		<header>
			<a-menu
				v-model="current"
    			mode="horizontal"
			>
				<a-menu-item key="index">
					<router-link to="/">首页</router-link>
				</a-menu-item>
				<a-menu-item key="order">
					<router-link to="/order">订单管理</router-link>
				</a-menu-item>
			</a-menu>
		</header>
		<main>
			<a-row>
				<a-col :span="12" :offset="6">
					<router-view></router-view>
				</a-col>
    		</a-row>
		</main>
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
<style scoped>
	header{
		margin-bottom: 20px;
	}
</style>
