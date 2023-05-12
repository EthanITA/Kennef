<template>
	<div @click="$router.push(`/product/${product.id}`)">
		<v-hover v-slot="{ hover }">
			<HoverScale
				:scale-factor="1.015"
				:transition="0.1"
				background-color="rgba(134, 134, 134, 0.2)"
				class="pa-2"
				style="cursor: pointer"
			>
				<v-img
					:alt="product.name"
					:aspect-ratio="0.8"
					:src="product.image"
					:style="{ 'display: none': !product.image }"
					style="background-color: #f6f6f6"
				>
					<v-container>
						<v-row>
							<ProductBadge v-if="product.soldOut" class="blue-grey"> sold out </ProductBadge>
							<ProductBadge v-else-if="product.hasOffer" class="primary"> offerta </ProductBadge>
						</v-row>
					</v-container>
				</v-img>
				<p class="font-weight-medium text-h6" style="width: 70%">
					<span>{{ product.name || '[-]' }}</span>
				</p>
				<v-container>
					<v-row>
						<p class="font-weight-semibold">{{ product.category || '-' }}</p>
						<v-spacer />
						<p
							v-if="product.price"
							:class="{ 'primary--text': hover }"
							class="font-weight-semibold text-decoration-underline"
						>
							{{ product.price | currency }}
						</p>
					</v-row>
				</v-container>
			</HoverScale>
		</v-hover>
	</div>
</template>

<script lang="ts" setup>
import ProductModel from '@/models/Product'
import HoverScale from '@/components/Wrappers/HoverScale.vue'
import ProductBadge from '@/components/Shop/ProductBadge.vue'

const props = defineProps<{
	product: ProductModel
}>()
</script>

<style lang="sass" scoped>
@import '@/assets/variables.sass'
.text-decoration-underline
	text-underline-offset: 0.5rem
</style>
