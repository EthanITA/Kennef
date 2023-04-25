<template>
	<v-container class="py-16">
		<h2 class="text-h4 secondar--text font-weight-semibold mt-4 mb-8">Profilo</h2>
		<v-row align="center" justify="start" no-gutters>
			<v-col cols="12" lg="6" md="6" xl="6">
				<v-container fluid>
					<v-list>
						<template>
							<v-list-item v-for="item in profileInfo" :key="item.name">
								<v-list-item-avatar>
									<v-icon x-large>
										{{ item.avatar }}
									</v-icon>
								</v-list-item-avatar>
								<v-list-item-content>
									<v-row>
										<v-col cols="6" lg="4" md="4" xl="4">
											<v-list-item-title
												class="secondary--text font-weight-semibold text-subtitle-1"
												v-html="item.name"
											></v-list-item-title>
											<a
												><span class="font-weight-semibold primary--text text-subtitle-2"
													>Cambia avatar</span
												></a
											>
										</v-col>
									</v-row>
								</v-list-item-content>
							</v-list-item>
						</template>
					</v-list>
				</v-container>
			</v-col>
			<v-col align="start" cols="12" lg="4" md="4" xl="4">
				<v-list>
					<template>
						<v-list-item>
							<v-list-item-content>
								<v-row justify="end">
									<v-col cols="6" lg="6" md="6" xl="6">
										<div class="text-right">
											<v-list-item-title class="grey--text mb-1"
												>francesco.morleoo@gmil.com
											</v-list-item-title>
											<a>Exit</a>
										</div>
									</v-col>
								</v-row>
							</v-list-item-content>
						</v-list-item>
					</template>
				</v-list>
			</v-col>
		</v-row>

		<h3 class="text-subtitle-1 secondary--text font-weight-regular mt-4 mb-8">Informazioni Personali</h3>
		<v-row>
			<v-col cols="12" lg="6" md="12" xl="6">
				<v-text-field
					class="rounded-0"
					filled
					hint="Inserisci il tuo nome."
					label="Nome"
					outlined
				></v-text-field>
			</v-col>
			<v-col cols="12" lg="6" md="12" xl="6">
				<v-text-field
					class="rounded-0"
					filled
					hint="Inserisci il tuo cognome."
					label="Cognome"
					outlined
				></v-text-field>
			</v-col>
		</v-row>

		<h3 class="text-subtitle-1 secondary--text font-weight-regular mt-4 mb-8">Informazioni Aziendali</h3>
		<v-row>
			<v-col cols="12" lg="6" md="12" xl="6">
				<v-text-field
					class="rounded-0"
					filled
					hint="La ragione sociale costituisce il nome nelle società di persone e può corrispondere anche ad un nome di fantasia."
					label="Ragione Sociale"
					outlined
				></v-text-field>
			</v-col>
			<v-col cols="12" lg="6" md="12" xl="6">
				<v-text-field
					class="rounded-0"
					filled
					hint="Se si ha una partita IVA inserire quella altrimenti inserire il proprio codice fiscale."
					label="Partita IVA/Codice Fiscale"
					outlined
				></v-text-field>
			</v-col>
		</v-row>
		<h3 class="text-subtitle-1 secondary--text font-weight-regular mt-4 mb-8">Indirizzo di fatturazione</h3>
		<v-row>
			<v-col cols="12" lg="6" md="12" xl="6">
				<v-text-field
					class="rounded-0"
					filled
					hint="Inserire il proprio indirizzo."
					label="Indirizzo"
					outlined
				></v-text-field>
				<v-text-field
					class="rounded-0"
					filled
					hint="Inserisci il tuo cognome."
					label="CAP"
					outlined
				></v-text-field>
				<v-text-field
					class="rounded-0"
					filled
					hint="Inserisci il tuo cognome."
					label="Paese"
					outlined
				></v-text-field>
				<v-btn class="rounded-0" color="primary" depressed>Modifica</v-btn>
			</v-col>
			<v-col cols="12" lg="6" md="12" xl="6">
				<v-text-field
					class="rounded-0"
					filled
					hint="Inserisci il tuo cognome."
					label="Provincia"
					outlined
				></v-text-field>
				<v-text-field
					class="rounded-0"
					filled
					hint="Inserisci il tuo cognome."
					label="Città"
					outlined
				></v-text-field>
				<v-text-field
					class="rounded-0"
					filled
					hint="Inserisci il tuo cognome."
					label="Telefono"
					outlined
				></v-text-field>
			</v-col>
		</v-row>
		<h2 class="text-h4 secondar--text font-weight-semibold mt-11 mb-8">Sicurezza</h2>
		<v-row>
			<v-col cols="12" lg="5" md="5" xl="5">
				<v-text-field
					class="rounded-0"
					disabled
					hint="La tua email"
					label="Email"
					outlined
					value="emaildiprova@gmail.com"
				></v-text-field>
			</v-col>
			<v-col cols="12" lg="5" md="5" xl="5">
				<v-text-field
					class="rounded-0"
					disabled
					hint="La tua password"
					label="Password"
					outlined
					type="password"
					value="password"
				></v-text-field>
			</v-col>
			<v-col cols="12" lg="2" md="2" xl="2">
				<v-btn class="rounded-0" color="primary" depressed> Modifica</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'VProfile',
	data() {
		return {
			profileInfo: [
				{
					name: 'Francesco Morleo',
					avatar: 'mdi-account-circle',
					email: 'francesco.morleoo@gmail.com'
				}
			]
		}
	}
}
</script>
