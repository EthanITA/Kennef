<template>
	<v-container fluid>
		<h3 class="text-center text-h4 font-weight-regular">Categories</h3>
		<v-row class="py-8" justify="center" no-gutters>
			<v-col v-for="category in categories" :key="category.name" class="d-flex" cols="12" lg="2" md="2" xl="2">
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
</template>

<script lang="ts" setup>
const categories = [
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
</script>
