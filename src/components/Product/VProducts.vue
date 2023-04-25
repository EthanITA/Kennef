<template>
	<v-container>
		<v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
		<v-row>
			<v-col cols="12" lg="6" md="6" xl="6">
				<v-container class="grey lighten-3" fluid style="height: 100vh; width: 100%">
					<v-row>
						<!-- SLIDER [ GLIDEJS ]-->
						<v-col cols="12" lg="12" md="12" xl="12"></v-col>
						<v-col></v-col>
						<v-col></v-col>
						<v-col></v-col>
					</v-row>
				</v-container>
			</v-col>
			<v-col class="pl-16" cols="12" lg="6" md="6" xl="6">
				<div class="product-name">
					<h3 class="text-h4 secondary--text font-weight-regular">Cacciavite a croce Generico</h3>
					<h3 class="text-subtitle-2 grey--text font-weight-regular">SKU : FG 187/GR</h3>
				</div>
				<div class="my-10 price">
					<span class="text-decoration-underline text-subtitle-1 secondary--text font-weight-regular">
						13,99€</span
					>
					<span class="ml-4 text-caption grey--text font-weight-semibold">IVA INCLUSA</span>
				</div>
				<div class="colours d-flex">
					<v-sheet color="grey lighten-2" style="width: 50px; height: 50px"></v-sheet>
					<v-sheet color="grey lighten-2" style="width: 50px; height: 50px"></v-sheet>
				</div>
				<p class="mt-2 text-subtitle-2 secondary--text font-weight-thin">Colore : giallo</p>
				<v-select
					:items="sizes"
					class="rounded-0"
					color="primary"
					filled
					filters-text="text"
					filters-value="value"
					label="Filtra"
					return-object
					single-line
				></v-select>
				<v-btn block class="rounded-0" color="primary" depressed large>
					<span class="white--text text-button font-weight-semibold"> Aggiungi al carrello </span>
				</v-btn>
				<h4 class="text-h4 secondary--text font-weight-regular my-6">Descrizione Prodotto</h4>
				<v-sheet color="grey lighten-3" style="width: 100%; height: fit-content">
					<div class="pa-4">
						<h6 class="text-h6 secondary--text font-weight-semibold mt-6">Descrizione</h6>
						<div
							class="text-subtitle-1 secondary--text text--secondary font-weight-regular my-2"
							style="width: 60%"
						>
							Impugnatura ergonomica morbida in bimateriale. Lama in acciaio al cromo-vanadio, punta nera.
						</div>
						<h6 class="text-h6 secondary--text font-weight-semibold mt-6">Scheda Tecnica</h6>
						<div
							class="text-subtitle-1 secondary--text text--secondary font-weight-regular my-2"
							style="width: 60%"
						>
							<ul>
								<li v-for="(item, i) in item_specs" :key="i">
									<span>{{ item.text }}</span
									><span></span>
								</li>
							</ul>
						</div>
					</div>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'VProducts',
	data() {
		return {
			item_specs: [
				{
					text: 'Peso: 0,2 kg'
				},
				{
					text: 'Misure: punta da 3mm; lunghezza 75mm'
				}
			],
			sizes: [
				{
					text: '24',
					value: 1
				},
				{
					text: '32',
					value: 2
				},
				{
					text: '48',
					value: 3
				},
				{
					text: '52',
					value: 4
				},
				{
					text: '64',
					value: 5
				}
			],
			items: [
				{
					text: 'Home',
					disabled: false,
					href: 'breadcrumbs_dashboard'
				},
				{
					text: 'Prodotti',
					disabled: false,
					href: 'breadcrumbs_link_1'
				},
				{
					text: 'Cacciavite generico',
					disabled: true,
					href: 'breadcrumbs_link_2'
				}
			]
		}
	}
}
</script>

<style scoped>
.colours {
	gap: 12px;
}

ul {
	list-style: none;
	margin-left: 0px;
	padding-left: 0px;
}
</style>
