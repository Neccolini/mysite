<template>
	<div>
		<v-card flat >
			<v-row justify="center">
			<div v-if="'pic' in post">
			<v-img max-height="300px" max-width="300px" :src="post.pic.url" />
			</div>
			</v-row>
			<div class="text--black mt-3 ">
			<v-card-title class="display-1">{{ post.title }}</v-card-title>
			<v-card-text class="title">
				<div v-html="this.post.body"></div>
			</v-card-text>
			</div>
		</v-card>
	</div>
</template>

<script>
import axios from "axios"
export default {
	name: "ArticleDetail",
	data(){
		return {
			post:{},
		}
	},
	computed:{
	},
		async mounted(){
			const response = await axios.get(
				"https://neccolini-blog.microcms.io/api/v1/posts/" + this.$route.params.id,
				{
					headers: {"X-API-KEY": process.env.VUE_APP_X_API_KEY}
				}
			);
			this.post = response.data;
		}
	}

</script>