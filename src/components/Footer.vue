<template>
	<v-footer v-if="showFooter && component" :color="component.__name === 'MainFooterContent' ? 'secondary' : 'white'">
		<component :is="component" class="px-14" style="width: 80%" />
	</v-footer>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router/composables'
import MainFooterContent from '@/components/Footer/MainFooterContent.vue'
import MinimalisticFooterContent from '@/components/Footer/MinimalisticFooterContent.vue'

const component = ref<any | null>(null)

const currentPath = ref(useRoute())

const showFooter = ref(true)

type path = string

const hideFooterPaths: path[] = ['/login', '/not-found']
const minimalistPaths: path[] = [
	'/account',
	'/account/security',
	'/account/profile',
	'/account/orders',
	'/checkout',
	'/order-completed'
]

watch(
	currentPath.value,
	() => {
		if (minimalistPaths.includes(currentPath.value.path)) {
			component.value = MinimalisticFooterContent
		} else {
			component.value = MainFooterContent
		}
		showFooter.value = !hideFooterPaths.includes(currentPath.value.path)
	},
	{ deep: true, immediate: true }
)
</script>

<style scoped></style>
