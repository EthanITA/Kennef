<template>
	<v-container>
		<v-row>
			<v-col class="text-h4"> Top Seller</v-col>
			<v-col class="text-right">
				<Button medium outlined><span>S</span><span class="text-lowercase">copri di più</span></Button>
			</v-col>
		</v-row>
		<v-row>
			<GroupedProductsCard :products="products" />
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
import Product from '@/models/Product'
import Button from '@/components/kennef/Button.vue'
import GroupedProductsCard from '@/components/Shop/GroupedProductsCard.vue'

const props = defineProps<{
	products: Product[]
}>()
</script>

<style scoped></style>
