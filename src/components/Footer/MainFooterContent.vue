<template>
	<v-container>
		<v-row class="pt-12 pb-14" no-gutters>
			<v-col cols="12" lg="6" md="6" xl="6">
				<h3 class="white--text text-h5 font-weight-semibold">
					Iscriviti alla nostra newsletter per rimanere aggiornato su offerte e promozioni.
				</h3>
			</v-col>
			<v-col cols="12" lg="6" md="6" xl="6">
				<div class="d-flex align-baseline">
					<v-text-field
						v-model="emailInput"
						class="rounded-0"
						clearable
						color="primary"
						label="Indirizzo email"
						outlined
						solo
					></v-text-field>
					<v-btn class="ml-5 rounded-0" color="white" outlined x-large>Iscriviti</v-btn>
				</div>
			</v-col>
		</v-row>
		<v-divider dark></v-divider>
		<v-row class="py-8" no-gutters>
			<v-col cols="12" lg="4" md="4" xl="4">
				<h5 class="white--text text-h5 font-weight-semibold">Link Utili</h5>
				<v-list color="secondary" dark>
					<v-list-item v-for="item in usefulLinks" :key="item.name" link>
						<v-list-item-content>
							<v-list-item-title class="text-h6 font-weight-thin white--text"
								>{{ item.name }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-col>
			<v-col cols="12" lg="4" md="4" xl="4">
				<h5 class="white--text text-h5 font-weight-semibold">L'Azienda</h5>
				<v-list color="secondary" dark>
					<v-list-item v-for="item in agencyLinks" :key="item.name" link>
						<v-list-item-content>
							<v-list-item-title class="text-h6 font-weight-thin white--text"
								>{{ item.name }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-col>
		</v-row>
		<v-divider dark></v-divider>
		<v-row class="py-8">
			<v-col cols="12" lg="4" md="4" xl="4">
				<h5 class="white--text text-subtitle-1 font-weight-regular">Spedizioni</h5>
				<div class="d-flex mt-5">
					<v-sheet v-for="item in shippingMethods" :key="item.name" color="secondary">
						<v-img :src="item.src" class="mr-5" width="100"></v-img>
					</v-sheet>
				</div>
			</v-col>
			<v-col>
				<h5 class="white--text text-subtitle-1 font-weight-regular">Metodi di Pagamento</h5>
				<div class="tw-flex tw-gap-1 tw-flex-wrap mt-5">
					<v-sheet v-for="item in paymentsMethods" :key="item.name" color="secondary">
						<v-img :src="item.src" class="mr-5" width="100"></v-img>
					</v-sheet>
				</div>
			</v-col>
		</v-row>
		<v-divider dark></v-divider>
		<v-row class="py-8">
			<v-toolbar color="secondary" dark elevation="0" height="100">
				<div>
					<v-img
						alt="Kennef Logotype"
						class="hidden-sm-and-down"
						contain
						src="@/assets/logotype-white.svg"
						width="131"
					/>
				</div>

				<div class="btns-l ml-12">
					<v-btn
						v-for="link in links"
						:key="link.title"
						:href="link.link"
						color="white"
						small
						target="_blank"
						text
					>
						<span>{{ link.title }}</span>
					</v-btn>
				</div>

				<v-spacer></v-spacer>

				<div class="btns-r">
					<v-btn color="white" text x-small>
						<v-icon>$ig</v-icon>
					</v-btn>

					<v-btn color="white" text x-small>
						<v-icon color="transparent">$fb</v-icon>
					</v-btn>
				</div>
			</v-toolbar>
		</v-row>
	</v-container>
</template>
<script lang="ts" setup>
const emailInput = ''
const usefulLinks = [
	{
		name: 'Contatti',
		link: '/#'
	},
	{
		name: 'Termini e Condizioni',
		link: '/#'
	},
	{
		name: 'Spedizioni e Resi',
		link: '/#'
	},
	{
		name: 'FAQ',
		link: '/#'
	}
]
const agencyLinks = [
	{
		name: 'Chi Siamo',
		link: '/#'
	},
	{
		name: 'Store',
		link: '/#'
	}
]
const paymentsMethods = [
	{
		name: 'visa',
		src: require('@/assets/payment/Visa.svg')
	},
	{
		name: 'paypal',
		src: require('@/assets/payment/Paypal.svg')
	},
	{
		name: 'mastercard',
		src: require('@/assets/payment/Mastercard.svg')
	},
	{
		name: 'klarna',
		src: require('@/assets/payment/Klarna.svg')
	}
]
const shippingMethods = [
	{
		name: 'dhl',
		src: require('@/assets/dhl.svg')
	}
]
const links = [
	{
		link: '/#',
		title: 'IMPRINT'
	},
	{
		link: '/#',
		title: 'DATA PROTECTION'
	},
	{
		link: '/#',
		title: 'COOKIES'
	},
	{
		link: '/#',
		title: 'TAKE BACKS'
	}
]
</script>
<style scoped></style>
