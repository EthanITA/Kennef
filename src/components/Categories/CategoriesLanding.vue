<template>
	<div class="secondary tw-mx-auto tw-ml-[calc(-50vw+50%)] tw-mr-[calc(-50vw+50%)]">
		<LandingCardAction
			:class="{
				'tw-h-[30vh]': $vuetify.breakpoint.smAndDown,
				'tw-h-[40vh]': $vuetify.breakpoint.mdAndUp
			}"
			class="tw-p-4"
		>
			<template #title><p class="white--text">I nostri prodotti</p></template>
			<p class="white--text">
				La soluzione perfetta per chi non ha tempo da perdere. Acquista i tuoi attrezzi online!
			</p>
			<template #action>
				<Button @click="$router.push('/shop')">scopri di piu</Button>
			</template>
		</LandingCardAction>
	</div>
</template>

<script lang="ts" setup>
import LandingCardAction from '@/components/LandingCardAction.vue'
import Button from '@/components/kennef/Button.vue'
</script>
