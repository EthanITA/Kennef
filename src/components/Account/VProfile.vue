<template>
	<v-container>
		<h2 class="text-h4 secondar--text font-weight-semibold mt-4 mb-8">Profilo</h2>
		<v-row align="center" class="bordered" justify="start" no-gutters>
			<v-col cols="12" lg="6" md="6" xl="6">
				<v-container fluid>
					<v-list>
						<v-list-item>
							<v-list-item-avatar>
								<v-icon x-large>mdi-account-circle</v-icon>
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="secondary--text font-weight-semibold text-subtitle-1">
									{{ account.firstName }} {{ account.lastName }}
								</v-list-item-title>
								<a
									><span class="font-weight-semibold primary--text text-subtitle-2"
										>Cambia avatar</span
									></a
								>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-container>
			</v-col>
			<v-col cols="12" lg="6" md="6" xl="6">
				<v-list>
					<v-list-item>
						<v-list-item-content>
							<div class="text-right">
								<v-list-item-title class="grey--text mb-1"
									>francesco.morleoo@gmail.com
								</v-list-item-title>
								<a>Esci</a>
							</div>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-col>
		</v-row>
		<v-divider />

		<h3 class="text-subtitle-1 secondary--text font-weight-regular mt-4 mb-8">Informazioni Personali</h3>
		<v-row>
			<v-col cols="12" lg="6" md="12" xl="6">
				<Textfield v-model="account.firstName" label="Nome"></Textfield>
			</v-col>
			<v-col cols="12" lg="6" md="12" xl="6">
				<Textfield v-model="account.lastName" label="Cognome"></Textfield>
			</v-col>
		</v-row>
		<v-divider />
		<h3 class="text-subtitle-1 secondary--text font-weight-regular mt-4 mb-8">Informazioni Aziendali</h3>
		<v-row>
			<v-col cols="12" lg="6" md="12" xl="6">
				<Textfield v-model="account.companyName" label="Ragione Sociale"></Textfield>
			</v-col>
			<v-col cols="12" lg="6" md="12" xl="6">
				<Textfield v-model="account.vatNumber" label="Partita IVA/Codice Fiscale"></Textfield>
			</v-col>
		</v-row>
		<v-divider />
		<h3 class="text-subtitle-1 secondary--text font-weight-regular mt-4 mb-8">Indirizzo di fatturazione</h3>
		<v-row>
			<v-col class="flex-col gap-1" cols="12" lg="6" md="12" xl="6">
				<Textfield v-model="account.address" label="Indirizzo"></Textfield>
				<Textfield v-model="account.cap" label="CAP"></Textfield>
				<Textfield v-model="account.country" label="Paese"></Textfield>
			</v-col>
			<v-col class="flex-col gap-1" cols="12" lg="6" md="12" xl="6">
				<Textfield v-model="account.province" label="Provincia"></Textfield>
				<Textfield v-model="account.city" label="Città"></Textfield>
				<Textfield v-model="account.phone" label="Telefono"></Textfield>
			</v-col>
		</v-row>
		<Button class="mt-8" medium>salva modifiche</Button>
	</v-container>
</template>

<script lang="ts" setup>
import Textfield from '@/components/kennef/Textfield.vue'
import Button from '@/components/kennef/Button.vue'

const account = {
	firstName: 'Francesco',
	lastName: 'Morleo',
	email: 'francesco.morleoo@gmail.com',
	companyName: '',
	vatNumber: '',
	address: '',
	cap: '',
	country: '',
	province: '',
	city: '',
	phone: ''
}
</script>

<style lang="sass" scoped>
::v-deep .v-divider
  margin-top: 1.5rem
</style>
