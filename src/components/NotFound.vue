<template>
	<div class="flex-col" style="height: 100%">
		<div class="align-center flex-col mt-16">
			<Plug />
			<h1 class="mt-12 mb-4 text-h4">Qualcosa è andato storto</h1>
			<p class="!text-subtitle-2 grey--text">
				La pagina che cerchi è stata spostata, rimossa o non è mai esistita.
			</p>
			<Button medium @click="$router.push('/')"> torna alla home</Button>
		</div>
	</div>
</template>

<script setup>
import Plug from '@/components/Icons/Plug.vue'
import Button from '@/components/kennef/Button.vue'
</script>

<style scoped></style>
