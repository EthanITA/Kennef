<template>
	<v-container fluid>
		<v-row align="center" justify="center" no-gutters>
			<v-col cols="12" lg="6" md="6" xl="6">
				<v-container fluid>
					<v-list>
						<template>
							<v-list-item :key="profileInfo.name">
								<v-list-item-avatar>
									<v-icon x-large>
										{{ profileInfo.avatar }}
									</v-icon>
								</v-list-item-avatar>
								<v-list-item-content>
									<v-row>
										<v-col cols="6" lg="4" md="4" xl="4">
											<v-list-item-title v-html="profileInfo.name"></v-list-item-title>
											<v-list-item-subtitle v-html="profileInfo.email"></v-list-item-subtitle>
										</v-col>
									</v-row>
								</v-list-item-content>
							</v-list-item>
						</template>
					</v-list>
				</v-container>
			</v-col>
			<v-col align="start" cols="12" lg="3" md="3" xl="3">
				<v-btn class="text-subtitle-1 font-weight-semibold" color="primary" text x-large>
					<v-icon class="mr-8" left x-large>mdi-face-agent</v-icon>
					Hai bisogno di assistenza ?
				</v-btn>
			</v-col>
		</v-row>

		<v-row class="my-16" justify="center">
			<v-col
				v-for="item in cards"
				:key="item.title"
				v-ripple
				:style="{
					backgroundColor: hover[item.title] ? 'rgba(182,182,182,0.27)' : 'white'
				}"
				cols="12"
				lg="3"
				md="3"
				style="cursor: pointer; border-radius: 4px; user-select: none"
				xl="3"
				@mouseleave="hover[item.title] = false"
				@mouseover="hover[item.title] = true"
			>
				<v-sheet class="ml-4" elevation="0" style="background-color: transparent" tile>
					<v-row align="baseline" style="gap: 1rem">
						<v-col class="ml-4 mt-3" cols="12" lg="1" md="1" xl="1">
							<v-icon color="secondary">{{ item.icon }}</v-icon>
						</v-col>
						<v-col cols="12" lg="9" md="9" xl="9">
							<span class="font-weight-semibold text-subtitle-1">{{ item.title }}</span>
							<div class="font-weight-regular text-subtitle-2 grey--text">{{ item.description }}</div>
						</v-col>
					</v-row>
				</v-sheet>
				<v-spacer />
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
import Vue, { ref } from 'vue'

const profileInfo = ref({
	name: 'Francesco Morleo',
	avatar: 'mdi-account-circle',
	email: 'francesco.morleoo@gmail.com'
})

const cards = ref([
	{
		title: 'I miei ordini',
		description: 'Restituisci o acquista nuovamente degli articoli.',
		icon: 'mdi-package-variant-closed'
	},
	{
		title: 'Profilo',
		description: 'Modifica i tuoi dati personali.',
		icon: 'mdi-account-outline'
	},
	{
		title: 'Sicurezza',
		description: 'Modifica la tua password',
		icon: 'mdi-lock-outline'
	}
])
const hover = Vue.observable(
	cards.value.reduce<{
		[key: string]: boolean
	}>((acc, curr) => {
		acc[curr.title] = false
		return acc
	}, {})
)
</script>

<style lang="sass">
.gray
	background-color: #5d2929
</style>
