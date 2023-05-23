<template>
	<v-container>
		<div
			class="font-weight-regular text-subtitle-2 grey--text"
			style="display: flex; justify-content: center; gap: 2rem"
		>
			<span v-ripple class="pa-1">Politica acquisti e rimborsi</span>
			<span v-ripple class="pa-1">Termini di servizio</span>
			<span v-ripple class="pa-1">Privacy</span>
		</div>
	</v-container>
</template>

<script lang="ts" setup></script>
<style scoped>
span {
	cursor: pointer;
	user-select: none;
}
</style>
