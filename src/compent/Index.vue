<template>
	<div>
		<p>商品信息</p>
		<a-form 
			@submit="handleSubmit" 
			:autoFormCreate="(form)=>{this.form = form}"
		>
			<a-form-item
				label='商品名称'
				:labelCol="{ span: 6 }"
				:wrapperCol="{ span: 15 }"
				fieldDecoratorId="name"
				:fieldDecoratorOptions="{rules: [{ required: true, message: '请输入商品名称' }]}"
			>
				<a-input placeholder="商品名称"/>
			</a-form-item>
			<a-form-item
				label='原价'
				:labelCol="{ span: 6 }"
				:wrapperCol="{ span: 15 }"
				fieldDecoratorId="price"
				:fieldDecoratorOptions="{rules: [{ required: true, message: '请输入原价' }]}"
			>
				<a-input placeholder="原价"/>
			</a-form-item>
			<a-form-item
				label='售价'
				:labelCol="{ span: 6 }"
				:wrapperCol="{ span: 15 }"
				fieldDecoratorId="sale"
				:fieldDecoratorOptions="{rules: [{ required: true, message: '请输入零售价' }]}"
			>
				<a-input placeholder="售价"/>
			</a-form-item>
			<a-form-item
				label='描述'
				:labelCol="{ span: 6 }"
				:wrapperCol="{ span: 15 }"
				fieldDecoratorId="detail"
				:fieldDecoratorOptions="{rules: [{ required: true, message: '请输入商品描述' }]}"
			>
				<a-input placeholder="商品描述"/>
			</a-form-item>
		
			<div class="uploader-box">
				<a-upload
					name="avatar"
    				listType="picture-card"
    				class="uploader"
    				:showUploadList="false"
    				action="/"
    				:beforeUpload="beforeUpload"
    				@change="handleChange"
				>
					<img v-if="imageUrl" :src="imageUrl" alt="" />
					<div v-else>
						<a-icon :type="loading ? 'loading' : 'plus'" />
						<div class="ant-upload-text">Upload</div>
					</div>
				</a-upload>
			</div>
			<a-button type="primary" htmlType='submit'>提交</a-button>
		</a-form>
	</div>
</template>
<script>
function getBase64 (img, callback) {
	const reader = new FileReader()
	reader.addEventListener('load', () => callback(reader.result))
	reader.readAsDataURL(img)
}
export default {
	data(){
		return {
			imageUrl:'',
			loading:false
		}
	},
	methods:{
		handleSubmit (e) {
			e.preventDefault()
			this.form.validateFields((err, values) => {
				if (!err) {
					console.log(values)
				}
			})
		},
		beforeUpload(){

		},
		handleChange(info){
			if (info.file.status === 'uploading') {
				this.loading = true
				return
      		}
			if (info.file.status === 'done') {
				getBase64(info.file.originFileObj, (imageUrl) => {
					this.imageUrl = imageUrl
					this.loading = false
				})
			}
		}
	}
}
</script>
<style scoped>
    p,
	.uploader-box{
        margin-top: 20px;
    }
</style>