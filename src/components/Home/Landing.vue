<template>
	<div
		:class="{
			'px-16 pt-10': $vuetify.breakpoint.mdAndUp,
			'px-2 tw-w-[100vw]': $vuetify.breakpoint.smAndDown
		}"
	>
		<SearchButton v-if="$vuetify.breakpoint.smAndDown" class="tw-mb-4" expanded />
		<div class="tw-flex">
			<LandingCardAction
				:class="{
					'': $vuetify.breakpoint.mdAndUp,
					'tw-w-[50%]': $vuetify.breakpoint.xsOnly
				}"
				class="tw-w-[50%] tw-flex-1"
			>
				<template #title> Lavora con precisione. </template>
				<p>La soluzione perfetta per chi non ha tempo da perdere: acquista i tuoi attrezzi online</p>
				<template #action>
					<Button :medium="$vuetify.breakpoint.xsOnly" @click="$router.push('/categories')">
						Vai allo shop
					</Button>
				</template>
			</LandingCardAction>
			<div class="tw-flex-[2]">
				<v-img class="" src="@/assets/BigClaw.png" width="637"></v-img>
			</div>
		</div>

		<v-lazy v-if="topProducts.length && $vuetify.breakpoint.mdAndUp">
			<TopSellerProducts :products="topProducts" class="mt-16" label="Top Seller" url="/shop?top_seller=true" />
		</v-lazy>
		<v-divider class="my-4" />
		<v-lazy v-if="promoProducts.length && $vuetify.breakpoint.mdAndUp">
			<TopSellerProducts :products="promoProducts" class="mt-16" label="Promo" url="/shop?promo=true" />
		</v-lazy>
		<v-lazy class="mt-16">
			<KennefCharacteristics />
		</v-lazy>

		<v-lazy>
			<Brands />
		</v-lazy>
	</div>
</template>

<script lang="ts" setup>
import Brands from '@/components/Home/Brands.vue'
import KennefCharacteristics from '@/components/Home/KennefCharacteristics.vue'
import Button from '@/components/kennef/Button.vue'
import LandingCardAction from '@/components/LandingCardAction.vue'
import { onMounted, ref } from 'vue'
import TopSellerProducts from '@/components/Home/TopSellerProducts.vue'
import { Product } from '@/types/product'
import { productsStore } from '@/store/products'
import SearchButton from '@/components/kennef/SearchButton.vue'
import { useFooter } from '@/store/footer'

const topProducts = ref<Product[]>([])
const promoProducts = ref<Product[]>([])
const footerStore = useFooter()
productsStore()
	.getProducts({
		'searchCriteria[pageSize]': 3,
		'searchCriteria[sortOrders][0][field]': 'visibility',
		'searchCriteria[filter_groups][0][filters][0][field]': 'top_seller',
		'searchCriteria[filter_groups][0][filters][0][value]': '1',
		'searchCriteria[filter_groups][0][filters][0][conditionType]': 'eq'
	})
	.then((res: Product[]) => {
		topProducts.value = res
	})

productsStore()
	.getProducts({
		'searchCriteria[pageSize]': 3,
		'searchCriteria[filter_groups][0][filters][0][field]': 'special_price',
		'searchCriteria[filter_groups][0][filters][0][value]': '0',
		'searchCriteria[filter_groups][0][filters][0][conditionType]': 'gt'
	})
	.then((res: Product[]) => {
		promoProducts.value = res
	})

onMounted(() => footerStore.setShow(true))
</script>
