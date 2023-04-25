<template>
	<v-container>
		<v-row align="start" class="my-16">
			<v-col cols="12" lg="6" md="6" xl="6">
				<h2 class="text-h4 secondar--text font-weight-semibold mt-4 mb-8">Profilo</h2>
			</v-col>
			<v-col cols="12" lg="3" md="3" offset-lg="3" offset-md="3" offset-xl="3" xl="3">
				<v-select
					:items="filters"
					class="rounded-0"
					color="secondary"
					filled
					filters-text="text"
					filters-value="value"
					label="Filtra"
					outlined
					return-object
					single-line
				></v-select>
			</v-col>
		</v-row>
		<v-row align="center">
			<!-- ITEM OF THE ORDER -->
			<v-col cols="12" lg="8" md="8" xl="8">
				<!-- ITEM  -->
				<v-row>
					<v-col cols="12" lg="1" md="1" xl="1">
						<!-- IMG -->
						<v-sheet color="grey lighten-2" height="100" width="100"></v-sheet>
					</v-col>
					<v-col class="ml-8" cols="12" lg="10" md="10" xl="10">
						<!-- NAME / DATE / BUTTONS   -->
						<span class="secondary--text text-subtitle-1 font-weight-regular">Nome</span>
						<p class="secondary--text text-caption font-weight-thin">Ordinato il 12 Ottobre 2022</p>
						<v-btn class="rounded-0 mr-2" color="primary" depressed>Ordina di nuovo</v-btn>
						<v-btn class="secondary--text rounded-0" color="white" depressed outlined
							>Visualizza Ordine
						</v-btn>
					</v-col>
				</v-row>
			</v-col>
			<v-col class="ml-auto" cols="12" lg="3" md="3" xl="3">
				<!-- UTILITY BUTTONS -->
				<v-btn block class="mb-2 rounded-0" color="secondary" depressed outlined> Ricevi assistenza</v-btn>
				<v-btn block class="mb-2 rounded-0" color="secondary" depressed outlined> Restituisci articoli</v-btn>
				<v-btn block class="rounded-0" color="secondary" depressed outlined> Scarica Fattura</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'VOrders',
	data() {
		return {
			filters: [
				{
					text: 'Ultime 24 ore',
					value: 24
				},
				{
					text: 'Ultimi 3 giorni',
					value: 3
				},
				{
					text: 'Ultimi 7 giorni',
					value: 7
				},
				{
					text: 'Ultimi 30 giorni',
					value: 30
				}
			]
		}
	}
}
</script>
