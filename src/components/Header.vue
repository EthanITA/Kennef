<template>
	<v-app-bar app class="px-16" color="white" dark elevation="0" height="100">
		<div class="d-flex align-center">
			<v-img
				alt="Kennef Logotype"
				class="mt-3 hidden-sm-and-down"
				contain
				src="../assets/logotype.svg"
				width="150"
			/>
		</div>

		<div class="btns-l ml-16">
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
			<v-btn color="secondary" text>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
		</div>

		<v-spacer />

		<div class="btns-r">
			<v-btn color="secondary" text>
				<v-icon>mdi-account-outline</v-icon>
			</v-btn>

			<v-btn color="secondary" text>
				<v-icon>mdi-shopping-outline</v-icon>
			</v-btn>
		</div>
	</v-app-bar>
</template>

<script lang="ts" setup>
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
