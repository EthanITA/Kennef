<template>
	<div @click="$router.push(`/product/${product.id}`)">
		<v-hover v-slot="{ hover }">
			<HoverScale
				:scale-factor="1.015"
				:transition="0.1"
				background-color="rgba(134, 134, 134, 0.2)"
				class="pa-2 tw-h-full"
				style="cursor: pointer"
			>
				<v-img
					:alt="product.name"
					:aspect-ratio="0.8"
					:src="store.getImgUrl(product)[0]"
					:style="{ 'display: none': !store.getImgUrl(product).length }"
					style="background-color: #f6f6f6"
				>
					<v-container>
						<v-row>
							<ProductBadge v-if="!product.stock?.is_in_stock" class="blue-grey"> sold out </ProductBadge>
							<ProductBadge v-else-if="product.is_promo" class="primary"> offerta </ProductBadge>
						</v-row>
					</v-container>
				</v-img>
				<p class="font-weight-medium text-h6" style="width: 70%">
					<span>{{ product.name || '[-]' }}</span>
				</p>
				<v-container>
					<v-row>
						<p class="font-weight-semibold">{{ product.sku || '-' }}</p>
						<v-spacer />
						<Price
							v-if="product.promo_price"
							:class="{ 'primary--text': hover }"
							:price="product.promo_price"
						/>
						<Price v-else-if="product.price" :class="{ 'primary--text': hover }" :price="product.price" />
					</v-row>
				</v-container>
			</HoverScale>
		</v-hover>
	</div>
</template>

<script lang="ts" setup>
import { Product } from '@/types/product'
import HoverScale from '@/components/Wrappers/HoverScale.vue'
import ProductBadge from '@/components/Shop/ProductBadge.vue'
import Price from '@/components/kennef/Price.vue'
import { productsStore } from '@/store/products'

const store = productsStore()

const props = defineProps<{
	product: Product
}>()
</script>
