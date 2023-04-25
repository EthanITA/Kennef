<template>
	<div>
		<!-- <v-parallax dark src="../assets/categoriesBackground.png"> -->
		<v-row>
			<v-col align-self="center" cols="12" lg="6" offset-md="1" xl="6">
				<p class="text-h6 white--text font-weight-regular ml-1 mt-5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
					Sint necessitatibus maiores doloremque aut nemo accusantium <br />
					excepturi laboriosam expedita dolores id.
				</p>
				<v-btn class="rounded-0" color="primary" depressed x-large> Vai allo shop</v-btn>
			</v-col>
		</v-row>
		<!-- </v-parallax> -->
		<v-container fluid>
			<h3 class="text-center text-h4 font-weight-regular">Categories</h3>
			<v-row class="py-8" justify="center" no-gutters>
				<v-col
					v-for="category in categories"
					:key="category.name"
					class="d-flex"
					cols="12"
					lg="2"
					md="2"
					xl="2"
				>
					<v-hover v-slot="{ hover }">
						<!-- OPACITY TRANSITION ON HOVER IMG ON FRONT, BACK LIGHT GREY -->
						<!-- <v-img :src="category.img" width="100"> -->
						<v-expand-transition>
							<div
								v-if="hover"
								class="d-flex transition-fast-in-fast-out primary v-card--reveal text-subtitle-1 white--text"
								style="height: 100%"
							>
								{{ category.name }}
							</div>
						</v-expand-transition>
						<!-- </v-img> -->
					</v-hover>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'VCategories',
	data() {
		return {
			categories: [
				{
					name: 'Abbigliamento'
					// img: require("../assets/categories/Abbigliamento.png")
				},
				{
					name: 'Automotive'
					// img: require("../assets/categories/Automotive.png")
				},
				{
					name: 'Metallo'
					// img: require("../assets/categories/Metallo.png")
				},
				{
					name: 'Utensili'
					// img: require("../assets/categories/Utensili.png")
				}
			]
		}
	}
}
</script>

<style scoped>
.v-card--reveal {
	align-items: center;
	bottom: 0;
	transform: scale(1.2);
	justify-content: center;
	position: absolute;
	width: 100%;
	z-index: 1;
}
</style>
