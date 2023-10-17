<template>
	<div class="tw-flex tw-gap-2 tw-whitespace-nowrap">
		<p
			v-if="promo_price || promo_price === 0"
			:class="{ 'text-decoration-underline': !noUnderline }"
			class="my-0 font-weight-semibold"
		>
			{{ promo_price | currency }}
		</p>
		<p
			:class="{
				'text-decoration-underline': !(promo_price || promo_price === 0) && !noUnderline,
				'text-decoration-line-through': promo_price || promo_price === 0
			}"
			class="my-0 font-weight-semibold"
		>
			{{ price | currency }}
		</p>
	</div>
</template>
<script lang="ts" setup>
const props = defineProps<{
	price: number
	noUnderline?: boolean
	promo_price?: number
}>()
</script>

<style lang="sass" scoped>
@import '@/assets/variables.sass'
.text-decoration-underline
  text-underline-offset: 0.5rem
</style>
