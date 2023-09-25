<template>
	<v-container class="mt-auto">
		<v-row>
			<v-col class="text-h4"> {{ label }} </v-col>
			<v-col class="text-right">
				<Button medium outlined @click="$router.push(url)"
					><span>S</span><span class="text-lowercase">copri di più</span></Button
				>
			</v-col>
		</v-row>
		<v-row>
			<GroupedProductsCard :products="products" />
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
import Button from '@/components/kennef/Button.vue'
import GroupedProductsCard from '@/components/Shop/GroupedProductsCard.vue'
import { Product } from '@/types/product'

const props = defineProps<{
	products: Product[]
	label: string
	url: string
}>()
</script>

<style scoped></style>
