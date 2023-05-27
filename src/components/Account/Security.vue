<template>
	<v-container fluid>
		<div v-if="!showChangePassword">
			<p class="text-h4 my-0">Sicurezza</p>
			<v-divider class="ma-4" />
			<v-row class="my-2">
				<v-col>
					<p class="font-weight-bold">Email:</p>
					<p>{{ account.email }}</p>
				</v-col>
				<v-col>
					<p class="font-weight-bold">Password:</p>
					<p>**************</p></v-col
				>
				<v-col class="my-auto">
					<Button medium outlined @click="showChangePassword = true"> modifica </Button></v-col
				>
			</v-row>
			<v-divider />
		</div>
		<div v-else>
			<div class="d-flex">
				<v-icon v-ripple class="my-auto mr-4" large @click="showChangePassword = false"
					>mdi-keyboard-backspace</v-icon
				>
				<p class="text-h4 ma-0">Modifica password</p>
			</div>
			<v-divider class="my-4" />
			<p class="mb-4">Utilizza il modulo qui di seguito per modificare la password del tuo account Kennef.</p>
			<v-row>
				<v-col cols="6">
					<Textfield v-model="account.password" label="Password attuale" />
				</v-col>
				<v-col cols="6" />
				<v-col cols="6">
					<Textfield v-model="account.newPassword" label="Nuova password" />
				</v-col>
				<v-col cols="6">
					<Textfield v-model="account.confirmPassword" label="Conferma nuova password" />
				</v-col>
				<v-col>
					<Button medium>salva modifiche</Button>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<script lang="ts" setup>
import Button from '@/components/kennef/Button.vue'
import { ref } from 'vue'
import Textfield from '@/components/kennef/Textfield.vue'

const account = {
	email: 'francesco.morleoo@gmail.com',
	password: '',
	newPassword: '',
	confirmPassword: ''
}

const showChangePassword = ref<boolean>(false)
</script>

<style scoped></style>
