<template>
	<div>
		<PageTitle title="Posts"/>
			<v-col v-for="post in posts" :key="post.id" class="mt-5">
				<v-row justify="center">
					{{post.day}}
				</v-row>
				<div class="mt-3">
				<router-link :to="{name:'blog-post', params:{id:post.id}}">
						<v-row justify="center">
						<v-title class="headline">{{post.title}}</v-title>
						</v-row>
						</router-link>
						<div v-if="'pic' in post">
						<v-container>
							<v-row class="home-about__contents">
								<v-col md="5" class="home-about__contents-img">
									<v-img :src="post.pic.url" class="img-fluid" max-width="200px" max-height="200px" />
								</v-col>
								<v-col md="5" class="home-about__contents-text">
									<p>{{post.summary}}</p>
								</v-col>
							</v-row>
						</v-container>
						</div>
						<div v-else style="text-align:center">
							<v-container>
								<v-row class="home-about__contents" jusitify="center" align-content="center">
									<v-col class="home-about__contents-text">
										<p>{{post.summary}}</p>
									</v-col>
								</v-row>
							</v-container>
						</div>
				</div>
			</v-col>
	</div>
	
</template>
<script>
import PageTitle from "./PageTitle"
import axios from "axios"

export default {
	data(){
		return {
			posts:[],
			year_day:[],
		}
	},
	async mounted(){
		const response = await axios.get(
			"https://neccolini-blog.microcms.io/api/v1/posts",
			{
				headers: { "X-API-KEY": process.env.VUE_APP_X_API_KEY}
			}
		);
		this.posts = response.data.contents;
		for(let post of this.posts){
			const date = new Date(post.time);
			post["day"] = date.toDateString();
		}
	},
	components:{
		PageTitle
	},
}
</script>

<style scoped>
.summary{
	white-space: pre-wrap;
}
a{
    text-decoration:none;
}
</style>