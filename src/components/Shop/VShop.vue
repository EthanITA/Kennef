<template>
	<v-row>
		<v-col :cols="2" />
		<v-col>
			<GroupedProductsCard />
		</v-col>
		<v-col :cols="2" />
	</v-row>
</template>

<script lang="ts" setup>
import GroupedProductsCard from '@/components/Shop/GroupedProductsCard.vue'
</script>
