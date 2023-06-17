<template>
	<v-container>
		<v-row align="center">
			<v-col>
				<p class="text-h5 secondary--text font-weight-semibold mt-4">I miei ordini</p>
			</v-col>
			<v-spacer />
			<v-col>
				<Select :items="filters" class="rounded-0" hide-details label="Filtra"></Select>
			</v-col>
		</v-row>
		<v-divider class="my-2" />
		<div v-for="i in 5" :key="i">
			<Order />
			<v-divider class="mb-4 mt-8" />
		</div>
	</v-container>
</template>

<script setup>
import Select from '@/components/kennef/Select.vue'
import Order from '@/components/Account/Order.vue'

const filters = [
	{
		text: 'Ultime 24 ore',
		value: 1
	},
	{
		text: 'Ultimi 3 giorni',
		value: 3
	},
	{
		text: 'Ultimi 7 giorni',
		value: 7
	},
	{
		text: 'Ultimi 30 giorni',
		value: 30
	}
]
</script>
