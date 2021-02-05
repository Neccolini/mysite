<template>
	<div>
		<PageTitle title="Works"/>
		<section id="works" class="about-wrapper">
			<v-container fluid>
				<div v-if="works.length===0" class="display-1">Coming soon...</div>
				<v-row justify="center" align="center" fluid>
					<table class="headline">
						<tbody>
							<tr v-for="(work, index) in works" :key="index">
								<div v-if="work.image.url">
									<v-img :src="work.image.url" max-height="150" max-width="200" />
									<td>{{ work.value }}</td>
								</div>
								<div v-else>
									<td>{{ work.value}}</td>
								</div>
							</tr>
						</tbody>
					</table>
				</v-row>
			</v-container>
		</section>

  </div>
</template>
<script>
import PageTitle from "./PageTitle"
export default {
	components:{
		PageTitle
	},
	data(){
		return{
			works:[]
		}
	}
}
</script>