<template>
	<v-container class="pt-10 px-16">
		<v-row no-gutters>
			<v-col class="d-flex">
				<v-sheet class="justify-start align-self-center" color="white" elevation="0">
					<h1 class="text-h1 font-weight-regular">
						Dal bullone <br />
						in su
					</h1>
					<p class="text-h6 font-weight-regular ml-1 mt-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
						Sint necessitatibus maiores doloremque aut nemo accusantium <br />
						excepturi laboriosam expedita dolores id.
					</p>
					<v-btn class="rounded-0" color="primary" depressed x-large> Vai allo shop</v-btn>
				</v-sheet>
			</v-col>
			<v-col class="d-flex justify-end">
				<v-img class="mr-10" max-width="700" src="@/assets/landing.png"></v-img>
			</v-col>
		</v-row>

		<v-lazy>
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
		</v-lazy>

		<v-lazy>
			<div class="d-flex flex-column brand-list pt-16">
				<h2 class="mb-11 text-h5 font-weight-regular align-self-center">Cerca tra i migliori brand</h2>
				<v-row class="flex-child mb-16">
					<v-col v-for="brand in brands" :key="brand.name" class="d-flex" cols="12" lg="2" md="2" xl="2">
						<v-img :src="brand.img" class="mr-10" max-width="700"></v-img>
					</v-col>
				</v-row>
			</div>
		</v-lazy>
	</v-container>
</template>

<script>
export default {
	name: 'VHome',
	data() {
		return {
			info: [
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
			],
			brands: [
				{
					name: 'Autel',
					img: require('@/assets/brand/Autel.svg')
				},
				{
					name: 'Beta',
					img: require('@/assets/brand/Beta.svg')
				},
				{
					name: 'Comet',
					img: require('@/assets/brand/Comet.svg')
				},
				{
					name: 'Fasano',
					img: require('@/assets/brand/Fasano.svg')
				},
				{
					name: 'Fervi',
					img: require('@/assets/brand/Fervi.svg')
				},
				{
					name: 'Fiac',
					img: require('@/assets/brand/Fiac.svg')
				},
				{
					name: 'Lavor',
					img: require('@/assets/brand/Lavor.svg')
				},
				{
					name: 'Milwaukee',
					img: require('@/assets/brand/Milwaukee.svg')
				},
				{
					name: 'Omcn',
					img: require('@/assets/brand/Omcn.svg')
				},
				{
					name: 'Total',
					img: require('@/assets/brand/Total.svg')
				},
				{
					name: 'Upower',
					img: require('@/assets/brand/Upower.svg')
				},
				{
					name: 'Utility',
					img: require('@/assets/brand/Utility.svg')
				}
			]
		}
	}
}
</script>

<style lang="scss"></style>
