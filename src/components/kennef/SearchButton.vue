<template>
	<div class="flex-grow-1">
		<v-btn v-if="!enableInput" color="secondary" text @click="enableInput = !enableInput">
			<v-icon>mdi-magnify</v-icon>
		</v-btn>
		<Autocomplete v-else v-model="search" />
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Autocomplete from '@/components/kennef/Autocomplete.vue'

const enableInput = ref(false)
const search = ref('')
</script>
