<template>
	<div>
		<ButtonList v-model="selected" :list="methods">
			<template #left="{ item }">
				{{ item.name }}
			</template>
			<template #right="{ item }"> + {{ item.price }}€ </template>
		</ButtonList>
		<StepperActions
			:valid="!!methods[selected]"
			class="mt-8"
			@next="$emit('next', methods[selected])"
			@prev="$emit('prev')"
		/>
	</div>
</template>
<script lang="ts" setup>
import StepperActions from '@/components/Checkout/Steps/StepperActions.vue'
import { ref } from 'vue'
import ButtonList from '@/components/kennef/ButtonList.vue'

const selected = ref<number>()

type Method = {
	name: string
	price: number
}

const methods = ref<
	{
		name: string
		price: number
	}[]
>([
	{
		name: 'Corriere Espresso - Standard',
		price: 19.9
	},
	{
		name: 'Corriere Espresso - Rapido',
		price: 29.9
	}
])

defineEmits<{
	next: (method: Method) => void
	prev: void
}>()
</script>

<style scoped></style>
