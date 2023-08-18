<template>
	<div class="ma-6">
		<v-row dense>
			<v-col align-self="center" class="shrink flex-col gap-1">
				<v-img :alt="product.name" :src="medias?.[0]" class="tw-max-h-[150px]" height="150" width="150" />

				<div class="d-flex align-center pa-2 lighten-4 grey">
					<v-btn
						:disabled="product.qty <= 1"
						elevation="0"
						fab
						tile
						x-small
						@click="updateItem(product.item_id, product.qty - 1)"
					>
						<v-icon>mdi-minus</v-icon>
					</v-btn>
					<v-spacer />
					<p class="ma-0 mx-4">{{ product.qty }}</p>
					<v-spacer />
					<v-btn
						class="ml-auto"
						elevation="0"
						fab
						tile
						x-small
						@click="updateItem(product.item_id, product.qty + 1)"
					>
						<v-icon> mdi-plus</v-icon>
					</v-btn>
				</div>
			</v-col>
			<v-col class="ml-4">
				<div>
					<p class="text-h5 my-1 font-weight-semibold">{{ product.name }}</p>
					<p class="grey--text text-secondary text-uppercase text-body-2 font-weight-regular">
						{{ product.sku }}
					</p>
				</div>
			</v-col>
			<v-col class="mt-auto">
				<div class="d-flex">
					<v-spacer />
					<Price :price="product.price * product.qty" class="text-h6" />
				</div>
			</v-col>
		</v-row>
		<div class="d-flex">
			<div v-ripple class="d-flex pr-2 py-1 mt-4" style="cursor: pointer">
				<v-icon color="primary" left>mdi-trash-can-outline</v-icon>
				<p class="ma-0" style="user-select: none" @click="removeItem(product.item_id)">Rimuovi</p>
			</div>
			<v-spacer />
		</div>
	</div>
</template>

<script lang="ts" setup>
import Price from '@/components/kennef/Price.vue'
import { CartItem } from '@/types/cart'
import { useCart } from '@/store/cart'

const { removeItem, updateItem } = useCart()

const props = defineProps<{
	product: CartItem
	medias?: string[]
}>()
</script>

<style scoped>
button.v-btn ::v-deep {
	background-color: rgba(55, 105, 117, 0.5) !important;
}

button.v-btn:disabled ::v-deep {
	background-color: #9e9e9e !important;
}
</style>
