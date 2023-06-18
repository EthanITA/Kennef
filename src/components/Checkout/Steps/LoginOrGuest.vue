<template>
	<div>
		<div v-if="!showLogin" class="flex-col gap-1">
			<Button color="secondary" medium @click="showLogin = true">Login</Button>
			<Button color="secondary" medium @click="$emit('next')">acquista come ospite</Button>
		</div>
		<template v-else>
			<PaypaylFastCheckout />
			<TextHr class="my-8"><p class="ma-0">Oppure</p></TextHr>
			<div class="text-center">
				<p class="ma-0 subtitle-1 font-weight-medium">Hai già un account?</p>
				<p class="ma-0">Accedi per continuare</p>
				<Login class="pa-0" no-footer no-header @login="() => $emit('next')" />
				<Button class="subtitle-1 ma-0 mt-8" color="transparent" small @click="$emit('next')">
					<p class="ma-0 text-none">Continua come ospite</p>
				</Button>
			</div>
		</template>
	</div>
</template>
<script lang="ts" setup>
import PaypaylFastCheckout from '@/components/Checkout/PaypaylFastCheckout.vue'
import TextHr from '@/components/kennef/TextHr.vue'
import Login from '@/components/Login.vue'
import Button from '@/components/kennef/Button.vue'
import { ref } from 'vue'

const showLogin = ref<boolean>(false)

defineEmits<{
	next: void
}>()
</script>

<style scoped></style>
