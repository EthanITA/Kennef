<template>
	<v-hover v-slot="{ hover }">
		<HoverScale :scale-factor="1.01" :transition="0.1" background-color="rgba(134, 134, 134, 0.05)" class="pa-2">
			<v-img
				:alt="product.name"
				:aspect-ratio="0.8"
				:src="props.product.image"
				:style="{ 'display: none': !props.product.image }"
				class="grey"
			>
				<v-container>
					<v-row>
						<ProductBadge v-if="props.product.soldOut" class="blue-grey"> sold out </ProductBadge>
						<ProductBadge v-else-if="props.product.hasOffer" class="primary"> offerta </ProductBadge>
					</v-row>
				</v-container>
			</v-img>
			<p class="font-weight-medium text-h6">
				<span>{{ product.name || '[-]' }}</span>
			</p>
			<v-container>
				<v-row>
					<p class="font-weight-semibold">{{ props.product.category || '-' }}</p>
					<v-spacer />
					<p
						v-if="props.product.price"
						:class="{ 'primary--text': hover }"
						class="font-weight-semibold text-decoration-underline"
					>
						{{ props.product.price | currency }}
					</p>
				</v-row>
			</v-container>
		</HoverScale>
	</v-hover>
</template>

<script lang="ts" setup>
import Product from '@/models/Product'
import product from '@/models/Product'
import HoverScale from '@/components/Wrappers/HoverScale.vue'
import ProductBadge from '@/components/Shop/ProductBadge.vue'

const props = defineProps<{
	product: Product
}>()
</script>

<style lang="sass" scoped>
@import '@/assets/variables.sass'
.text-decoration-underline
	text-underline-offset: 0.5rem
</style>
