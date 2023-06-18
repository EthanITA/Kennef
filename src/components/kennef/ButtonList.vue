<template>
	<v-btn-toggle :value="value" class="flex-col gap-0.5" style="width: 100%" @change="$emit('input', $event)">
		<Button v-for="(l, i) in list" :key="i" color="transparent" style="border-left-width: 1px">
			<v-row align="center" class="text-none secondary--text">
				<v-col class="flex-grow-0">
					<slot :item="l" name="left" />
				</v-col>
				<v-spacer />
				<v-col class="flex-grow-0 mr-auto">
					<slot :item="l" name="right" />
				</v-col>
			</v-row>
		</Button>
	</v-btn-toggle>
</template>
<script lang="ts" setup>
import Button from '@/components/kennef/Button.vue'

const props = defineProps<{
	list: any[]
	value?: number
}>()

defineEmits<{
	input: any
}>()
</script>
<style scoped></style>
