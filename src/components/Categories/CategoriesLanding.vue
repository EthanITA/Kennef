<template>
	<div>
		<LandingCardAction
			:style="{
				'background-image': 'url(' + require('@/assets/categoriesBackground.png') + ')'
			}"
			class="tw-p-4 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-bg-fixed tw-h-[50vh] tw-w-screen"
		>
			<template #title><p class="white--text">I nostri prodotti</p></template>
			<p class="white--text">
				La soluzione perfetta per chi non ha tempo da perdere: acquista i tuoi attrezzi online
			</p>
			<template #action>
				<Button @click="$router.push('/shop?top_seller=true')">scopri di piu</Button>
			</template>
		</LandingCardAction>
	</div>
</template>

<script lang="ts" setup>
import LandingCardAction from '@/components/LandingCardAction.vue'
import Button from '@/components/kennef/Button.vue'
</script>
