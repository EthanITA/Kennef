<template>
	<v-container>
		<v-row align="center">
			<v-col>
				<p class="text-h5 secondary--text font-weight-semibold mt-4">I miei ordini</p>
			</v-col>
			<v-spacer />
			<v-col>
				<v-select
					:items="filters"
					class="rounded-0"
					color="secondary"
					dense
					filters-text="text"
					filters-value="value"
					hide-details
					label="Filtra"
					outlined
					return-object
					single-line
				></v-select>
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
import Order from '@/components/Account/Order.vue'
import { ref } from 'vue'

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
const selectedFilter = ref(filters[0].text)
</script>
