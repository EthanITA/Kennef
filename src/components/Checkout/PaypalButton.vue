<template>
	<Button class="darken-3" color="yellow">
		<div class="d-flex align-center">
			<v-img class="mr-2" contain height="32" src="@/assets/payment/PaypalIcon.svg" width="32" />
			<div v-if="instalment" class="text-lowercase">
				<div class="ma-0 black--text text-subtitle-1"><span class="text-uppercase">p</span>aga in 3 rate</div>
			</div>
			<div v-else>
				<v-img class="mr-2" src="@/assets/payment/PaypalLogo.svg" />
			</div>
		</div>
	</Button>
</template>
<script lang="ts" setup>
import Button from '@/components/kennef/Button.vue'

const props = defineProps<{
	instalment?: boolean
}>()
</script>

<style scoped></style>
