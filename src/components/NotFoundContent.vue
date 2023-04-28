<template>
	<v-container>
		<v-row>
			<v-spacer />
			<v-col :cols="3" align-self="middle" class="text-center">
				<v-img src="@/assets/ManWithBox.svg" />
				<v-spacer />
				<h1 class="mt-12 mb-4 text-h4">Nessun risultato</h1>
				<v-spacer />
				<p class="!text-subtitle-2 grey--text">
					Prova a sistemare la ricerca o i filtri in modo da trovare ciò che stai cercando.
				</p>
			</v-col>
			<v-spacer />
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'NotFoundContent'
}
</script>

<style scoped></style>
