<template>
	<div class="d-flex flex-column info-list pt-16">
		<h2 class="mb-11 text-h5 font-weight-regular align-self-center">Acquista utensili su Kennef</h2>
		<v-sheet
			v-for="card in info"
			:key="card.title"
			class="d-flex flex-column align-self-center justify-center mb-11"
			elevation="0"
			width="300"
		>
			<v-icon class="mb-4" color="primary">
				{{ card.icon }}
			</v-icon>

			<h5 class="mb-3 text-center text-h5 font-weight-semibold">
				{{ card.title }}
			</h5>
			<p class="text-subtitle-1 text-center font-weight-thin">
				{{ card.description }}
			</p>
		</v-sheet>
	</div>
</template>

<script lang="ts" setup>
const info = [
	{
		title: 'Esperienza',
		description: 'Consulenza tecnica su scelta e utilizzo di utensili, attrezzature e materiali.',
		icon: '$kennef'
	},
	{
		title: 'Rapidità',
		description: 'Consegna in 48H in tutta Italia.',
		icon: '$camion'
	},
	{
		title: 'Assistenza',
		description: 'Siamo a disposizione sia prima che dopo la vendita.',
		icon: '$key'
	},
	{
		title: 'Convenienza',
		description: 'Scontistica per grandi forniture.',
		icon: '$cart'
	},
	{
		title: 'Sicurezza',
		description: 'Con Kennef sei al sicuro! Hai 14 giorni per il diritto di recesso e garanzia.',
		icon: '$shield'
	}
]
</script>

<style scoped></style>
