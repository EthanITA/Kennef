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
				<div class="tw-h-full tw-flex tw-flex-col">
					<v-img
						:alt="product.name"
						:aspect-ratio="0.8"
						:src="store.getImgUrl(product)[0]"
						:style="{ 'display: none': !store.getImgUrl(product).length }"
						contain
						height="300px"
						max-height="300px"
						style="background-color: white"
					>
						<v-container>
							<v-row>
								<ProductBadge v-if="!product.stock?.is_in_stock" class="blue-grey">
									sold out
								</ProductBadge>
								<ProductBadge v-else-if="product.is_promo" class="primary"> offerta </ProductBadge>
							</v-row>
						</v-container>
					</v-img>
					<p class="font-weight-medium text-h6" style="">
						<span>{{ product.name || '[-]' }}</span>
					</p>
					<p class="font-weight-semibold">{{ product.sku || '-' }}</p>
					<div class="tw-grow tw-flex">
						<Price
							v-if="product.promo_price || product.price"
							:class="{ 'primary--text': hover }"
							:price="product.price"
							:promo_price="product.promo_price"
							class="ml-auto mt-auto"
						/>
					</div>
				</div>
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
