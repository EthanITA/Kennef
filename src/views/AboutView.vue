<template>
	<v-container class="tw-px-16">
		<div
			:class="{
				'!tw-grid-cols-1': $vuetify.breakpoint.smAndDown
			}"
			class="tw-grid tw-grid-cols-12 tw-gap-8"
		>
			<v-img
				:class="{
					'!tw-col-span-full': $vuetify.breakpoint.smAndDown
				}"
				aspect-ratio="1.3"
				class="tw-mt-4 tw-col-span-8"
				src="@/assets/who1.jpg"
			/>
			<div
				:class="{
					'!tw-col-span-full': $vuetify.breakpoint.smAndDown
				}"
				class="tw-col-span-4"
			>
				<p class="text-h4">Come nasce Kennef</p>
				<p>I nostri settori di riferimento sono Industrie, Artigiani, Professionisti e Privati.</p>
				<p>
					La nascita di questa attività è stata la risposta ad un’esigenza: le aziende hanno tempi sempre più
					stretti e chiedono risposte sempre più immediate e informazioni facilmente fruibili.
				</p>
				<p>
					Grazie al nostro e-commerce le aziende possono trovare in un clic prodotti professionali adatti ad
					ogni settore della meccanica e non solo.
				</p>
				<p>
					Tempi di consegna ridotti e disponibilità a magazzino di tutto il materiale caricato sul sito, sono
					sempre stati i nostri punti di forza insieme all’assistenza post vendita.
				</p>
			</div>
		</div>
		<div
			:class="{
				'!tw-grid-cols-1': $vuetify.breakpoint.smAndDown
			}"
			class="tw-grid tw-grid-cols-12 tw-gap-8 tw-mt-8"
		>
			<div
				:class="{
					'!tw-col-span-full': $vuetify.breakpoint.smAndDown
				}"
				class="tw-col-span-4"
			>
				<p class="text-h4">La nostra mission</p>
				<p>
					La nostra struttura interna, i servizi, l’organizzazione e il personale qualificato ci rendono
					un’azienda unica nel suo genere, in particolare nelle province di Lecce, Brindisi e Taranto.
				</p>
				<p>
					Una passione per il settore delle auto unita ad un’eccezionale preparazione tecnica e condita con
					una buona dose di determinazione nel raggiungere gli obiettivi professionali prefissati.
				</p>
				<p>
					Ma Kennef non è solo questo, perché grazie alla sua versatilità e all’attenzione prestata alle
					richieste, sempre più esigenti, di elettronica abbinata alla meccanica da parte del “cliente
					officina” è stata in grado di adeguarsi alle esigenze del mercato, attraverso ricerca, formazione e
					aggiornamento continuo per cavalcare l’onda dell’innovazione.
				</p>
				<p>
					E’ questa la strategia giusta per affrontare la nuova era della Meccatronica che impone agli
					autoriparatori di essere costantemente formati e pronti a risolvere qualsiasi tipo di problema.
				</p>
			</div>
			<v-img
				:class="{
					'!tw-col-span-full': $vuetify.breakpoint.smAndDown
				}"
				aspect-ratio="1.3"
				class="tw-mt-4 tw-col-span-8"
				src="@/assets/who2.jpg"
			/>
		</div>
	</v-container>
</template>
<script lang="ts" setup></script>
