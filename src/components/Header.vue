<template>
	<v-app-bar app class="px-4" color="white" dark elevation="0" height="100">
		<a class="d-flex align-center" @click="$router.push('/')">
			<v-img
				alt="Kennef Logotype"
				class="mt-3 hidden-sm-and-down"
				contain
				src="../assets/logotype.svg"
				width="150"
			/>
		</a>

		<div class="d-flex ml-4 flex-grow-1 align-center">
			<v-btn
				v-for="link in links"
				:key="link.title"
				class="mr-2"
				color="secondary"
				text
				@click="shopPanel = !shopPanel"
			>
				<span>{{ link.title }}</span>
			</v-btn>
			<SearchButton />
		</div>

		<div class="btns-r ml-12">
			<v-btn color="secondary" text x-small>
				<v-icon>mdi-account-outline</v-icon>
			</v-btn>

			<v-btn color="secondary" text x-small>
				<v-icon>mdi-shopping-outline</v-icon>
			</v-btn>
		</div>
	</v-app-bar>
</template>

<script lang="ts" setup>
import SearchButton from '@/components/kennef/SearchButton.vue'

const shopPanel = false
const links = [
	{
		link: '#',
		title: 'Shop'
	},
	{
		link: '#',
		title: 'Chi Siamo'
	},
	{
		link: '#',
		title: 'COntattaci'
	}
]
</script>

<style scoped></style>
