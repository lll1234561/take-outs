<template>
    <div class="fillcontain biamge">
        <head-top></head-top>
        <p class="explain_text">外卖后台管理系统</p>
        <p class="explain_text">第一次登录的用户自动注册成为管理员</p>
        <p class="explain_text">管理员可以添加，修改商家信息</p>
    </div>
</template>

<script>
	import headTop from '../components/headTop'
    export default {
    	components: {
    		headTop,
    	},
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.biamge{
		background-image: url(../assets/img/logo.png);
	}.explain_text{
		margin-top: 20px;
		text-align: center;
		font-size: 30px;
		color: #333;
		
	}
</style>
